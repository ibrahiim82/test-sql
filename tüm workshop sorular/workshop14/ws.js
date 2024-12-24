/*
^1.Express nedir?
Express.js, Node.js için tasarlanmış minimal ve esnek bir web uygulaması çatısıdır. Geliştiricilere, web uygulamaları ve API’ler oluştururken hız ve kolaylık sağlar. 
Rotalama, middleware desteği ve şablon motorları ile entegrasyon gibi özellikleri sayesinde, dinamik web uygulamalarının geliştirilmesini basitleştirir.



^2. Express'in popülaritesi nereden geliyor?
Express'in popülaritesi, esnekliği, minimalizmi, hız ve yüksek performans özelliklerinden kaynaklanmaktadır. Ayrıca Node.js ile mükemmel bir uyum içinde çalışması ve geliştiricilerin farklı işlevsellikleri kolayca entegre edebilmesi de Express'i çok tercih edilen bir web framework yapmaktadır.



^3. Hiç baktınız mı, hangi ünlü şirketler Express kullanıyor, diğer çerçeveler arasında Express'in yeri nedir? Google'da arama yapalım.
Uber: Uber, API hizmetleri için Express.js kullanmaktadır. Gerçek zamanlı veri işlemesi ve yüksek hız gereksinimlerini karşılamak için Express'in sağladığı performanstan yararlanır.

PayPal: PayPal, mikro hizmetler mimarisini Node.js ve Express.js kullanarak kurmuştur. Bu, yüksek trafiği verimli şekilde yönetmelerine olanak tanır.

Netflix: Netflix, bazı arka uç hizmetlerini Express.js kullanarak geliştirir. Express, hızlı veri işleme ve büyük ölçekli uygulamalar için uygundur.

IBM: IBM, bulut tabanlı uygulamalarında Express.js'i kullanarak esnek ve ölçeklenebilir çözümler üretmektedir.



^4. Express ile Nodejs arasındaki farklar nelerdir?
Node.js'nin bir JavaScript çalışma zamanı ortamı olması, Express'in ise Node.js üzerine kurulu bir JavaScript çerçevesi olmasıdır.

Yani, Express.js aslında Node.js'in gücünü daha verimli kullanmak için tasarlanmış bir araçtır.



^5. Middleware (Ara Yazılım) nedir ve functions (işlevleri) nelerdir?
Middleware, Express.js gibi web framework'lerinde, gelen HTTP isteklerini işlemek için kullanılan fonksiyonlardır. Middleware, isteğin sunucuya ulaşmasından önce veya yanıtın istemciye gönderilmesinden önce belirli işlemleri gerçekleştirir.

Middleware fonksiyonları, uygulamanın istek-yanıt döngüsündeki istek objesi (req), yanıt objesi (res), ve bir sonraki ara yazılım fonksiyonuna erişebilen fonksiyonlardır. Bir sonraki ara yazılım fonksiyonu çoğunlukla next isimli bir değişken ile tanımlanır.



^7. Express.js'de res.send() ve res.json() arasındaki fark nedir?
res.send(): Daha genel amaçlıdır ve farklı veri türlerini gönderebilir. string,JSON,array vs. gönderilebilir

res.json(): Yalnızca JSON verisi göndermek için kullanılır ve gönderilen veriyi JSON formatında istemciye gönderir.
Bu, API geliştirenler için daha güvenli ve doğru bir yöntemdir.
sadece JSON nesnelerini veya dizilerini gönderir.



^8. Express.js'de app.use() ve app.get() arasındaki fark nedir?
app.use(): app.use(), middleware (ara yazılım) fonksiyonlarını tanımlamak için kullanılır. 
her türlü HTTP isteği (GET, POST, PUT, DELETE, vs.) için çalışacak şekilde middleware ekler. Yani belirli bir HTTP metoduyla (örneğin sadece GET istekleri) sınırlı değildir, tüm istek türlerinde çalışabilir.

app.get(): yalnızca GET HTTP istekleri için yönlendirme (routing) yapmak amacıyla kullanılır. 



^9. Gelen istek yöntemini ve URL'yi konsola kaydetmek için bir ara yazılım yazın.
const express = require('express');
const app = express();

/ Middleware: Gelen isteğin metodunu ve URL'sini logla
app.use((req, res, next) => {
    console.log(`${req.method} isteği yapıldı. URL: ${req.url}`);
    next(); // Bir sonraki middleware'e geçiş yap
});

/ Diğer yollar ve middleware'ler
app.get('/', (req, res) => {
    res.send('Ana Sayfa');
});

app.get('/about', (req, res) => {
    res.send('Hakkında Sayfası');
});

/ Sunucu başlatma
app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...');
});

app.use(): Bu fonksiyon, her gelen istekte çalışacak bir middleware fonksiyonu tanımlar. req.method ile isteğin HTTP metodunu (GET, POST, PUT, vb.) ve req.url ile istek yapılan URL'yi alıyoruz.

next(): Bu fonksiyon, middleware zincirinde bir sonraki middleware'e geçiş yapmayı sağlar. Eğer next() çağrılmazsa, istek burada durur ve yanıt gönderilmez.

Konsola yazdırma: Her istek geldiğinde, istek metodunu ve URL'yi konsola yazdırıyoruz.



^10. Express.js'de sorgu parametresi olarak iletilen iki sayının toplamını hesaplayan bir fonksiyon yazın.
const express = require('express');
const app = express();

/ Sum fonksiyonu: Query parametrelerinden iki sayı alır ve toplar
app.get('/sum', (req, res) => {
    / Query parametrelerinden sayıları al
    const num1 = parseFloat(req.query.num1); // num1 parametresi
    const num2 = parseFloat(req.query.num2); // num2 parametresi

    / Sayılar geçerli değilse hata mesajı gönder
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Geçersiz sayılar. Lütfen num1 ve num2 parametrelerini doğru girin.');
    }
    / Toplamı hesapla
    const sum = num1 + num2;

    / Sonucu gönder
    res.send(`Toplam: ${sum}`);
});

/ Sunucu başlatma
app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...');
});

req.query: Bu, Express.js'de URL'deki query parametrelerini almanızı sağlar. Örneğin, URL şu şekilde olabilir: /sum?num1=5&num2=10. Burada num1 ve num2 query parametreleri olacaktır.

parseFloat(): req.query.num1 ve req.query.num2 parametreleri genellikle string olarak gelir. Bu nedenle, sayıları doğru şekilde toplamak için bunları sayılara dönüştürmemiz gerekir. parseFloat() fonksiyonu, string'i sayıya dönüştürür.

Hata Kontrolü: Eğer gelen parametreler geçerli sayılar değilse, isNaN() fonksiyonu ile hata kontrolü yapılır ve kullanıcıya geçerli sayılar girilmesi gerektiği bildirilir.

Yanıt: Hesaplanan toplam, kullanıcıya yanıt olarak gönderilir.

*/