"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Auth Controller

const User = require("../models/user");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const jwt = require("jsonwebtoken");

//Bu sayfa, bir Authentication (Kimlik Doğrulama) Controller'ıdır ve kullanıcı girişi (login), token yenileme (refresh) ve çıkış (logout) işlemlerini yönetiriz.

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                }
            }
        */

    const { username, password } = req.body; // username ve password, istemciden gönderilen istek gövdesindeki (body) kullanıcı adı ve şifreyi alır.

    if (username && password) {
      // Eğer username ve password her ikisi de sağlanmışsa, işlem devam eder. Aksi takdirde, hata mesajı dönecek.

      const user = await User.findOne({ username }); // User modelini kullanarak, veritabanında username ile eşleşen bir kullanıcı sorgulanır.

      if (user && user.password == passwordEncrypt(password)) {
        // Kullanıcı bulunduysa, şifresi passwordEncrypt(password) fonksiyonu ile şifrelenmiş şifreyle karşılaştırılır. Eğer şifreler eşleşirse, işlem devam eder.

        if (user.isActive) {
          // Eğer kullanıcı aktifse (user.isActive), giriş işlemi devam eder. Eğer aktif değilse, hata mesajı verilir.

          /* TOKEN */

          let tokenData = await Token.findOne({ userId: user._id }); // Token modelinden, kullanıcıya ait bir token olup olmadığı kontrol edilir. Eğer yoksa, yeni bir token oluşturulacaktır.

          if (!tokenData) {
            const tokenKey = passwordEncrypt(user._id + Date.now());
            tokenData = await Token.create({
              userId: user._id,
              token: tokenKey,
            });
          } // Eğer token bulunamazsa, yeni bir token oluşturulur. Burada, kullanıcı ID'si ve o anki zaman (Date.now()) (unique olması için date.now kullanırız) birleştirilip şifrelenerek token oluşturulur ve veritabanına kaydedilir.

          /* TOKEN */

          /* JWT */

          const accessData = user.toJSON(); // Valuable data.
          const accessTime = "1m";
          const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, {
            expiresIn: accessTime,
          });   // Access Token: Kullanıcıya ait gerekli veriler (user.toJSON()) JWT (JSON Web Token) ile şifrelenip, 1 dakika süreyle geçerli olacak bir access token oluşturulur.

          // console.log('accessToken', accessToken)

          const refreshData = { id: user._id, password: user.password }; // Checkable data.
          const refreshTime = "3d";
          const refreshToken = jwt.sign(refreshData, process.env.REFRESH_KEY, {
            expiresIn: refreshTime,
          });   // Refresh Token: Kullanıcının ID'si ve şifresi gibi doğrulama verileri kullanılarak, 3 gün süreyle geçerli olacak bir refresh token oluşturulur.

          // console.log('refreshToken', refreshToken)

          /* JWT */

          res.status(200).send({
            error: false,               // İşlem başarılı olduğu için hata yok.
            token: tokenData.token,     // Veritabanında kaydedilen token anahtarı.
            bearer: {
              access: accessToken,
              refresh: refreshToken,
            }, // İki JWT (JSON Web Token): accessToken (kısa süreli, genellikle 1 dakika) ve refreshToken (daha uzun süreli, örneğin 3 gün).
            //Başarılı bir giriş sonrası, token, accessToken, refreshToken ve kullanıcı bilgileri istemciye (res.send()) iletilir.
            user,  // Bu satırda, user değişkeni, başarılı bir giriş sonrası, User modelinden bulunan kullanıcı verilerini temsil eder. 35.satırdaki userdir.
          });
        } else {    //(40.satır) Eğer kullanıcı aktif değilse, 401 Unauthorized (yetkisiz) hatası fırlatılır.
          res.errorStatusCode = 401;
          throw new Error("This account is not active.");
        }
      } else {      // (37.satır) Eğer şifreler eşleşmezse, 401 Unauthorized hatası döndürülür.
        res.errorStatusCode = 401;
        throw new Error("Wrong username or password.");
      }
    } else {        // (32.satır) Eğer kullanıcı adı veya şifre eksikse, kullanıcıya bir hata mesajı gösterilir.
      res.errorStatusCode = 401;
      throw new Error("Please enter username and password.");
    }
  },

  refresh: async (req, res) => {
    // refresh metodu, geçerli bir refresh token ile yeni bir access token almak için kullanılan bir asenkron fonksiyondur.
    /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'JWT: Refresh'
            #swagger.description = 'Refresh accessToken with refreshToken'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    bearer: {
                        refresh: '...refreshToken...'
                    }
                }
            }
        */

    const refreshToken = req.body?.bearer?.refresh; // refresh token, isteğin gövdesinden alınır.
    // req.body: İstek gövdesine (body) erişir.
    // bearer: Eğer req.body içinde bir bearer anahtarı varsa, bu bearer nesnesine erişir.
    // refresh: Eğer bearer nesnesi içinde bir refresh anahtarı varsa, bu refresh token'ına erişir.
    // Eğer herhangi bir aşama (örneğin, req.body, bearer veya refresh yoksa), Optional Chaining (?.) sayesinde refreshToken değeri undefined olur. Yani, kod hata fırlatmadan güvenli bir şekilde çalışır.


    if (refreshToken) { // Eğer refresh token varsa, işlem devam eder.

      const jwtData = await jwt.verify(refreshToken, process.env.REFRESH_KEY);  // jwt.verify() metodu ile refresh token doğrulanır ve içerisinde saklanan kullanıcı bilgileri alınır.

      if (jwtData) {    // Eğer refresh token geçerliyse, kullanıcı ID'si ve şifresi alınır.
        const { id, password } = jwtData;   // JWT içeriğindeki id ve password alınır.

        if (id && password) {
          const user = await User.findOne({ _id: id });   // Kullanıcı, id kullanılarak veritabanından sorgulanır.

          if (user && user.password == password) {  // Eğer kullanıcı bulunduysa ve şifreler eşleşiyorsa, işlem devam eder.
            if (user.isActive) {
              // JWT AccessToken:
              const accessToken = jwt.sign(
                user.toJSON(),
                process.env.ACCESS_KEY,
                { expiresIn: "30m" }
              );    // Eğer kullanıcı aktifse, yeni bir access token oluşturulur.

              res.status(200).send({
                error: false,
                bearer: {
                  access: accessToken,
                },
              }); // Başarılı bir işlem sonrası yeni access token istemciye gönderilir.
            } else {    // (136.satır) Eğer kullanıcı aktif değilse, hata döndürülür.
              res.errorStatusCode = 401;
              throw new Error("This account is not active.");
            }
          } else {      //  (135.satır) Eğer ID veya şifre hatalıysa, hata döndürülür.
            res.errorStatusCode = 401;
            throw new Error("Wrong id or password.");
          }
        } else {        // (132.satır) Eğer refresh token'dan ID ve şifre bulunamazsa, hata mesajı döndürülür.
          res.errorStatusCode = 401;
          throw new Error("There is not id and password in refreshToken.");
        }
      } else {          // Eğer refresh token geçersizse, hata mesajı döndürülür.
        res.errorStatusCode = 401;
        throw new Error("sa");
      }
    } else {            // Eğer refresh token eksikse, kullanıcıya bir hata mesajı gösterilir.
      res.errorStatusCode = 401;
      throw new Error("Please enter token.refresh");
    }
  },

  logout: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "SimpleToken: Logout"
            #swagger.description = 'Delete token key.'
        */

    const auth = req.headers?.authorization || null; // Token ...tokenKey...    // İsteğin başlıklarındaki authorization alanı kontrol edilir. Token burada yer alacaktır. Eğer yoksa, auth değeri null olur.
    const tokenKey = auth ? auth.split(" ") : null; // ['Token', '...tokenKey...']  // Token, 'Token' ve token anahtarı şeklinde ikiye ayrılır.auth başlığındaki token'ı ayırır ve tokenKey dizisini oluşturur.

    const tokenData = await Token.deleteOne({ token: tokenKey[1] });    // Token modelinde, token anahtarını veritabanında arar ve siler.tokenKey[1]'deki token'ı kullanarak MongoDB'deki Token koleksiyonunda eşleşen belgeyi siler.

    res.send({
      error: false,
      message: "Logout was OK.",
      data: tokenData,
    });
  },    // Çıkış işlemi başarılı olduğunda, istemciye başarılı bir yanıt gönderilir.
};


