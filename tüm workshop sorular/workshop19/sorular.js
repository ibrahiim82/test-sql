/*
*1. Express.js'deki pre-middleware (ön ara yazılım) nedir ve nasıl çalışır?

Pre-middleware, Express.js’de istek (request) işleme sırasının başında yer alır ve istek üzerinde çeşitli işlemler yapılmasını sağlar. 

istemciden gelen istek (request) işlenmeden önce çalışan bir ara yazılımdır. Bu middleware, HTTP isteği üzerinden gelen veriyi, isteği yönlendirmeden veya yanıt (response) göndermeden önce işlemek için kullanılır. 

İstemciye yanıt verilmeden önce bu işlemleri yapmak, güvenlik, veri doğrulama, hata yönetimi gibi temel işlevlerin gerçekleştirilmesine olanak tanır.

Kimlik Doğrulama(Authantication): Kullanıcıların oturum açıp açmadığını kontrol etmek.
Yetkilendirme: Belirli bir kaynağa erişim izninin olup olmadığını kontrol etmek.
Veri Manipülasyonu: İstek verilerini değiştirmek veya işlemek (örneğin, JSON verisini doğrulamak).
Logging: İstek hakkında log bilgisi tutmak (IP adresi, istek türü, zaman damgası gibi).
Hata Yönetimi: Hataları yakalayarak uygun bir yanıt döndürmek.



*2. Express.js'de basit bir token (belirteç) tabanlı kimlik doğrulama sistemi nasıl uygulanır?

^1. Gerekli Paketlerin Kurulumu
Öncelikle, Express.js uygulamanıza JWT kullanabilmek için bazı bağımlılıklar yüklemeniz gerekiyor. jsonwebtoken paketi, token oluşturmak ve doğrulamak için kullanılır. Ayrıca, dotenv paketi ile çevre değişkenlerini yönetebilirsiniz (örneğin, JWT'nin gizli anahtarını saklamak için).


^2. JWT Token Oluşturma (Login)
Kullanıcı başarılı bir şekilde giriş yaptıktan sonra, sunucu ona bir JWT token verir. Bu token istemciye gönderilir ve her istekte kullanılabilir.

auth.js – Token Oluşturma ve Kullanıcı Girişi

const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

& .env dosyasını yükle
dotenv.config();

const app = express();
app.use(express.json());

& Basit kullanıcı verisi (gerçek bir uygulamada veritabanı kullanılır)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

& Giriş (login) endpoint'i
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    & Kullanıcıyı bul ve şifreyi doğrula
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre' });
    }

    & JWT token oluştur
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    & Token'i yanıt olarak gönder
    res.json({ token });
});

& Sunucuyu başlat
app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...');
});


^3. Token Doğrulama (Middleware)
Sunucuya yapılan her istekte, token doğrulama yapılmalıdır. Bu doğrulama, middleware kullanılarak yapılır. Eğer token geçerli değilse, istek reddedilir.

authMiddleware.js – Token Doğrulama

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

& Token doğrulama middleware'i
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; //& "Bearer <token>" formatında gelir

    if (!token) {
        return res.status(401).json({ message: 'Token bulunamadı' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token geçersiz' });
        }
        req.user = user; //& Kullanıcı bilgilerini isteğe ekle
        next(); //& Bir sonraki middleware veya route handler'a geç
    });
};

module.exports = authenticateToken;


^4. Token Doğrulama ile Korunan Rotalar
JWT doğrulama middleware'ini kullanarak korunan rotalar oluşturabilirsiniz. Bu rotalar yalnızca geçerli bir token ile erişilebilir olacaktır.

protected.js – Korunan Route

const express = require('express');
const authenticateToken = require('./authMiddleware');
const app = express();

& Korunan route - Yalnızca doğrulama yapan kullanıcılar erişebilir
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Bu korunan bir alandır', user: req.user });
});

app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...');
});


^5. .env Dosyası
Gizli anahtarınızı (secret key) ve diğer çevre değişkenlerinizi saklamak için .env dosyasını kullanabilirsiniz. .env dosyasını proje dizininize ekleyin ve şu şekilde yapılandırın:

JWT_SECRET=supersecretkey


^6. Tam Çalışan Örnek
Ana Dosya (server.js veya app.js gibi)

const express = require('express');
const dotenv = require('dotenv');
const authMiddleware = require('./authMiddleware');
const app = express();

& .env dosyasını yükle
dotenv.config();

app.use(express.json());

& Giriş (login) endpoint'i
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    & Kullanıcı verisi
    const users = [
        { id: 1, username: 'user1', password: 'password1' },
        { id: 2, username: 'user2', password: 'password2' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre' });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
});

& Korunan route
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Bu korunan bir alandır', user: req.user });
});

& Sunucuyu başlat
app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...');
});


^Kullanım:

Giriş yapmak için:

POST /login ile geçerli kullanıcı adı ve şifre gönderin.
Yanıt olarak bir JWT token alırsınız.

Korunan bir alana erişmek için:

GET /protected endpoint'ine, önceki adımda aldığınız token ile erişim sağlayın.
Token, istek başlığında (header) Authorization: Bearer <token> formatında gönderilmelidir.


Özet
Bu basit örnekte, Express.js ile JWT tabanlı kimlik doğrulama sistemi oluşturduk. Kullanıcılar giriş yaptıktan sonra, bir token alır. Bu token, her istekte kullanılır ve geçerliliği kontrol edilir. Eğer geçerli ise, kullanıcıya istenen bilgi sağlanır.



*3. Kullanıcı kimlik doğrulaması için Express.js'de token'ları (belirteçleri) nasıl oluşturur ve yayınlarsınız?

^Kullanıcı Doğrulama (/login endpoint’i):

Kullanıcı, POST /login endpoint'ine kullanıcı adı ve şifre gönderdiğinde, sunucu bu bilgileri kontrol eder. Eğer bilgiler doğruysa, jwt.sign() fonksiyonu kullanılarak bir token oluşturulur. Bu token, kullanıcıya yanıt olarak gönderilir.
JWT payload kısmında, kullanıcının ID'si ve kullanıcı adı gibi bilgileri taşıyabilirsiniz.
Token’ın geçerlilik süresi expiresIn özelliği ile belirlenir. Bu örnekte token 1 saat süreyle geçerlidir.

^Korunan Route (/protected endpoint’i):

Kullanıcı, Authorization başlığıyla token'ı gönderir. Token, Authorization: Bearer <token> formatında olmalıdır.
Token doğrulama işlemi için jwt.verify() fonksiyonu kullanılır. Eğer token geçerliyse, kullanıcının kimliği doğrulanır ve korunan alana erişim sağlanır.
Eğer token geçersizse veya yoksa, uygun bir hata mesajı döndürülür.



*4.Express.js'da basit token tabanlı kimlik doğrulama kullanmanın geleneksel kullanıcı adı/parola kimlik doğrulamasına göre avantajları nelerdir?

Token tabanlı kimlik doğrulama (JWT) ile, sunucu kaynakları daha verimli kullanılır, güvenlik artar, uygulamanın ölçeklenmesi kolaylaşır ve mobil ile çoklu platform desteği sağlanır. 
Geleneksel kullanıcı adı/parola doğrulama ise daha basit olmasına rağmen, sunucu tarafında oturum yönetimi gerektirdiği için daha fazla kaynak tüketebilir, ölçeklenebilirlik ve güvenlik açısından bazı zorluklar yaşanabilir.


^1. Stateless (Durumsuz) Doğrulama
Token tabanlı doğrulama: JWT gibi token tabanlı sistemlerde, her kullanıcı isteği bağımsız olarak ele alınır. Yani, sunucu hiçbir kullanıcı durumu (session) tutmaz. Token ile tüm kullanıcı bilgileri (kimlik, izinler vb.) token içinde saklanır ve her istekte gönderilir. Bu, "stateless" bir yapıdır.
Kullanıcı adı/parola doğrulama: Geleneksel yöntemlerde ise sunucu her kullanıcı için bir oturum (session) tutar ve kullanıcı adı/parola ile giriş yapıldığında oturum verisi sunucuda saklanır. Sunucu her istekte oturum bilgisini kontrol eder, bu da sunucu kaynaklarını tüketebilir ve daha karmaşık yönetim gerektirir.
Avantaj: Stateless yapısı, daha ölçeklenebilir bir sistem sağlar. Birden fazla sunucu kullanıldığında veya microservice mimarisine geçildiğinde token tabanlı doğrulama daha esnek ve kolaydır çünkü sunucu her isteği bağımsız şekilde işleyebilir.

^2. Ölçeklenebilirlik
Token tabanlı doğrulama: Çünkü her istek, kimlik doğrulama bilgilerini (token) içerir, sunucular arasında oturum senkronizasyonuna gerek yoktur. Bu durum, uygulamanın yatayda (birden fazla sunucuya yayılacak şekilde) ölçeklenmesini kolaylaştırır. Farklı sunucularda oturum yönetmek gerekmez.
Kullanıcı adı/parola doğrulama: Geleneksel oturum tabanlı doğrulama ile sunucu her kullanıcı için bir oturum bilgisi saklar. Bu oturum verisinin senkronize edilmesi gerektiği için, uygulamanın ölçeklenmesi daha zorlaşır ve daha fazla kaynak gerektirir.
Avantaj: Token tabanlı doğrulama, özellikle yüksek trafikli uygulamalarda daha kolay ölçeklenebilirlik sağlar.

^3. Mobil ve Çoklu Platform Desteği
Token tabanlı doğrulama: JWT gibi token tabanlı doğrulama, istemci ve sunucu arasındaki iletişimi, mobil cihazlar, web uygulamaları ve diğer istemciler için standart hale getirir. Token, tüm platformlarda HTTP başlıklarında taşınabilir ve sunucu her zaman token'ı doğrular.
Kullanıcı adı/parola doğrulama: Geleneksel doğrulama, oturum bilgilerini sunucu tarafında saklar ve bu bilgileri her istemci için senkronize etmek gerekebilir. Ayrıca, mobil cihazlar ve web istemcileri arasında oturum yönetimi daha karmaşık hale gelebilir.
Avantaj: Token tabanlı doğrulama, mobil uygulamalar ve çoklu platform desteği için daha uygundur, çünkü oturum yönetimi yerine her platformda token'lar kullanılabilir.

^4. Gelişmiş Güvenlik Özellikleri
Token tabanlı doğrulama: Token, şifreleme ile güvenli hale getirilebilir (örneğin, JWT şifreli payload ile gönderilebilir). Ayrıca, token’lar belirli bir süre sonra (örneğin 1 saat) geçerliliğini yitirir ve yeniden doğrulama için kullanıcıdan yeni bir token alınması gerekir. Bu "expiration" süresi, potansiyel kötüye kullanım durumlarına karşı güvenlik sağlar.
Kullanıcı adı/parola doğrulama: Geleneksel yöntemlerde, oturum süresi genellikle manuel olarak yönetilir. Ayrıca, uzun süre açık kalan oturumlar kötüye kullanılabilir. Kullanıcılar oturumlarını kapatmadıkları sürece oturum bilgileri geçerli olabilir.
Avantaj: Token tabanlı kimlik doğrulama, token süresi dolduğu zaman otomatik olarak geçerliliğini yitirir, bu da güvenliği artırır. Ayrıca, kullanıcılar kimlik doğrulama işlemlerini sürekli olarak yenilemek zorunda kalmaz.

^5. Sunucu Bağımsızlığı ve Dış Servislerle Entegrasyon
Token tabanlı doğrulama: JWT gibi token'lar, dış servislerle ve API'lerle kolayca entegre edilebilir. Örneğin, bir kullanıcı bir üçüncü parti hizmetle (Google, Facebook, vs.) giriş yaptıysa, bu hizmet bir token sağlar ve bu token'ı tüm sistemlerde kullanabilirsiniz. Token, merkezi olmayan sistemlerde de güvenle taşınabilir.
Kullanıcı adı/parola doğrulama: Geleneksel yöntemler daha çok sunucu tarafında yönetilen oturumlara dayanır ve dış servislerle entegrasyon daha karmaşıktır. Ayrıca, her servisin kendi oturum veritabanına sahip olması gerekir.
Avantaj: Token tabanlı doğrulama, çoklu hizmetlerin entegre edilmesi ve federasyon sistemlerinde daha esnektir.

^6. Kullanıcı Yetkilendirme ve İzinler
Token tabanlı doğrulama: Token içerisinde kullanıcı rolü, izinler veya diğer güvenlik bilgileri saklanabilir. Bu sayede sunucu, her istekte kimlik doğrulama ve yetkilendirme yapabilir.
Kullanıcı adı/parola doğrulama: Geleneksel yöntemlerde ise bu tür kullanıcı verileri genellikle sunucu tarafında saklanır ve her istekte oturum bilgisinin yeniden kontrol edilmesi gerekir.
Avantaj: Token tabanlı doğrulama, token içinde taşıdığı bilgilerle (örneğin, kullanıcı rolleri ve izinleri) daha ayrıntılı yetkilendirme sağlar.

^7. Çapraz Site İstek Sahteciliği (CSRF) Saldırılarına Karşı Direnç
Token tabanlı doğrulama: JWT, oturum bazlı kimlik doğrulama sistemlerinden daha az CSRF riskine sahiptir. Çünkü token'lar, genellikle HTTP başlıklarında taşındığı için, bir istemci tarafından gönderilmesi gerekir ve bu da kötü amaçlı web sayfalarının token'ı ele geçirmesini zorlaştırır.
Kullanıcı adı/parola doğrulama: Oturum tabanlı kimlik doğrulama, CSRF saldırılarına daha açıktır çünkü genellikle çerezler üzerinden oturum bilgileri taşınır ve bu bilgiler kötü amaçlı siteler tarafından kullanılabilir.

Avantaj: Token tabanlı doğrulama, CSRF saldırılarına karşı daha güvenlidir.

&CSRF (Cross-Site Request Forgery), yani Çapraz Site İstek Sahteciliği: 
bir web uygulamasındaki güvenlik açığından yararlanarak, kötü niyetli bir saldırganın, bir kullanıcının kimlik bilgilerini kullanarak yetkisiz işlemler gerçekleştirmesine sebep olan bir saldırı türüdür. CSRF, genellikle kullanıcının oturumunu çalmaya ve kullanıcı adına istenmeyen işlemler yapmaya yönelik bir saldırıdır.

^Özet
Token tabanlı kimlik doğrulama (JWT) ile, sunucu kaynakları daha verimli kullanılır, güvenlik artar, uygulamanın ölçeklenmesi kolaylaşır ve mobil ile çoklu platform desteği sağlanır. Geleneksel kullanıcı adı/parola doğrulama ise daha basit olmasına rağmen, sunucu tarafında oturum yönetimi gerektirdiği için daha fazla kaynak tüketebilir, ölçeklenebilirlik ve güvenlik açısından bazı zorluklar yaşanabilir.



*5. Token tabanlı kimlik doğrulama, istemci ile sunucu arasında güvenli iletişim kurmak için kullanılan bir yöntemdir. Kullanıcılar oturum açmak için ______ ve ______ yerine bir Token alır ve bu Tokenla kimliklerini doğrularlar.

Cevap:  username ve password



*6.Express.js'de, belirli kaynaklar için kullanıcı erişim izinlerini kontrol etmek için kullanılan bir tür middleware, ______ middleware olarak adlandırılır. Bu middleware, isteği inceler, kullanıcının izinlerini kontrol eder ve isteği ______ veya ______ değiştirebilir.

cevap: authorization (yetkilendirme) , obejct (nesne) , terminate (sonlandırmak)
//cevap: authorization (yetkilendirme) , önce , sonra


*7. Bir isteği işlemeden önce veya sonra ön işleme koymak için Express.js kullanılan ______ ara yazılım türü,  ara yazılımı olarak bilinir. Örneğin, bu ara yazılım, gelen verileri doğrulamak, kimlik doğrulaması gerçekleştirmek veya isteği bir şekilde kısıtlamak için kullanılabilir.

// Cevap: pre-middleware
Cevap: pre processing


*8. Express.js kullanarak e-posta göndermek için hangi yöntemleri ve kitaplıkları kullanabilirsiniz?

Express.js kullanarak e-posta göndermek için çeşitli yöntemler ve kitaplıklar kullanılabilir. E-posta göndermek, genellikle bir SMTP (Simple Mail Transfer Protocol) sunucusuyla iletişim kurarak yapılır. Express.js, bir sunucu olarak çalıştığı için, e-posta göndermek için SMTP sunucularını kullanabiliriz. Bu işlemi kolaylaştıran bazı popüler kitaplıklar şunlardır:

^1. Nodemailer
Nodemailer, Express.js uygulamalarında e-posta göndermek için en yaygın kullanılan kitaplıklardan biridir. Nodemailer, SMTP sunucusuyla kolayca iletişim kurmanızı sağlar ve e-posta gönderme işlemlerini oldukça basitleştirir.

npm install nodemailer

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

& E-posta gönderen bir POST endpoint
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    & Nodemailer transporter oluşturma
    const transporter = nodemailer.createTransport({
        service: 'gmail', //& E-posta servisi (örneğin Gmail)
        auth: {
            user: 'your-email@gmail.com', //& Giriş yapacağınız e-posta adresi
            pass: 'your-email-password'  // E-posta şifresi
        }
    });

    & E-posta seçenekleri
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: to,  //& Alıcı adresi
        subject: subject,  //& Konu
        text: text  //& Mesaj içeriği
    };

    & E-posta gönderme
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error);
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

& Sunucuyu başlatma
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

Bu örnekte, Express.js üzerinden gelen bir POST isteği ile e-posta gönderilmektedir. nodemailer.createTransport() metodu ile bir e-posta servisi (örneğin Gmail) üzerinden e-posta göndermek için gerekli yapılandırmalar yapılır. E-posta içeriği, mailOptions nesnesi ile belirlenir ve ardından transporter.sendMail() metodu ile e-posta gönderilir.


^2. Email-Templates
Eğer HTML e-posta şablonları kullanmak istiyorsanız, email-templates adlı bir kitaplık da kullanabilirsiniz. Bu kitaplık, dinamik içerik eklemeyi ve şablonları daha kolay yönetmeyi sağlar.

npm install email-templates

const express = require('express');
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const app = express();

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const email = new Email({
        message: {
            from: 'your-email@gmail.com'
        },
        send: true,
        transport: nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-email-password'
            }
        })
    });

    & E-posta gönderme
    email.send({
        template: 'welcome',  //& 'welcome' isimli şablon
        message: {
            to: to
        },
        locals: {
            text: text
        }
    }).then(() => {
        res.status(200).send('Email sent');
    }).catch(err => {
        res.status(500).send('Error sending email: ' + err);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

Bu örnekte, email-templates kitaplığı kullanılarak daha dinamik ve şablon bazlı e-posta gönderimi yapılmıştır. Nodemailer, e-posta iletisi için temel taşıyıcı (transport) işlevi görürken, şablonlar ve yerel değişkenler email-templates kitaplığı tarafından yönetilmektedir.


^3. SendGrid
SendGrid, bulut tabanlı bir e-posta gönderim servisidir ve Express.js uygulamaları ile entegre edilmesi kolaydır. SendGrid API'sini kullanarak e-posta gönderebilirsiniz.

npm install @sendgrid/mail

const express = require('express');
const sendGridMail = require('@sendgrid/mail');
const app = express();

sendGridMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const msg = {
        to: to,
        from: 'your-email@example.com',
        subject: subject,
        text: text,
    };

    sendGridMail
        .send(msg)
        .then(() => {
            res.status(200).send('Email sent');
        })
        .catch((error) => {
            res.status(500).send('Error sending email: ' + error);
        });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

SendGrid kullanarak e-posta göndermek oldukça basittir. sendGridMail.setApiKey() ile API anahtarınızı ayarladıktan sonra, e-posta içeriğini belirleyip send() metodunu kullanarak e-posta gönderebilirsiniz.


^4. Mailgun
Mailgun, bir başka popüler bulut tabanlı e-posta gönderme hizmetidir. Express.js ile kolayca entegre edilebilir ve genellikle yüksek hacimli e-posta gönderimleri için kullanılır.

npm install mailgun-js

const express = require('express');
const mailgun = require('mailgun-js');
const app = express();

const DOMAIN = 'your-domain.com';
const mg = mailgun({ apiKey: 'YOUR_MAILGUN_API_KEY', domain: DOMAIN });

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    const data = {
        from: 'your-email@your-domain.com',
        to: to,
        subject: subject,
        text: text
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error);
        }
        res.status(200).send('Email sent');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

Mailgun ile e-posta göndermek için önce Mailgun API anahtarınızı ve alan adınızı kullanarak bir yapılandırma yapmanız gerekir. Ardından, mg.messages().send() metodu ile e-posta gönderilebilir.

^Özet:
Nodemailer: En yaygın kullanılan e-posta gönderim kitaplığıdır ve SMTP sunucuları ile kolay entegrasyon sağlar.

Email-Templates: Nodemailer ile birlikte HTML e-posta şablonları göndermek için kullanılır.

SendGrid: Bulut tabanlı bir hizmet olup API anahtarı ile e-posta gönderimi sağlar.

Mailgun: Yüksek hacimli e-posta göndermek için kullanılan başka bir bulut tabanlı hizmettir.

Bu kitaplıklar, Express.js uygulamanızda e-posta göndermenin çeşitli yollarını sunar ve ihtiyacınıza göre birini seçebilirsiniz.



*9.Bir Express.js uygulamasında upload (dosya yükleme) işlemini nasıl gerçekleştirebilirsiniz? Bu amaç için yaygın olarak hangi ara katman yazılımı veya kitaplıklar kullanılır?

Bir Express.js uygulamasında dosya yükleme işlemi gerçekleştirmek için multer adlı popüler bir ara katman yazılımı (middleware) kullanılır. Multer, form verilerinde dosya yüklemeyi kolaylaştıran ve Express.js ile entegre olabilen bir Node.js kitaplığıdır. Multer, dosya verilerini doğru şekilde işler ve yükler, aynı zamanda dosya boyutunu sınırlamak, dosya türünü kontrol etmek gibi özellikler de sunar.

^1. Multer Kitaplığı ile upload (Dosya Yükleme)

Multer Kurulumu:
Öncelikle multer kitaplığını kurmanız gerekir:

npm install multer

const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

& Multer için depolama yapılandırması
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); //& Dosyaların kaydedileceği dizin
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); //& Dosya ismi, zaman damgası eklenerek belirleniyor
    }
});

& Multer ile dosya yükleme için middleware
const upload = multer({ storage: storage });

& Dosya yüklemek için bir POST isteği
app.post('/upload', upload.single('file'), (req, res) => {
    & 'file' form verisi içinde yüklenen dosyanın adıdır
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully!');
});

& Sunucuyu başlatma
app.listen(3000, () => {
    console.log('Server running on port 3000');
});


Açıklamalar:

Multer.diskStorage(): Dosyanın kaydedileceği dizini ve dosya adını belirtmek için kullanılır.

upload.single('file'): file form verisinde gelen tek bir dosyanın yüklenmesini sağlar. Eğer birden fazla dosya yüklenmesi gerekiyorsa, upload.array('files', 3) gibi bir yapı kullanılabilir (bu örnekte en fazla 3 dosya yüklenir).

req.file: Yüklenen dosya bilgileri bu nesne içinde yer alır. Bu nesne, dosyanın adı, yolu ve diğer bilgileri içerir.


Birden Fazla Dosya Yüklemek:
Birden fazla dosya yüklemek için upload.array() kullanabilirsiniz. Bu, belirli bir alana birden fazla dosya yüklemeyi sağlar.

& Maksimum 3 dosya yüklenmesini sağlar
app.post('/upload-multiple', upload.array('files', 3), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('No files uploaded.');
    }
    res.send('Files uploaded successfully!');
});
Bu örnekte, kullanıcı aynı anda en fazla 3 dosya yükleyebilir.

^2. Multer Yapılandırma Seçenekleri
Dosya Boyutu Limiti: limits özelliği ile dosya boyutu sınırlandırılabilir. Örneğin, 5 MB'den büyük dosyaların yüklenmesini engellemek için:
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB
});

Dosya Türü Kontrolü: Yüklenen dosyanın türünü kontrol etmek için fileFilter fonksiyonu kullanılabilir. Örneğin, yalnızca .jpg ve .png dosyalarına izin vermek için:

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png/;
        const mimeType = allowedTypes.test(file.mimetype);
        const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

        if (mimeType && extName) {
            return cb(null, true); // Dosya tipi geçerliyse
        } else {
            cb(new Error('Only jpg, jpeg, and png files are allowed'), false);
        }
    }
});


^3. Alternatif Kitaplıklar
Busboy: Busboy, daha düşük seviyeli bir kitaplıktır ve büyük dosya yüklemelerini hızlı bir şekilde işlemek için kullanılır. Ancak, Multer daha yüksek seviyeli bir API sunduğundan genellikle daha yaygın tercih edilir.

Formidable: Formidable, HTML form verilerini almak için kullanılan başka bir popüler Node.js kitaplığıdır ve dosya yükleme işlemlerini de destekler.


^4. Dosya Yükleme Güvenliği
Dosya yükleme işlemi sırasında güvenlik önemlidir. Aşağıdaki önlemler alınmalıdır:

Dosya türünü kontrol etme: Yalnızca güvenli dosya türlerinin yüklenmesine izin verin (örneğin, sadece .jpg, .png, .pdf gibi dosyalar).
Dosya boyutunu sınırlama: Büyük dosyaların yüklenmesini engellemek için dosya boyutu sınırları belirleyin.
Geçici dosya isimleri kullanma: Yüklenen dosyaların isimlerini zaman damgası veya rastgele karakterlerle değiştirerek çakışmaları önleyin.
Yüklenen dosyaları güvenli dizinlere kaydetme: Yüklenen dosyaların sunucunun kök dizininde değil, belirli bir alt dizinde saklanmasına özen gösterin.


^5. Dosya Yükleme Formu (HTML)
Kullanıcıların dosya yükleyebilmesi için bir HTML formu oluşturmak gerekir:

<form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file" />
    <button type="submit">Upload</button>
</form>

Bu form, kullanıcının dosya seçip yüklemesini sağlar.

^Özet:
Multer: Express.js ile dosya yükleme işlemleri için en yaygın kullanılan kitaplıktır.

Yapılandırma: Dosya boyutunu sınırlama, dosya türünü kontrol etme, yükleme dizinini belirleme gibi seçeneklerle özelleştirilebilir.

Güvenlik: Yüklenen dosyaların türü ve boyutları kontrol edilerek güvenlik önlemleri alınmalıdır.

Bu şekilde Express.js uygulamanızda dosya yükleme işlemlerini kolayca gerçekleştirebilirsiniz.









*1. Açıkça ayarlanmamışsa, bir Express.js uygulaması için varsayılan bağlantı noktası numarası nedir?

A) 3000
B) 8080
C) 5000
D) 8000

Cevap: A



*2. Express.js'daki middleware işlevleriyle ilgili olarak aşağıdakilerden hangisi doğrudur? 
A) Yalnızca yönlendirmeden sonra yürütebilirler. 
B) Uygulamanın istek-yanıt döngüsünde istek nesnesine, yanıt nesnesine ve bir sonraki middleware işlevine erişimi olan işlevlerdir.
C) İstek nesnesini değiştiremezler. 
D) İstek-yanıt döngüsünü her zaman sonlandırmalılar.


Cevap: B

Açıklama:
A) Yalnızca yönlendirmeden sonra yürütebilirler: Yanlış. Middleware işlevleri, yönlendirmeden önce veya sonra çalışabilirler. Yönlendirme işlemi middleware'in sonlandırılmasını sağlar, ancak middleware işlevlerinin çalışması sadece yönlendirme ile sınırlı değildir.

B) Uygulamanın istek-yanıt döngüsünde istek nesnesine, yanıt nesnesine ve bir sonraki middleware işlevine erişimi olan işlevlerdir: Doğru. Middleware işlevleri, istek nesnesi (req), yanıt nesnesi (res) ve bir sonraki middleware işlevini çağıran (next) parametrelerine erişebilirler. Bu işlevler, istek üzerinde işlemler yapabilir veya yanıtı şekillendirebilirler.

C) İstek nesnesini değiştiremezler: Yanlış. Middleware işlevleri, istek nesnesini değiştirebilirler. Örneğin, gelen verileri işlemek, doğrulamak veya ek bilgiler eklemek gibi işlemler yapılabilir.

D) İstek-yanıt döngüsünü her zaman sonlandırmalılar: Yanlış. Middleware işlevlerinin isteği sonlandırması gerekmez. Eğer bir middleware işlevi isteği sonlandırmazsa, bir sonraki middleware işlevine (next()) geçebilir. Eğer bir yanıt göndermek veya yönlendirme yapmak isteniyorsa, middleware döngüsü sonlandırılabilir.



*3. HTTP GET isteklerini yönlendirmek için Express.js bir uygulamada hangi yöntem kullanılır?

A) app.get()
B) app.post()
C) app.request()
D) app.push()

Cevap: A

Açıklama:
A) app.get(): Doğru. app.get() yöntemi, Express.js'de HTTP GET isteklerini yönlendirmek için kullanılır. Bu yöntem, belirtilen URL yolu (route) için gelen GET isteklerini işlemek amacıyla bir callback işlevi tanımlar.

B) app.post(): Yanlış. app.post() yöntemi, HTTP POST isteklerini yönlendirmek için kullanılır, GET istekleri için değil.

C) app.request(): Yanlış. app.request() diye bir yöntem yoktur. Express.js'de request nesnesi, her HTTP isteği ile otomatik olarak sunulur ve uygulama tarafından doğrudan kullanılmaz.

D) app.push(): Yanlış. app.push() yöntemi de Express.js'de mevcut değildir.



*4. Express.js uygulamalar, şablon oluşturma, veritabanı işlemleri ve daha fazlası gibi çeşitli görevleri yerine getirmek için ___________ birlikte çalışacak şekilde tasarlanmıştır.

Cevap: Middleware

Açıklama:
Middleware, Express.js uygulamalarında, gelen istekleri işlemek, yanıtları şekillendirmek ve uygulama işlemlerini düzenlemek için kullanılan fonksiyonlardır. Bu fonksiyonlar, istek-yanıt döngüsünün herhangi bir aşamasında çalışabilir ve çeşitli görevler yerine getirebilir.

Şablon oluşturma: Express.js, şablon motorları (örneğin, EJS, Pug, Handlebars) ile birlikte çalışarak dinamik HTML sayfaları oluşturabilir.

Veritabanı işlemleri: Express.js, veritabanı bağlantıları ve işlemleri için uygun middleware veya kütüphanelerle (örneğin, Mongoose veya Sequelize) entegre olabilir.



*5. İstemciye bir JSON yanıtı göndermek için, Express.js'deki yanıt nesnesinin ___________ yöntemini kullanın.

Cevap: json()

Açıklama:
const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    const data = { message: 'Merhaba, dünya!', success: true };
    res.json(data); //& JSON yanıtı gönder
});

app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor');
});
Bu örnekte, /data yoluna yapılan GET isteğine karşılık olarak bir JSON yanıtı gönderilir.



*6. ___________, Node.js ve Express.js uygulamalarında istek ayrıntılarını günlüğe kaydetmek için kullanılan, hata ayıklama ve izleme için yararlı olan bir araçtır.

Cevap: Morgan

Açıklama:
Morgan, Express.js için yaygın olarak kullanılan bir ara yazılımdır (middleware) ve HTTP isteklerini günlüğe kaydeder. Bu, uygulama geliştiricilerinin gelen istekleri izlemelerine, hataları tespit etmelerine ve performansları analiz etmelerine yardımcı olur.
Morgan, isteklerin HTTP yöntemi, URL, yanıt durumu kodu, yanıt süresi gibi bilgileri içeren günlükler oluşturur. Çeşitli formatlarda yapılandırılabilir.



*7. Express.js, öncelikle sunucu oluşturma ve yönetimini basitleştiren genişletilmiş bir dizi ___________ yöntemi aracılığıyla Node.js yeteneklerini geliştirir.

Cevap: routing


Açıklama:
Yönlendirme (Routing) yöntemleri, Express.js'in Node.js üzerinde sunduğu en büyük geliştirmelerden biridir. Bu yöntemler, HTTP isteklerini (GET, POST, PUT, DELETE vb.) yönetmeyi ve ilgili yanıtları göndermeyi çok daha kolay hale getirir.
Express.js, farklı HTTP istekleri için basit ve anlaşılır bir API sunarak, yönlendirme ve istek-yanıt döngüsünü kolayca yönetmeyi sağlar.


Örnek:
Express.js ile yönlendirme (routing) kullanımı:

const express = require('express');
const app = express();

& GET isteği için bir yönlendirme
app.get('/home', (req, res) => {
    res.send('Anasayfaya hoş geldiniz!');
});

& POST isteği için bir yönlendirme
app.post('/submit', (req, res) => {
    res.send('Form gönderildi!');
});

app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor');
});
Bu örnekte, Express.js ile yönlendirme yöntemlerini kullanarak, belirli URL'ler ve HTTP yöntemlerine göre gelen istekleri basitçe yönetiyoruz.

Özet:
Express.js, yönlendirme (routing) yöntemleri aracılığıyla Node.js'in yeteneklerini geliştirir ve sunucu oluşturma ve yönetimini çok daha basit hale getirir.



*8. Kullanıcı kimliği gibi Express.js bir URL'den veri yakalamak için ___________ parametreleri kullanırsınız

Cevap: route(yol)  / req.params

Açıklama:
Yol parametreleri (route parameters), URL'deki dinamik değerleri yakalamak için kullanılır. Bir yol parametresi, URL yolu içinde bir : işaretiyle tanımlanır ve bu parametreler, gelen istekteki belirli değerleri temsil eder.


Örneğin, kullanıcı kimliğini URL'den yakalamak için aşağıdaki gibi bir rota tanımlayabilirsiniz:

const express = require('express');
const app = express();

& Yol parametresi (userId) ile rota
app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId; //& URL'den userId parametresini yakala
    res.send(`Kullanıcı Kimliği: ${userId}`);
});

app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor');
});


Bu örnekte:

:userId bir yol parametresidir ve URL'den kullanıcı kimliğini yakalar. 
Örneğin, /user/123 adresine yapılan bir istekle userId değeri 123 olarak yakalanabilir.

Özet:
Kullanıcı kimliği gibi verileri URL'den yakalamak için yol parametreleri kullanırsınız. Bu parametreler, URL içinde : işaretiyle tanımlanır ve req.params ile erişilebilir.








*/