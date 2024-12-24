/*

*1. Express.js'deki Middleware (Ara Yazılımları) açıklayın

gelen bir HTTP isteği ile ilgili işlemleri gerçekleştiren fonksiyonlardır.
genellikle tüm route rotalarında yapılacak işlemleri tek yerden yönetmek için kullanılmaktadır.



*2. Express.js'de routiing nedir ve nasıl uygulanır?

gelen HTTP isteklerini (GET, POST, PUT, DELETE vb.) doğru işlevlere yönlendirme işlemidir.
Yani, bir kullanıcı bir URL'ye (örneğin, /home) belirli bir HTTP yöntemiyle (GET, POST vb.) istek gönderdiğinde, Express.js, bu isteği uygun bir route (yol) ile ilişkilendirir ve o rotadaki işlemi gerçekleştirir.

Express.js'deki routing, sunucu tarafında istemciden gelen istekleri karşılamak için kullanılan çok güçlü bir özelliktir. Her rota, belirli bir path (yol) ve HTTP metoduna (GET, POST, PUT, DELETE vb.) dayanır. Bu rota ile eşleşen istek geldiğinde, Express, ilgili işlevi çalıştırır.

^Routing Nasıl Çalışır?
Express.js, gelen istekleri belirtilen HTTP metoduna ve URL yoluna göre işleme alır. Örneğin, bir kullanıcı /about adresine GET isteği gönderdiğinde, app.get('/about') ile tanımlanan işlev çalıştırılır.



*3. Express.js'de error handling (hata işleme) nasıl çalışır?

Express.js'de error handling (hata işleme), uygulamanın doğru bir şekilde çalışmasını sağlamak ve kullanıcıya anlamlı hata mesajları sunmak için kritik bir adımdır. Express, hataları yönetmek için yerleşik bir mekanizma sunar. Bu mekanizma, uygulama genelinde meydana gelen hataları yakalamak, doğru bir şekilde işlemek ve kullanıcıya uygun yanıtlar göndermek için kullanılır.

Express.js'de Error Handling (Hata Yönetimi)
Express.js'de hata yönetimi, özellikle 3 ana bileşene dayanır:

Hata middleware'leri
Error-handling middleware kullanımı
Hatalı HTTP yanıtları döndürme



*4.Express.js app.use() yönteminin amacı nedir?

app.use() yöntemi, Express.js'de middleware (ara yazılım) işlevlerini tanımlamak ve uygulamak için kullanılan önemli bir fonksiyondur. Bu yöntem, gelen HTTP isteklerini işlemek, yönlendirmek, verileri doğrulamak, hata yönetimini gerçekleştirmek ve benzeri işlemler için kullanılır.

1. Uygulama Genelinde Middleware Kullanımı
app.use() ile eklenen middleware, uygulamanın her rotası için geçerli olacaktır. Örneğin, istekleri JSON formatına çevirmek, her istek için bir log yazmak ya da oturum kontrolü yapmak gibi işlemleri uygulamanın tamamında geçerli kılmak için kullanılabilir.

2. Belirli Bir Rota İçin Middleware Kullanımı
app.use() ile bir yol (path) belirleyerek, sadece belirli bir rota veya URL için middleware ekleyebilirsiniz. Örneğin, /admin rotasında kimlik doğrulama yapmak:

3. Hata Middleware'leri İçin Kullanım
Express.js'deki hata middleware'leri, app.use() ile tanımlanır ve hataları yakalar. Hata middleware'leri, genellikle dört parametre alır: err, req, res, next. Eğer bir hata oluşursa, bu middleware çağrılır.



*5.Express.js response nesnesinin rolünü açıklayın.

Express.js Response Nesnesi (res), HTTP yanıtını yönetmek ve istemciye geri göndermek için kullanılan bir nesnedir. Bir Express.js uygulamasında, istemciden gelen bir istek (req), sunucu tarafından işlenir ve bir yanıt (res) oluşturularak istemciye gönderilir. res nesnesi, istemciye dönülecek veriyi, HTTP durum kodlarını, başlıkları (headers), çerezleri ve diğer yanıt bilgilerini belirlemeye yardımcı olur.

res.send() - Yanıt Göndermek

res.json() - JSON Yanıtı Göndermek
res.json() metodu, veriyi JSON formatında döndürmek için kullanılır.

res.status() - Durum Kodu Belirlemek
Yanıtın HTTP durum kodunu ayarlamak için kullanılır.

res.set() / res.header() - Yanıt Başlıkları Ayarlamak
res.set() veya res.header() metodları, HTTP yanıt başlıklarını ayarlamak için kullanılır.

res.redirect() - Yönlendirme Yapmak
Bir istek sonucunda istemciyi başka bir URL'ye yönlendirmek için kullanılır.

res.sendFile() - Dosya Göndermek
Bir dosyayı istemciye göndermek için kullanılır.

res.end() - Yanıtı Sonlandırmak
res.end() metodu, yanıtın sonlandırılması için kullanılır.



*6.Sequelize nedir ve temel amacı nedir?

Sequelize, Node.js için geliştirilmiş bir ORM (Object-Relational Mapping) kütüphanesidir. ORM, ilişkisel veritabanlarını (örneğin, MySQL, PostgreSQL, SQLite, MSSQL) kullanırken veritabanı ile etkileşimi daha verimli ve kolay hale getiren bir yapıdır.

Sequelize'in temel amacı, geliştiricilerin SQL yazmak yerine JavaScript ile veritabanı işlemleri yapmalarını sağlamaktır. Bu, veritabanı üzerinde CRUD (Create, Read, Update, Delete) işlemleri yaparken daha hızlı geliştirme yapmayı, hata yapma olasılığını azaltmayı ve kodun okunabilirliğini artırmayı sağlar.



*7.Pagination (Sayfalama) nedir ve bunu Sequelize veya Mongoose ile bir veritabanı sorgusuna nasıl uygulayabilirsiniz?

Pagination (Sayfalama), genellikle uzun listelerin parçalara bölünmesiyle sağlanır, böylece kullanıcılar sadece belirli bir sayfayı görüntüler. 

Sayfalama, veriyi belirli bir sayfada gösterilecek kadar sınırlar. Bunun için genellikle şu hesaplama yapılır:

Offset: Gösterilecek verinin başlangıç noktası. offset = (page - 1) * limit
Limit: Her sayfada gösterilecek öğe sayısı.
Örneğin:

Page 1, Limit 10: İlk 10 veriyi getir.
Page 2, Limit 10: 11. ile 20. arasındaki verileri getir.
Page 3, Limit 10: 21. ile 30. arasındaki verileri getir.

limit: Her sayfada gösterilecek kayıt sayısını belirler.
offset: Hangi veriden başlanacağını belirler. Genellikle (page - 1) * limit olarak hesaplanır.

*8. Arama sorguları oluşturmak için Sequelize'deki 'where' cümlesini nasıl kullanırsınız?

Sequelize'deki where cümlesi, veritabanında belirli koşullara göre filtreleme yapmayı sağlayan bir özelliktir. where cümlesi, SQL'deki WHERE koşuluna karşılık gelir ve veritabanından sadece belirli kriterlere uyan kayıtların çekilmesine olanak tanır.

where Kullanımının Temel Yapısı
where cümlesi, findAll, findOne, count gibi metodlarla kullanılarak, sorguya koşul ekler. Genellikle where objesi, koşul belirten bir nesne olarak yapılandırılır.

*9.JSON Web Token'larını (JWT) ve web uygulamalarındaki rollerini açıkla.

JSON Web Token (JWT), web uygulamalarında kimlik doğrulama ve yetkilendirme amacıyla yaygın olarak kullanılır. JWT, kullanıcıların bir web uygulamasına güvenli bir şekilde giriş yapmalarını sağlayan, kimlik doğrulama süreçlerini kolaylaştıran ve bilgi iletimi için kullanılan kompakt ve güvenli bir yapıdır.

1. JSON Web Token Nedir?
JSON Web Token (JWT), üç ana bileşenden oluşur:

Header (Başlık): Token'ın türünü (JWT) ve kullanılan imzalama algoritmasını (örneğin HMAC SHA256 veya RSA) belirtir.
Payload (Yük): JWT'nin taşıdığı bilgi kısmıdır. Genellikle, kullanıcı hakkında kimlik bilgileri veya diğer meta veriler burada saklanır. Bu kısmın içinde "claims" (iddialar) bulunur. Claims, JWT'nin taşımak istediği bilgileri tanımlar.
Signature (İmza): Bu, başlık ve yük kısmının birleşiminden sonra belirli bir gizli anahtar veya özel anahtar ile imzalanmış bir değerdir. İmza, token'ın doğruluğunu ve bütünlüğünü doğrulamak için kullanılır.


*10. Kimlik doğrulama için JWT kullanırken bazı genel güvenlik hususları nelerdir?

^1. JWT İmzasını Doğrulama
JWT, imzalı bir yapıdır, yani JWT'nin başlık ve yük kısmı, gizli bir anahtar veya özel bir anahtar kullanılarak imzalanır. Bu imzanın doğrulanması çok önemlidir, çünkü doğru doğrulama yapılmazsa, token'lar değiştirilerek kötü niyetli kişiler tarafından sahte JWT'ler gönderilebilir.

Güvenlik Hususu: Sunucu, JWT'nin imzasını her zaman doğrulamalıdır. Eğer imza doğrulanmazsa, token'da oynama yapılabilir.
Çözüm: JWT'yi alırken ve kullanmadan önce her zaman imzanın geçerli olduğunu kontrol edin. Eğer imzalama algoritması RS256 (gizli anahtar yerine genel/özel anahtar çifti kullanarak şifreleme) gibi daha güvenli bir seçenekse, imzalama ve doğrulama işlemi güvenli olacaktır.


^2. Token Saklama
JWT'nin istemcide doğru şekilde saklanması gerekmektedir. Eğer token kötü niyetli kişiler tarafından erişilebilecek bir yerde saklanırsa (örneğin, tarayıcıda localStorage veya sessionStorage), bir saldırgan token'ı çalabilir ve yetkisiz erişim sağlayabilir.

Güvenlik Hususu: Token'ı istemcide saklarken dikkatli olunmalıdır. Özellikle XSS (Cross-Site Scripting) saldırılarına karşı savunmasız olabilirsiniz.
Çözüm:
HTTP-only cookie kullanarak token'ı saklamak, kötü niyetli script'lerin token'ı çalmasını engeller. HTTP-only cookie, yalnızca sunucuya gönderilir ve JavaScript tarafından erişilemez.
Eğer token'ı localStorage veya sessionStorage gibi tarayıcı depolama alanlarında saklıyorsanız, Content Security Policy (CSP) gibi güvenlik önlemleri eklemeyi unutmayın.

^3. Token'ın Süresi (Expiration Time)
JWT'nin bir geçerlilik süresi olmalıdır. Sonsuz süreli JWT'ler ciddi güvenlik riskleri oluşturur, çünkü bir kez çalındığında token sonsuza kadar kullanılabilir.

Güvenlik Hususu: JWT'nin geçerlilik süresi kısa olmalıdır. Uzun süreli token'lar güvenlik açığı yaratabilir.
Çözüm:
JWT'lere expiration (exp) claim ekleyin. Bu, token’ın geçerlilik süresinin dolmasını sağlar.
Refresh token kullanarak, kullanıcıların token'ları süresi dolduğunda yeniden kimlik doğrulama yapmalarını sağlayabilirsiniz.

^4. Refresh Token Kullanımı
JWT'ler genellikle kısa süreli geçerliliğe sahiptir. Bu nedenle, refresh token kullanmak, kullanıcıların sürekli olarak yeniden giriş yapmasını engellemek için iyi bir yaklaşımdır. Refresh token, kullanıcıyı yeniden doğrulamak ve yeni bir JWT almak için kullanılır.

Güvenlik Hususu: Refresh token, JWT'den daha uzun süre geçerli olabilir, bu nedenle onu güvenli bir şekilde saklamak çok önemlidir.
Çözüm:
Refresh token'ı güvenli bir şekilde saklayın, örneğin HTTP-only cookie kullanarak.
Refresh token’lar da sınırlı süreli olmalı ve kullanım limitlerine sahip olmalıdır.
Refresh token her kullanıldığında geçerliliğini yenileyin ve önceki token'ı geçersiz kılın.

^5. Algoritma Seçimi
JWT'nin imzalama algoritması önemlidir. JWT'nin oluşturulmasında kullanılan algoritma, güvenlik açısından kritik bir rol oynar. Örneğin, bazı eski JWT uygulamaları none algoritmasını destekler, bu da token’ın imzasız gönderilmesine olanak tanır. Bu, ciddi güvenlik açıklarına yol açabilir.

Güvenlik Hususu: HS256 gibi simetrik algoritmalar yerine, daha güvenli olan RS256 gibi asimetrik algoritmalar tercih edilmelidir.
Çözüm:
RS256 (veya benzeri asimetrik algoritmalar) kullanın, çünkü bu algoritmalar daha güvenlidir. Asimetrik anahtarlar (public ve private key) kullanarak imzalama işlemi yapılır, bu da daha güçlü bir güvenlik sağlar.
none algoritmasından kesinlikle kaçının.

^6. Token Doğrulaması
JWT'nin doğruluğunu kontrol etmek, token'ın geçerliliğini sağlamak ve kötü niyetli kullanımın önüne geçmek için çok önemlidir. Her JWT kullanımı sonrasında token'ı doğrulamak gerekir.

Güvenlik Hususu: JWT doğrulama işlemi yapılmadığında, kötü amaçlı bir kullanıcı token’ı manipüle edebilir.
Çözüm: Her gelen JWT'nin:
Geçerliliğini kontrol edin (örneğin, exp claim ile bitiş tarihi kontrolü).
İmzasının doğruluğunu kontrol edin (başlık ve yük kısmının değiştirilmediğinden emin olun).
İzin verilen bir kullanıcıyla eşleşip eşleşmediğini doğrulayın (özellikle rol ve izinlerin kontrolü).

^7. Cross-Site Request Forgery (CSRF) Saldırılarına Karşı Koruma
JWT'ler, genellikle HTTP-only cookies içinde saklanır ve sunucuya her istekle gönderilir. Bu durum, CSRF saldırıları için potansiyel bir risk oluşturur. Kötü niyetli bir site, kullanıcının kimlik doğrulama verilerini taklit ederek istek gönderilebilir.

Güvenlik Hususu: CSRF saldırılarına karşı korunmak gerekir.
Çözüm:
JWT'yi HTTP-only cookies kullanarak güvenli bir şekilde saklayın.
SameSite cookie özelliğini aktif hale getirin, böylece yalnızca aynı site içinden gelen istekler token ile birlikte gönderilebilir.
Token'ı URL üzerinden değil, başlıklar veya HTTP-only cookie içinde gönderin.

^8. Token'ların Yeniden Kullanımı ve İptali
Bir token'ın çalınması veya kötüye kullanılması durumunda, token'ın geçersiz hale getirilmesi gerekmektedir.

Güvenlik Hususu: Token'ın çalınması durumunda token'ı iptal etme gerekliliği.
Çözüm:
Kullanıcı çıkış yaptığında veya şüpheli bir etkinlik tespit edildiğinde JWT'yi iptal edin.
Token blacklisting (token kara listeleme) gibi teknikler kullanarak, token’ın kötüye kullanımını önleyebilirsiniz.
Ayrıca, token'ın jti (JWT ID) claim'ini kullanarak her bir token'a özel bir kimlik verilebilir ve bu kimlik iptal edilebilir.

^9. İletişim Güvenliği
JWT'nin iletilmesi sırasında, token'ların güvenli bir kanal üzerinden aktarılması önemlidir.

Güvenlik Hususu: Token'lar HTTP üzerinden iletildiğinde, şifrelenmemiş bir kanal üzerinden kötüye kullanılabilir.
Çözüm: HTTPS kullanarak tüm veri iletiminin şifrelenmesini sağlayın. Bu, verilerin üçüncü şahıslar tarafından ele geçirilmesini engeller.

^10. Token'ların Azaltılması
JWT'lerde çok fazla bilgi taşımak, güvenlik açısından risk oluşturabilir. Token'ın boyutunun küçük tutulması, şifreli ve güvenli veri taşıma gereksinimlerine uyum sağlar.

Güvenlik Hususu: Token'a gereksiz bilgi eklemek.
Çözüm: Token’a yalnızca gerekli verileri ekleyin. Kullanıcı kimliği ve yetkiler gibi temel bilgiler yeterlidir.



*/