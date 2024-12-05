


//// MULAKAT SORUSU
//// (MVC) model view controller nedir,ne işe yarar,model ne işe yarar,view ne işe yarar,controller ne işe yarar?


//* require
// require, Node.js'de modül (kütüphane veya dosya) yüklemek için kullanılan bir fonksiyondur. Node.js, JavaScript kodlarını modüller halinde organize etmenize olanak sağlar ve require, bu modülleri projenize dahil etmek için kullanılır.

//* createServer
// createServer, Node.js'in http veya https modülünde bulunan bir metodtur ve HTTP (veya HTTPS) sunucusu oluşturur.
// Bu metodu kullanarak gelen HTTP isteklerini dinleyebilecek bir sunucu başlatırsınız

//* ORM:
// SQL converter görevi görür. yazdığımız kodu sql koduna döndürür.
// SQL, MySQL, SQLServer, POSTGRESQL gibi farklı markalara ait sql kodlarında az da olsa farklılıklar vardır bu farklılıklarda sorun yaşanmamaması için ORM kullanılır.

//* Sequelize:
// Nodejs'de kullanılan ORM yapıları. en populeri Squelizedir.

//* Model:
// Front-end'de forum doldururken girdiğimiz verileri depolayan kısım.
// view: müşteri
// model: aşçı
// controller: garson

//// JS'de false değerler nelerdir?

//// Callback nedir,ne işe yarar?

//* CRUD == POST , Get , Put , Delete
// CREATE = POST , READ = GET , UPDATE = PUT , DELETE = DELETE

// Get(200)
// post(200),(201)
// put(200),(204)
// delete(200),(204)

//* Javascriptte join, split, reverse kullanırken split kullanmak gerekir!! yani join veya reverse kullanmamız gerekse bile split ile kullanmamız gerekir çünkü stringlerde split kullanılır. reverse ve join array metodudur string metodu için split kullanılır. ÖRNEĞİN 'ibrahim' ismini ters çevirmemiz gerekirse reverse array metodu olduğu için sadece reverse kullanılmaz string metodu gerekir yani split ve reverse kullanılır.


//? MULAKAT SORUSU
//* (MVC) model view controller nedir,ne işe yarar,model ne işe yarar,view ne işe yarar,controller ne işe yarar?
// Model:
// Front-end'de forum doldururken girdiğimiz verileri depolayan kısım.
// view: müşteri
// model: aşçı
// controller: garson

//* reactta performansı optimize etme yöntemi: Debounce

//* error boundary: 
// Bir hatanız var ve render probleminiz yok. Kullanıcı hataya rağmen Reactın varsayılan davranışı BEMBEYEAZ EKRAN (js hataları, sonsuz döngüler,render hataları, yüklenemeyen kaynak dosyalar, router sorunları vsvs ) ile karşı karşıya kalmıyor, ve uygulama daha fazla bozulmuyor. Kullanıcıya tabiki daha iyi bir deneyim sağlanıyor.

/*
isim();

function isim(){
  console.log('deneme');
 }

 isim(); // invoke
*/
// hoisting: sadece function declarationda (yani hem yukarıda hem de aşağıda) çalışır

//* Front-endde data saklama:
//^ LocalStorage: kalıcı datadır, biz silmediğimiz sürece silinmez.
//^ SessionStorage: geçici datadır, tarayıcıyı kapattığımız an silinir.
//session data nerede saklanır?
//^ Cookies: süreli data saklama (3gün,1hafta,1ay...)
//session demek sessionStorage demek değildir, sessionlar cookies'dir.

//^ matchedCount:0,1,2   modifiedCount=0,1  durumu
//matchedCount:0,1,2   modifiedCount=0,1  durumu
// matchedCount: Eşleşen belge sayısını belirtir.
// modifiedCount: Gerçekten değiştirilen belge sayısını belirtir.

// matchedCount, güncelleme işleminin hangi sayıdbelgenin eşleştiğini gösterir.
// Eğer bir belge belirli bir filtreye uyaragüncellenmeye çalışılıyorsa, matchedCount filtreyle eşleşen belge sayısını belirtir.
// modifiedCount, gerçekten güncellenen belge sayısını gösterir.
// Yani, eşleşen belgeler üzerinde bir değişikliyapılıp yapılmadığını belirler. Eğer eşleşen belgenin mevcut durumu zaten güncellenmeye gerek olmayacaksa, modifiedCount sıfır olur.

// matchedCount: 0, modifiedCount: 0: Hiçbir belge eşleşmedi veya eşleşen belgeler güncellenmeye gerek duymadı.
// matchedCount: 1, modifiedCount: 1: Bir belge eşleşti ve gerçekten bir değişiklik yapıldı.
// matchedCount: 2, modifiedCount: 1: İki belge eşleşti, ancak sadece birinin verisi güncellendi.


//~ Kodda _id Kullanımı: Çoğu zaman, bir veritabanı nesnesiyle ilişkili kimlik alanlarını belirtirken id yerine _id kullanılır. Bu, MongoDB'nin veya başka bir veritabanı sisteminin standartlarına uygun olmanın yanı sıra, genellikle veritabanı seviyesinde daha özel bir kimlik alanını belirtir.

//~ _id: Veritabanında veya nesnede otomatik olarak oluşturulan veya benzersiz kimliği tanımlar.
//~ id: Genellikle geliştiriciler tarafından manuel olarak atanabilir ve başka amaçlarla kullanılabilir.

// env dosyasında yazılan tüm değerler stringdir. (abc,10,true,20,false hepsi string ifadedir)

