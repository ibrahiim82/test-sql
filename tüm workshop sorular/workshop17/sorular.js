/*
*1. Express.js'da middleware yazılımının amacı nedir? 
a) HTTP isteklerini işlemek için rotaları tanımlamak 
b) HTML şablonlarını işlemek için 
c) Asenkron işlemleri işlemek için 
d) İstekleri rota işleyicilerine ulaşmadan önce işlemek

Cevap D

Açıklama:
Middleware, Express.js uygulamalarında isteklerin (requests) ve yanıtların (responses) işlenmesini sağlayan işlevlerdir. Middleware fonksiyonları, her HTTP isteği için çağrılır ve istek, yanıt nesnelerine erişim sağlar. Middleware, bir istek geldiğinde belirli işlemleri yapabilir (örneğin, kimlik doğrulama, veri doğrulama, hata işleme vb.), bu işlemleri tamamladıktan sonra genellikle bir sonraki middleware'e veya rotaya yönlendirme yapar.

Middleware'ın temel işlevleri:

İstek verilerini doğrulama
Kimlik doğrulama ve yetkilendirme işlemleri
Hata işleme
CORS (Cross-Origin Resource Sharing) başlıkları ekleme
İstekleri loglama
İsteklerin zaman damgası veya diğer meta verileri ile işlenmesi


*2. Express.js'da HTTP isteklerini günlüğe kaydetmek için yaygın olarak hangi middleware kullanılır?
a) morgan 
b) body-parser
c) express-session
d) cookie-parser

Cevap A

Açıklama:
Morgan bir HTTP istek günlüğü (logging) middleware'idir ve Express.js uygulamalarında HTTP isteklerini kaydetmek için kullanılır. Morgan, her gelen HTTP isteği için belirli bir formatta bilgi sağlar (örneğin, istek türü, durumu, işlem süresi, IP adresi vb.), bu da geliştirme ve üretim ortamlarında hata ayıklama ve izleme süreçlerini kolaylaştırır.


*3. Express.js, kullanıcı izinlerine dayalı olarak belirli rotalara erişimi nasıl kısıtlayabilirsiniz?
a) Yerleşik JavaScript işlevlerini kullanarak 
b) Ara yazılım işlevlerini uygulayarak
c) Rota URL'lerini şifreleyerek
d) Rota parametrelerini ayarlayarak

Cevap B

Açıklama:
Express.js, middleware (ara yazılım) kullanarak istekleri kontrol edebilir ve sadece belirli izinlere sahip kullanıcıların belirli rotalara erişmesine izin verebilir. Bu tür bir erişim kontrolü genellikle kimlik doğrulama (authentication) ve yetkilendirme (authorization) işlemleriyle yapılır.

Middleware fonksiyonları, gelen istekleri kontrol eder ve istek, belirli izinlere sahip değilse, ilgili rotaya erişim engellenebilir.


*4.Hangi HTTP durum kodu genellikle istemcinin istenen kaynağa erişim iznine sahip olmadığını gösterir? 
a) 200 OK
b) 401 Unauthorized (Yetkisiz)
c) 404 Not Found    (Bulunamadı)
d) 500 Internal Server Error (Dahili Sunucu Hatası)

Cevap B


*5. API'leri belgelemek için yaygın olarak hangi Express.js yöntemi kullanılır? 
a) app.use() 
b) app.set() 
c) app.get() 
d) app.route()

Cevap C        //! CEVAP D'miş

Açıklama:
app.get() yöntemi, HTTP GET isteklerini belirli bir rota ile ilişkilendirmek için kullanılır. API'lerin belgelenmesi, genellikle API uç noktalarının açıklamalarının ve kullanım bilgilerinin sağlanmasını içerir. Bu tür belgeler çoğu zaman GET isteğiyle sağlanır. API belgeleri genellikle bir web sayfasında veya bir JSON formatında olabilir.

API dokümantasyonları için Swagger/OpenAPI gibi araçlar, API uç noktalarını otomatik olarak belgelemeye ve bu uç noktalarla etkileşimi görselleştirmeye olanak tanır. Bu araçlar genellikle belirli bir rotaya (örneğin, GET /docs) yönlendirilerek API'nin tüm uç noktalarının açıklamalarını gösterir.

app.use(): Genellikle ara yazılım (middleware) işlevlerini tanımlamak için kullanılır.
app.set(): Uygulama ayarlarını (örneğin, şablon motorunu, portu) yapılandırmak için kullanılır.
app.route(): Birden fazla HTTP yöntemini (GET, POST, PUT, DELETE vb.) tek bir rotada gruplamak için kullanılır.
Sonuç olarak, API'leri belgelemek ve açıklamalar sağlamak için app.get() yaygın olarak kullanılır.


*6. Express.js'da API belgeleri oluşturmak için yaygın olarak hangi araç kullanılır? 
a) Swagger 
b) Jest 
c) Postacı
d) Axios

Cevap A

Açıklama:
Swagger, API'leri tanımlamak, belgelendirmek ve test etmek için popüler bir açık kaynak aracıdır. Express.js uygulamalarında, API uç noktalarının ve bunların parametrelerinin otomatik olarak belgelendirilmesini sağlamak için Swagger kullanılabilir. Swagger, API'lerin kullanıcılar tarafından anlaşılabilir şekilde sunulmasına olanak tanır.

Swagger genellikle OpenAPI spesifikasyonu ile birlikte çalışır. API uç noktalarınızın ne tür veriler alıp verdiğini açıklamak için Swagger UI aracını kullanarak, kullanıcı dostu bir arayüzle API'nizi belgeleyebilirsiniz.


*7. Express.js'daki bir sunucudan veri almak için genellikle hangi HTTP yöntemi kullanılır? 
a) GET 
b) POST 
c) PUT 
d) DELETE

Cevap A

Açıklama:
GET: Bu HTTP yöntemi, sunucudan veri almak için kullanılır. Bir istemci, sunucudan belirli bir kaynağa (örneğin, kullanıcı bilgileri, liste verisi vb.) erişmek istediğinde GET isteği gönderir. GET isteği veriyi almak için kullanılır ve genellikle veritabanlarından veri çekme gibi işlemlerle ilişkilidir.

POST: Bu HTTP yöntemi, sunucuya veri göndermek için kullanılır. Genellikle yeni bir kaynağın oluşturulması için kullanılır (örneğin, yeni bir kullanıcı kaydı oluşturulması gibi).

PUT: Bu HTTP yöntemi, var olan bir kaynağın tamamını güncellemek için kullanılır.

DELETE: Bu HTTP yöntemi, bir kaynağı silmek için kullanılır.


*8.In Express.js, özel mesajları konsola nasıl kaydedebilirsiniz? 
a) console.log() işlevini kullanma 
b) Morgan middleware (ara yazılımını) kullanma 
c) Express-logger paketini kullanma 
d) Hata ayıklama modülünü kullanma

Cevap A

Açıklama:
console.log(), JavaScript'teki standart bir fonksiyondur ve verileri konsola yazdırmak için kullanılır. Express.js uygulamanızda, işlem sırasında veya hata ayıklama amacıyla özel mesajları konsola kaydetmek için bu işlevi kullanabilirsiniz.

b) Morgan ara yazılımını kullanma: Morgan, HTTP isteklerini günlüğe kaydetmek için kullanılan bir middleware'dir. Ancak bu, özel mesajları kaydetmek için değil, gelen isteklerin günlüklerini tutmak içindir.

c) Express-logger paketini kullanma: Bu paket de günlüğe kaydetme için kullanılabilir, ancak console.log() gibi standart bir çözüm genellikle yeterlidir.

d) Hata ayıklama modülünü kullanma: Hata ayıklama modülü (debugging module), özellikle hata ayıklamak ve geliştirme sırasında hata mesajlarını görmek için kullanılır, ancak genel konsol mesajları için console.log() tercih edilir.


*9.Enivornment Variables (.env) (Ortam değişkenlerini) Express.js uygulamalarda kullanmanın amacı nedir? 
a) API anahtarları gibi hassas bilgileri saklamak için 
b) Yönlendirme yollarını tanımlamak için 
c) Ara yazılım işlevlerini bildirmek için 
d) HTTP başlıklarını belirtmek için

Cevap: A

Açıklama:
Ortam değişkenleri, genellikle uygulamanın çalıştığı ortamla ilgili bilgi saklamak için kullanılır. Bu değişkenler, uygulamanın yapılandırmasında çevresel farkları yönetmeye yardımcı olur. API anahtarları, veritabanı bağlantı dizeleri, port numaraları gibi hassas bilgiler, ortam değişkenleri aracılığıyla güvenli bir şekilde saklanabilir.

Örneğin, geliştirme, test ve üretim ortamlarında farklı ayarların (API anahtarları, veritabanı bilgileri) gerektiği durumlarda ortam değişkenleri kullanılır. Ortam değişkenleri, doğrudan uygulama kodunda yer almaz, bu da güvenliği artırır.

Bir ortam değişkenini kullanmak için genellikle .env dosyası veya işletim sistemi ortamları kullanılır.


*10. Express.js'da JSON isteklerini ayrıştırmak için yaygın olarak hangi ara yazılım kullanılır? 
a) morgan
b) body-parser
c) express-session
d) cookie-parser

Cevap B

Açıklama:
body-parser middleware'i, gelen HTTP isteklerinin gövdesini (body) ayrıştırarak uygulamanın erişebileceği bir formata dönüştürür. Özellikle JSON formatındaki verileri işlemek için kullanılır.

Express.js uygulamalarında, body-parser middleware'i verileri JSON formatında alıp, JavaScript nesnelerine dönüştürür, böylece bu verilere kolayca erişilebilir.


a) Morgan: Morgan, HTTP isteklerini kaydetmek için kullanılan bir logging (günlük kaydetme) middleware'idir, JSON isteklerini ayrıştırmaz.
c) express-session: Bu middleware, kullanıcı oturumlarını yönetmek için kullanılır, JSON isteklerini ayrıştırmaz.
d) cookie-parser: Bu middleware, gelen isteklerdeki çerezleri (cookies) ayrıştırır, ancak JSON verilerini ayrıştırmaz.






*/