//! not:
//^ const auth = req.headers?.authorization || null: 
// req.headers: Bu, Express.js'deki gelen HTTP isteğinden (request) başlıkları (headers) almanızı sağlar. HTTP başlıkları, istekle ilgili ek bilgileri taşır. Başlıklar, örneğin içerik türü (Content-Type), kimlik doğrulama bilgileri (Authorization) gibi verileri içerir.
// req.headers?.authorization: Burada, başlıklardan authorization alanına erişiyoruz. Bu genellikle kimlik doğrulama bilgilerini taşır. authorization başlığının tipik bir içeriği şu şekilde olabilir:
// Bearer some.jwt.token.here
// Burada, Bearer anahtar kelimesi, token türünü belirtir (JWT token'ı gibi). some.jwt.token.here ise aslında token'ın kendisidir.
    // / ?. (Optional Chaining): Optional Chaining operatörü, güvenli bir şekilde bir özelliğe erişmek için kullanılır. Eğer req.headers veya authorization özelliği null veya undefined ise, herhangi bir hata fırlatmaz, bunun yerine undefined döner.
    // Örneğin, eğer req.headers veya authorization yoksa, auth değişkenine null atanır.
// || null: Eğer req.headers?.authorization undefined veya null ise, auth değişkenine null atanır. Bu, header içinde authorization başlığının bulunmaması durumunda bir hata oluşmasını engeller.

