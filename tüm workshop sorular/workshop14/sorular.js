/*

^1. Gerekli koşullarla eşleşen regex ifadesini yazın.


*** /abc veya /acd yoluyla eşleşen bir yönlendirici yazın.

/^\/abc|/acd$

^/abc|/acd$

/    ^: İfadenin başında eşleşmeyi başlatır.
    /abc: "/abc" yoluna eşleşir.
    |: "veya" (OR) operatörü. Yani "/abc" veya "/acd" yolu.
    /acd: "/acd" yoluna eşleşir.
    $: İfadenin sonunda eşleşmeyi sonlandırır.

const express = require('express');
const app = express();

    /// /abc veya /acd yolu için yönlendirme
app.get(/^\/(abc|acd)$/, (req, res) => {
  res.send('Yönlendirici /abc veya /acd');
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});


*** /a(herhangi bir tek rakam)/ ile ve ardından 2 kez c veya 3 kez c ile eşleşen bir yönlendirici yazın veya

/^\/a\d/c{2,3}$

/    ^: İfadenin başında eşleşme arar.
    /a: "/a" ifadesine tam olarak eşleşir.
    \d: Tek bir rakamı eşler (0-9 arasındaki herhangi bir rakam).
    /: "/" karakterine tam eşleşir.
    c{2,3}: "c" harfini 2 ya da 3 kez ardışık olarak eşler (2 veya 3 kez).
    $: İfadenin sonunda eşleşme arar.

const express = require('express');
const app = express();

/// /a<tek rakam>/cc veya /a<tek rakam>/ccc yollarını eşleştirir
app.get(/^\/a\d\/c{2,3}$/, (req, res) => {
  res.send('Yol /a<tek rakam>/cc veya /a<tek rakam>/ccc ile eşleşti');
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});


*** "Hello" dizesiyle bitmesi gereken ve herhangi bir hayır içerebilen rotalar. bundan önceki herhangi bir karakterin.

cevap:  ^.*Hello$

/    ^: İfadenin başında eşleşme arar. Bu, URL'nin başından itibaren eşleşmeye başlanacağını belirtir.
    .*: "Herhangi bir karakterin" sıfır veya daha fazla kez tekrarlanabileceğini belirtir. Burada "any number of any characters" ifadesine karşılık gelir. 
         Bu, baştan sonra kadar her türlü karakterin olabileceğini ifade eder. 
    Hello: Bu, son kısmın "Hello" olmasını zorunlu kılar.
    $: İfadenin sonunda eşleşme arar. Yani, "Hello" kelimesi URL'nin sonuna kadar gelmeli.

const express = require('express');
const app = express();

/// Yolu "/Hello" ile biten ve öncesinde herhangi bir şey olabilen URL'leri eşleştirir
app.get(/^.*Hello$/, (req, res) => {
  res.send('Bu yol "Hello" ile bitiyor');
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});



*** Eşleşen rotalar "Hello" dizesiyle bitmeli ve bundan önce herhangi bir karakter içermemelidir

cevap:   ^Hello$

/    ^: İfadenin başında eşleşme arar. Yani, URL'nin tam başından itibaren eşleşme başlar.
    Hello: Bu, yolun tam olarak "Hello" olmasını zorunlu kılar.
    $: İfadenin sonunda eşleşme arar. Yani, "Hello" kelimesi URL'nin tam sonunda yer almalıdır.

const express = require('express');
const app = express();

/ Yalnızca "/Hello" ile biten yolları eşleştirir
app.get(/^Hello$/, (req, res) => {
  res.send('Bu yol tam olarak "/Hello" ile eşleşti');
});

app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor');
});



^2.Öğrenci bilgilerini içeren bir nesnem var. İstediğiniz yönlendiricileri kodlayın.

"use strict";
const express = require("express");
const app = express();
const router = express.Router();
app.use(router);
const students = [
 {
 id: 1,
 name: "Alex",
 },
 {
 id: 2,
 name: "Steve",
 },
];

a)Get yöntemiyle tüm öğrencileri json formatında döndürür
b)İstenilen öğrenciyle ilgili bilgileri json formatında döndürür
c)Kodda eksik/hata varsa lütfen düzeltiniz.

*Cevaplar:

/ Tüm öğrencileri JSON formatında döndüren GET yönlendiricisi
router.get("/students", (req, res) => {
  res.json(students);
});

/ Belirli bir öğrenciyi ID ile JSON formatında döndüren GET yönlendiricisi
router.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id,);
  const student = students.find((item) => item.id === id);
  if (!student) {
    res.status(404).json({ message: "Öğrenci bulunamadı" });
  }
    res.json(student)
});

/ Sunucuyu başlatma
app.use(router);
app.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor");
});

Tüm öğrencileri görmek için:    GET http://localhost:3000/students

Belirli bir öğrenciyi görmek için:  GET http://localhost:3000/students/1

Eğer ID'yi geçerli olmayan bir öğrenciyle değiştirilirse, 404 hatası alırsınız.



^3. Aşağıdaki talimatları kodlayın.

a) Express framework'u (çerçevesini) import edin (içe aktarın) ve bir Express application (uygulaması) oluşturun

npm init -y

npm install express

/ Express'i dahil et
const express = require('express');

/ Uygulamayı oluştur
const app = express();

/ Anasayfa yönlendiricisi
app.get('/', (req, res) => {
  res.send('Merhaba, Express!');
});

/ Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});

nodemon app.js


b) app.use() kullanarak bir middleware function tanımlayın. Bu function bir mesajı günlüğe kaydeder ve ardından denetimi bir sonraki middleware veya route handler (rota işleyicisine) geçirmek için next() öğesini çağırır.

app.use() ile Middleware Tanımlaması: app.use() fonksiyonu, belirli bir işlevi (middleware) tüm gelen istekler için çalıştırır.
Loglama İşlemi: Middleware, gelen isteğin bilgilerini loglar (örneğin, istek yolu).
next() Fonksiyonu: next() fonksiyonu çağrıldığında, Express bir sonraki middleware veya route handler'a geçer.


"use strict";
const express = require("express");
const app = express();

/ Middleware: İstek geldiğinde loglama işlemi yapacak
app.use((req, res, next) => {
  / İstekle ilgili bilgileri logluyoruz
  console.log(`Yeni bir istek geldi: ${req.method} ${req.url}`);
  
  / next() fonksiyonu ile bir sonraki middleware veya route handler'a geçiş sağlanır
  next();
});

/ Basit bir route tanımlaması
app.get("/", (req, res) => {
  res.send("Ana sayfaya hoş geldiniz!");
});

/ Sunucuyu başlatma
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});


c) app.get() kullanarak root (kök) URL ('/') için bir rota handler (işleyicisi) tanımlayın.Bu handler (işleyici), root (kök) URL'ye bir GET isteği yapıldığında "Merhaba!" ile yanıt verir.

"use strict";
const express = require("express");
const app = express();

/ Root URL ("/") için GET isteği ile yanıt verecek route handler
app.get("/", (req, res) => {
  res.send("Hello!");  // Yanıt olarak "Hello!" gönderilir
});

/ Sunucu başlatma
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});

app.get("/"): Bu satırda, "/" (root URL) için bir GET isteği tanımlıyoruz. 
Bu, kullanıcı tarayıcıya http://localhost:3000/ adresine gittiğinde çalışacak olan yönlendiricidir.
res.send("Hello!"): Yönlendirici çalıştığında, res.send() fonksiyonu kullanılarak "Hello!" mesajı istemciye döndürülür.


d) Son olarak Express sunucusunu başlatın ve 3000 numaralı bağlantı noktasını dinleyin.

Sunucu Başlatma: Express sunucusunun çalışması için app.listen() metodunu kullanırız. Bu metod, belirtilen port numarasına istekleri dinlemeye başlar.
Port Numarası Belirleme: Sunucuya hangi portta dinlemesi gerektiğini belirtmek için bir port numarası gireriz. Bu örnekte 3000 portunu kullanacağız.
Başlatma Mesajı Gösterme: Sunucu çalışmaya başladığında, terminal veya konsolda bir mesaj yazdırmak için console.log() fonksiyonunu kullanırız.

"use strict";
const express = require("express");
const app = express();

/ Root URL ("/") için GET isteği ile yanıt verecek route handler
app.get("/", (req, res) => {
  res.send("Hello!");
});

/ Sunucu başlatma ve 3000 portunda dinleme
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});


app.listen(PORT, callback):

PORT: Sunucunun dinleyeceği port numarasını belirtiriz. Burada, port numarası olarak 3000'i kullanıyoruz.
callback: Sunucu başarıyla başlatıldığında çalışacak bir fonksiyondur. Bu fonksiyonda, terminale bir mesaj yazdırılır. Bu mesaj, sunucunun hangi portta çalıştığını belirtir.

app.listen(3000, () => {
  console.log('Sunucu http://localhost:3000 adresinde çalışıyor');
});



^4.Aşağıdaki kod bloğunda, 500 status code (durum kodunu) ve oluşturulan hatanın ayrıntısını döndüren özel bir middlaware hatası eksik. Kodu tamamlayın.

const express = require("express");
const app = express();
app.use((req, res, next) => {
 throw new Error("Something went wrong!");
});
app.use(errorHandler);
app.listen(8000, () => {
 console.log("Server started on port 8000");
});

*Cevap:

Hata Oluştuğunda next() ile Hataları Geçirme: İlk middleware içinde, bir hata oluşturuluyor (throw new Error("Something went wrong!")).
Bu hata, Express'in hata yönetim mekanizmasına (error handling) geçirilir.
Error Handling Middleware: Hata meydana geldiğinde, Express bu hatayı, genellikle son middleware olarak kullanılan bir error handler middleware'ine aktarır. 
Bu middleware, gelen hatayı yakalar, uygun bir HTTP durum kodu döner ve hata mesajını içeren bir yanıt gönderir.

const express = require("express");
const app = express();

/ İlk middleware: Hata fırlatıyor
app.use((req, res, next) => {
  throw new Error("Something went wrong!");  // Hata fırlatılır
});

/ Hata işleyici middleware: 500 durum kodu ile hata detaylarını döndürür
app.use((err, req, res, next) => {
  console.error(err.stack);  // Hata stack trace'ini konsola yazdır
  res.status(500).json({ message: err.message });  // 500 hata kodu ve hata mesajı döndür
});

/ Sunucuyu başlat
app.listen(8000, () => {
  console.log("Server started on port 8000");
});


İlk Middleware:
Bu middleware, her istekte bir hata fırlatır. Yani, herhangi bir istek yapıldığında, hemen bir Error nesnesi oluşturulacak ve hata fırlatılacaktır.
throw new Error("Something went wrong!");

Error Handling Middleware:
Express, hata fırlatıldığında, bu hatayı aşağıdaki gibi tanımlanmış olan hata işleyici middleware'ine aktarır.
Bu middleware, hatayı alır ve 500 durum kodu ile bir JSON yanıtı döndürür. Ayrıca hata stack trace'ini konsola yazdırır.
app.use((err, req, res, next) => {
  console.error(err.stack);  // Hata detaylarını konsola yazdırır
  res.status(500).json({ message: err.message });  // Hata mesajını JSON olarak döndürür
});

Sunucuyu Başlatma:
Son olarak, Express sunucusunu 8000 portunda başlatıyoruz.
app.listen(8000, () => {
  console.log("Server started on port 8000");
});

*/