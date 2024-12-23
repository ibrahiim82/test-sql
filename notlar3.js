/*


MULAKAT SORUSU
(MVC) model view controller nedir,ne işe yarar,model ne işe yarar,view ne işe yarar,controller ne işe yarar?


* require
require, Node.js'de modül (kütüphane veya dosya) yüklemek için kullanılan bir fonksiyondur. Node.js, JavaScript kodlarını modüller halinde organize etmenize olanak sağlar ve require, bu modülleri projenize dahil etmek için kullanılır.

* createServer
createServer, Node.js'in http veya https modülünde bulunan bir metodtur ve HTTP (veya HTTPS) sunucusu oluşturur.
Bu metodu kullanarak gelen HTTP isteklerini dinleyebilecek bir sunucu başlatırsınız

* ORM:
SQL converter görevi görür. yazdığımız kodu sql koduna döndürür.
SQL, MySQL, SQLServer, POSTGRESQL gibi farklı markalara ait sql kodlarında az da olsa farklılıklar vardır bu farklılıklarda sorun yaşanmamaması için ORM kullanılır.

* Sequelize:
Nodejs'de kullanılan ORM yapıları. en populeri Squelizedir.

* Model:
Front-end'de forum doldururken girdiğimiz verileri depolayan kısım.
view: müşteri
model: aşçı
controller: garson

* JS'de false değerler nelerdir?

* Callback nedir,ne işe yarar?

* CRUD == POST , Get , Put , Delete
CREATE = POST , READ = GET , UPDATE = PUT , DELETE = DELETE

/Get(200)
/post(200),(201)
/put(200),(204)
/delete(200),(204)

* Javascriptte join, split, reverse kullanırken split kullanmak gerekir!! yani join veya reverse kullanmamız gerekse bile split ile kullanmamız gerekir çünkü stringlerde split kullanılır. reverse ve join array metodudur string metodu için split kullanılır. ÖRNEĞİN 'ibrahim' ismini ters çevirmemiz gerekirse reverse array metodu olduğu için sadece reverse kullanılmaz string metodu gerekir yani split ve reverse kullanılır.


? MULAKAT SORUSU
* (MVC) model view controller nedir,ne işe yarar,model ne işe yarar,view ne işe yarar,controller ne işe yarar?
Model:
Front-end'de forum doldururken girdiğimiz verileri depolayan kısım.
view: müşteri
model: aşçı
controller: garson

* reactta performansı optimize etme yöntemi: Debounce

* error boundary: 
Bir hatanız var ve render probleminiz yok. Kullanıcı hataya rağmen Reactın varsayılan davranışı BEMBEYEAZ EKRAN (js hataları, sonsuz döngüler,render hataları, yüklenemeyen kaynak dosyalar, router sorunları vsvs ) ile karşı karşıya kalmıyor, ve uygulama daha fazla bozulmuyor. Kullanıcıya tabiki daha iyi bir deneyim sağlanıyor.


isim();

function isim(){
  console.log('deneme');
 }

 isim(); // invoke

hoisting: sadece function declarationda (yani hem yukarıda hem de aşağıda) çalışır

* Front-endde data saklama:
^ LocalStorage: kalıcı datadır, biz silmediğimiz sürece silinmez.
^ SessionStorage: geçici datadır, tarayıcıyı kapattığımız an silinir.
session data nerede saklanır?
^ Cookies: süreli data saklama (3gün,1hafta,1ay...)
session demek sessionStorage demek değildir, sessionlar cookies'dir.

^ matchedCount:0,1,2   modifiedCount=0,1  durumu
matchedCount:0,1,2   modifiedCount=0,1  durumu
matchedCount: Eşleşen belge sayısını belirtir.
modifiedCount: Gerçekten değiştirilen belge sayısını belirtir.

matchedCount, güncelleme işleminin hangi sayıdbelgenin eşleştiğini gösterir.
Eğer bir belge belirli bir filtreye uyaragüncellenmeye çalışılıyorsa, matchedCount filtreyle eşleşen belge sayısını belirtir.
modifiedCount, gerçekten güncellenen belge sayısını gösterir.
Yani, eşleşen belgeler üzerinde bir değişikliyapılıp yapılmadığını belirler. Eğer eşleşen belgenin mevcut durumu zaten güncellenmeye gerek olmayacaksa, modifiedCount sıfır olur.

matchedCount: 0, modifiedCount: 0: Hiçbir belge eşleşmedi veya eşleşen belgeler güncellenmeye gerek duymadı.
matchedCount: 1, modifiedCount: 1: Bir belge eşleşti ve gerçekten bir değişiklik yapıldı.
matchedCount: 2, modifiedCount: 1: İki belge eşleşti, ancak sadece birinin verisi güncellendi.


 Kodda _id Kullanımı: Çoğu zaman, bir veritabanı nesnesiyle ilişkili kimlik alanlarını belirtirken id yerine _id kullanılır. Bu, MongoDB'nin veya başka bir veritabanı sisteminin standartlarına uygun olmanın yanı sıra, genellikle veritabanı seviyesinde daha özel bir kimlik alanını belirtir.

/_id: Veritabanında veya nesnede otomatik olarak oluşturulan veya benzersiz kimliği tanımlar.
/id: Genellikle geliştiriciler tarafından manuel olarak atanabilir ve başka amaçlarla kullanılabilir.

env dosyasında yazılan tüm değerler stringdir. (abc,10,true,20,false hepsi string ifadedir)


* Mongoose ile temel CRUD işlemlerini gerçekleştirebileceğiniz bazı metotlar:
Create: save()
Read: find(), findOne(), findById()
Update: updateOne(), updateMany(), findOneAndUpdate()
Delete: deleteOne(), deleteMany(), findOneAndDelete()* Promise, Resolve, Rejected
Promise, JavaScript'te asenkron (zaman alıcı) işlemleri yönetmek için kullanılan bir yapıdır. Promises, bir işlemin sonucunun (başarılı veya başarısız) bir zaman sonra sağlanacağını garanti eder. Promises, 3 durumda olabilir: pending (beklemede), fulfilled (tamamlanmış) ve rejected (reddedilmiş). Bu, bir işlemin başarısını veya başarısızlığını temsil eder.

^ Promise'in Temel Durumları:
Pending (Beklemede): Promise henüz tamamlanmamıştır ve sonucun ne olacağı belirsizdir.
Fulfilled (Tamamlanmış): Promise başarılı bir şekilde tamamlanmıştır ve bir değer döndürür.
Rejected (Reddedilmiş): Promise başarısız olmuş ve bir hata veya neden ile reddedilmiştir^ resolve() ve reject() Metodları
resolve(): Promise işlemi başarıyla tamamlandığında çağrılır. Bu, Promise'in başarılı olarak tamamlandığını gösterir ve sonuç olarak bir değer döndürebilir.
reject(): Promise işlemi başarısız olduğunda çağrılır. Bu, Promise'in başarısız olduğunu ve bir hata mesajı veya neden döndürdüğünü gösterir.

resolve(value) metodu, Promise'in başarılı bir şekilde tamamlandığını belirtir ve verilen value (değer) parametresi, asenkron işlemin sonucudur.

reject(error) metodu, Promise'in başarısız olduğunu ve işlem sırasında bir hata meydana geldiğini belirtir. Genellikle bir hata mesajı veya hata nesnesi ile birlikte kullanılır.

.then(): Promise başarılı olduğunda çalıştırılacak fonksiyonu belirtir (resolve durumunda).
.catch(): Promise reddedildiğinde çalıştırılacak fonksiyonu belirtir (reject durumunda).
.finally(): Promise durumu ne olursa olsun (hem başarılı hem de başarısız durumda) çalışacak fonksiyonu belirtir.


* Populate = null
Mongoose'da, populate() metodu, ilişkili verileri birleştirmek ve ObjectId referanslarını gerçek verilerle değiştirmek için kullanılır. Bu metod, MongoDB'nin "referanslar" (başka bir belgeye işaret eden ID'ler) ile çalışırken çok faydalıdır. Örneğin, bir User modelinin başka bir model olan Post modeline referans verdiği durumlar gibi.

populate(null) ifadesi, genellikle populate() metodunun nasıl çalıştığıyla ilişkilidir. Bu ifade, populate fonksiyonunun hiçbir ilişkilendirilmiş veri getirmemesini sağlamak için kullanılır.

populate() metodu, MongoDB'deki referansları gerçek verilere dönüştürmek için kullanılır.
populate(null) ifadesi, herhangi bir ilişkilendirilmiş verinin getirilmemesini sağlar ve ilişkili verileri "popüle" etmez. Bu, performans için faydalı olabilir veya ilişkili veriler gereksiz olduğunda tercih edilebilir.


//* STATUS KODLA^ 200 OK
Açıklama: Bu, en yaygın kullanılan HTTP başarı kodudur. İstemci tarafından yapılan istek başarıyla işlenmiştir ve sunucu isteğe uygun bir yanıt döndürmüştür.
Kullanım Durumu:
GET, POST, PUT, DELETE gibi istekler başarıyla işlenmiş ve yanıt verilmiştir.
Sunucu, istemcinin istediği veriyi sağlıyorsa (örneğin bir web sayfası, API yanıtı, dosya vb.)

^  GET = 200 
^  POST = 200,201 
^  PUT = 200, 201 
^  DELETE = 200, 204

GET isteği genellikle 200 OK veya 304 Not Modified ile yanıtlanır.
POST isteği genellikle 200 OK, 201 Created, 202 Accepted gibi yanıtlarla sonuçlanır.
PUT isteği genellikle 200 OK, 201 Created veya 400 Bad Request ile yanıtlanır.
DELETE isteği genellikle 200 OK, 204 No Content veya 404 Not Found gibi yanıtlarla tamamlanır.


^ 400 Bad Request
Açıklama: Sunucu, istemciden gelen isteği anlamıyor veya işleyemiyor. Bu genellikle istemciden gelen istekteki yanlış biçimlendirme veya eksik bilgi nedeniyle olur.
Nedenler:
Hatalı veya eksik parametreler.
Yanlış formatta gönderilen veriler (örneğin, JSON hatası).
Gereksiz veya yanlış header bilgileri.

^ 401 Unauthorized
Açıklama: İstemci, istenen kaynağa erişim için geçerli kimlik doğrulama bilgilerini sağlamamıştır veya yanlış kimlik doğrulama bilgileri sağlamıştır.
Nedenler:
Eksik veya hatalı bir Authorization header.
Hatalı kullanıcı adı veya şifre.
Erişim token'ı (örneğin, JWT) geçersiz.

^ 402 Payment Required
Açıklama: Bu durum kodu, henüz yaygın olarak kullanılmıyor. Ancak gelecekte ödeme gerektiren hizmetlerde kullanılması planlanmıştır.
Nedenler:
Kullanıcı bir hizmet için ödeme yapmadığında.
Abonelik süresi sona erdiğinde.

^ 403 Forbidden
Açıklama: İstemci, istenen kaynağa erişme yetkisine sahip olsa da, sunucu erişimi reddetmiştir. Bu, kimlik doğrulama bilgisi olsa bile geçerlidir.
Nedenler:
Kullanıcının gerekli izinlere sahip olmaması.
Erişim kısıtlamalarının uygulanması (örneğin, IP engelleme).
Kaynağa erişimin sunucu tarafından yasaklanması.

^ 404 Not Found
Açıklama: Sunucu, istemcinin isteği üzerine belirtilen kaynağı bulamıyor. Bu, yanlış bir URL veya geçersiz bir kaynak isteği nedeniyle olabilir.
Nedenler:
Yanlış URL veya yanlış rota.
Kaynak silindi veya taşındı.

^ 405 Method Not Allowed
Açıklama: İstemci, sunucunun desteklemediği bir HTTP metodunu (GET, POST, PUT, DELETE vb.) kullanarak bir istekte bulundu.
Nedenler:
Bir kaynağa POST yerine GET isteği yapılması.
Kaynağa uygun olmayan bir HTTP yöntemi kullanılması.

^ 406 Not Acceptable
Açıklama: Sunucu, istemcinin istediği formatta bir yanıt veremiyor. İstemci, sunucudan belirli bir içerik türü (örneğin, JSON, HTML) talep etmiş olabilir, ancak sunucu bunu sağlayamaz.
Nedenler:
İstemci, sunucudan almayı beklediği içerik türünü belirtmiş ve sunucu bu türde bir içerik döndüremiyor.
Accept header bilgisi ile uyumsuz içerik talep edilmesi.

^ 407 Proxy Authentication Required
Açıklama: Sunucu, istemcinin proxy aracılığıyla doğrulama yapmasını istiyor.
Nedenler:
Proxy sunucu tarafından kimlik doğrulama istenmesi.
Eksik veya hatalı proxy kimlik bilgileri.

^ 408 Request Timeout
Açıklama: İstemci, sunucunun işlemeyi tamamlaması için belirtilen süre içinde yeterli veri göndermezse bu hata meydana gelir.
Nedenler:
İstemci, istek için yeterli zaman tanımadığı için sunucu yanıt vermez.
Ağ gecikmeleri veya zayıf bağlantılar.

^ 500 Server Error


*{ collection: "departments", timestamps: true }
Bu yapı, Mongoose modelini oluştururken bir şema (schema) üzerinde options parametrelerini tanımlar. Bu parametrelerin anlamı şu şekildedir:

1. collection: "departments"
collection, MongoDB veritabanında kullanılacak koleksiyon adını belirtir. MongoDB, her tür veriyi koleksiyonlar içinde depolar.
Bu parametre ile departments adlı bir koleksiyon kullanılacağı belirtiliyor. Eğer collection parametresi belirtilmezse, Mongoose, model adının çoğul halini kullanarak koleksiyon adını otomatik olarak belirler (örneğin, "Department" model adı için MongoDB koleksiyonu "departments" olarak adlandırılır).
Yani, bu parametre ile koleksiyon adı kesin bir şekilde "departments" olarak ayarlanmış oluyor.

2. timestamps: true
timestamps, her belgeye (document) otomatik olarak createdAt ve updatedAt adında iki tarih alanı eklenmesini sağlar.

createdAt: Belge oluşturulduğu anda otomatik olarak set edilir.

updatedAt: Belge her güncellendiğinde otomatik olarak güncellenir.

timestamps: true ayarı, veritabanındaki her belgeye bu tarih alanlarının otomatik olarak eklenmesini sağlar ve güncellenmelerde bu alanlar Mongoose tarafından güncellenir.



* PUT ve PATCH farkı:
PUT: 
  Kaynağın tamamını güncellemek
  Kaynağın tüm verisi gönderilir
  Tam güncelleme gerektiğinde kulanılır (örneğin, tüm profil bilgileri)
  
PATCH:
  Kaynağın belirli bir kısmını güncellemek
  Yalnızca değiştirilmek istenen veriler gönderilir
  Kısmi güncelleme gerektiğinde kullanılır (örneğin, sadece e-posta adresi)



* timestamps:true 

timestamps, her belgeye (document) otomatik olarak createdAt ve updatedAt adında iki tarih alanı eklenmesini sağlar.createdAt: Belge oluşturulduğu anda otomatik olarak set edilir. updatedAt: Belge her güncellendiğinde otomatik olarak güncellenir.



*runValidators: true
bir doküman (document) güncellenirken veri doğrulama (validation) işleminin yapılmasını sağlar. 

-- verinin modele uygun olup olmadığını kontrol ediyor.

runValidators: true: örneğin Güncelleme işlemi sırasında e-posta gibi alanların doğrulama kurallarına uygun olup olmadığını kontrol eder.

Doğrulama Başarısız Olursa: Eğer email alanı geçerli bir e-posta formatına uymuyorsa, runValidators: true doğrulama sırasında hatanın oluşmasına neden olur. Bu durumda bir hata mesajı döndürülür.

Varsayılan olarak runValidators değeri FALSE'tur. Bu, bir güncelleme işlemi sırasında doğrulamanın yapılmaması anlamına gelir. Eğer doğrulama yapılmasını istiyorsanız, runValidators: true olarak belirtmeniz gerekmektedir.





* JWT (JSON WEB TOKENS) Nedir?  
JWT (JSON Web Token), iki taraf arasında güvenli bir şekilde veri iletimi için kullanılan bir açık standarttır (RFC 7519). JWT, genellikle kullanıcı doğrulaması (authentication) ve bilgi paylaşımı (authorization) amacıyla kullanılır ve aşağıdaki bileşenlerden oluşur:

Header (Başlık): JWT'nin hangi algoritma ile imzalandığını belirtir. Örneğin, HMAC SHA256 ya da RSA gibi algoritmalar kullanılabilir.

Payload (Yük): Token'ın taşıdığı veriyi içerir. Bu veriler genellikle kullanıcı bilgileri (örneğin, kullanıcı kimliği, oturum süresi) gibi özelleştirilmiş bilgiler olabilir. Payload, base64-url ile kodlanır.

Signature (İmza): Token'ın doğruluğunu ve bütünlüğünü sağlamak için kullanılan bir imzadır. İmza, header ve payload verilerinin birleşimi ile bir anahtar kullanılarak şifrelenir. Bu sayede JWT'nin değiştirilmediği doğrulanabilir.

--kullanıcıya iki jeton verilir (accessToken ve refreshToken) refreshToken accessTokeni yenilemeye yarar.
--accessToken: kısa ömürlü, veritabanıyla bağlantısı yok.
--refreshToken: uzun ömürlü, veritabanıyla bağlantısı var.
--MicroService'ler arasindaki iletişimi minimuma indirmek. Data gönderme işlevi görür.

* MicroService?
MicroService bir projenin parçalanmış halidir. frontend ayrı bir server'a,backend ayrı bir server'a, database'yi ayı bir server'a, user işlemleri ayrı bir server'a vb. ayırarak projeyi parçalamaktır.

^ Token yazıyorsa SIMPLE TOKEN , Bearer yazıyorsa JWT'dir


*routes'da delete karışıklığını gidermek için destrucure ederiz fakat swagger kullanamayız çünkü swagger controllers temelinde çalışır routesda çalışmaz







*/