// Sonuç: Bu satır, gelen isteğin başlıkları arasında authorization başlığını alır. Eğer başlık yoksa, auth değişkeni null olur.


//^ const tokenKey = auth ? auth.split(' ') : null
// auth ? auth.split(' ') : null: Bu, auth (Authorization başlığı) varsa, onu işler. split(' ') ile authorization başlığını boşluk karakteriyle ayırır.

// Örnek:
// Eğer auth şu şekildeyse: "Bearer some.jwt.token.here"
// auth.split(' ') işlemi şu sonucu döndürecektir: ["Bearer", "some.jwt.token.here"]
// Bu işlem, Bearer anahtar kelimesini ve ardından gelen token'ı ayırarak bir dizi (array) oluşturur. Bu dizi şöyle olur:

// ["Bearer", "some.jwt.token.here"]
// auth.split(' '):

// Bu işlem, başlıkta Bearer kelimesinin ve token'ın arasındaki boşluğu kullanarak iki kelimeyi (ya da daha fazla kelimeyi) ayırır. Genellikle, Authorization başlığı şu formatta gelir:

// "Bearer <token>"
// Bu işlem sonucunda, bir diziyi alırız:
// ["Bearer", "<token>"]
// null: Eğer auth yoksa (örneğin, auth null ise), o zaman tokenKey değişkeni null olur.

// Sonuç:
// Bu satırda, auth başlığından, Bearer ve token'ı ayırarak bir dizi oluşturulmaya çalışılır. Eğer auth yoksa, tokenKey değeri null olur.


//^ const tokenData = await Token.deleteOne({ token: tokenKey[1] })
// Açıklama:
// Token.deleteOne({ token: tokenKey[1] }): Bu, MongoDB veritabanındaki Token koleksiyonunda, token alanı ile eşleşen bir belgeyi (document) silmek için kullanılır.

// tokenKey[1] ifadesi, auth.split(' ') işleminden dönen dizinin ikinci elemanına, yani token'a erişir. Örneğin, auth.split(' ') sonucu ["Bearer", "some.jwt.token.here"] olursa, tokenKey[1] değeri "some.jwt.token.here" olur.

// deleteOne({ token: tokenKey[1] }):

// MongoDB'deki Token koleksiyonunda, token alanı tokenKey[1] ile eşleşen bir belgeyi bulur ve siler.
// deleteOne() sadece bir belgeyi siler, yani eşleşen ilk belgeyi hedef alır.
// await: Bu, deleteOne işleminin asenkron olduğunu gösterir. Veritabanı işlemi tamamlanana kadar kodun beklemesini sağlar ve sonucu tokenData değişkenine atar.

// Sonuç:
// Bu satır, MongoDB'deki Token koleksiyonunda, gelen token'a karşılık gelen belgeyi siler. Eğer silme işlemi başarılıysa, tokenData değişkeni, silinen belge ile ilgili bilgileri içerir.







