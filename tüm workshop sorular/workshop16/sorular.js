/*

*1.ODM nedir?

Object-Document Mapping (ODM), nesne yönelimli programlamada, veritabanı ile nesneler arasındaki verileri eşleştirmek için kullanılan bir tekniktir. Bu kavram, özellikle NoSQL veritabanları (özellikle belge tabanlı veritabanları gibi MongoDB) ile çalışırken kullanılır. ODM, bir veritabanındaki belge (document) ile yazılımda kullanılan nesne (object) arasındaki ilişkileri yönetmeye yarar.

Nesne ile Belge Eşleştirmesi: Bir nesnenin özellikleri (field) ile belge veritabanındaki alanlar (field) birbirine eşleştirilir.

Veri Dönüşümü: Nesneler ve belgeler arasında veri dönüştürülür. Örneğin, bir Python nesnesi bir MongoDB belgesine dönüştürülür ve tam tersi işlem yapılabilir.

CRUD İşlemleri: Create (Oluşturma), Read (Okuma), Update (Güncelleme) ve Delete (Silme) işlemleri nesneler üzerinden yapılır ve bu işlemler veritabanı belgelerine yansır.

İlişkilendirilmiş Veriler: ODM, nesneler arası ilişkileri (örneğin, bir nesnenin birden fazla alt nesneye sahip olması) yönetebilir.



*2. Mongoose kullanarak MongoDB'ye nasıl bağlanılır?

^1. Projeyi Başlatın
npm init -y  # Bu komut, package.json dosyasını oluşturur

^2. Mongoose'u Yükleyin
npm install mongoose

^3. MongoDB Bağlantısını Kurun
MongoDB'ye bağlanmak için Mongoose'u kullanacağız. Bağlantı işlemini genellikle bir JavaScript dosyasında yaparız. Örneğin, app.js dosyasında bağlantıyı kurabiliriz.

Aşağıdaki adımları izleyerek MongoDB'ye bağlanabilirsiniz:

a. app.js Dosyasını Oluşturun
Yeni bir dosya oluşturun, örneğin app.js, ve içine şu kodları ekleyin:

/ Mongoose kütüphanesini içeri aktarın
const mongoose = require('mongoose');

/ MongoDB bağlantı URL'sini tanımlayın (Burada <dbname> kısmını kendi veritabanı adınızla değiştirin)
const dbURI = 'mongodb://localhost:27017/mydatabase';  // MongoDB'yi localhost'ta varsayılan portu ile kullanıyoruz

/ Mongoose ile MongoDB'ye bağlanma
const dbConnection = async () => {
  if (!process.env.MONGODB_URI) {
    throw new CustomError("mongodb_uri is necessary");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection is succesfull");
  } catch (error) {
    console.log("Database connection error");
    throw new CustomError("Failed to connect to the database", 500);
  }
};

/ Mongoose ile MongoDB'ye bağlanma
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB bağlantısı başarılı!');
  })
  .catch((err) => {
    console.log('MongoDB bağlantı hatası:', err);
  });

b. Bağlantı URL'sini Anlamak
mongodb://localhost:27017/mydatabase: Bu, MongoDB'nin localhost üzerinde çalıştığını ve 27017 portunu kullandığını belirtir. mydatabase kısmı ise kullanılacak veritabanının adı olmalıdır. MongoDB veritabanı varsa bağlantı sağlanır, yoksa otomatik olarak oluşturulur.


^5. Veritabanı İşlemleri Yapın
MongoDB'ye başarılı bir şekilde bağlandıktan sonra, veri eklemek veya sorgulamak gibi işlemleri yapabilirsiniz.

Örnek: Basit Bir Model Oluşturma ve Veri Ekleme

/ Mongoose modeli için bir schema oluşturun
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String
});

/ Modeli oluşturun
const User = mongoose.model('User', userSchema);

/ Yeni bir kullanıcı oluşturun
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com'
});

/ Kullanıcıyı veritabanına kaydedin
newUser.save()
  .then((user) => {
    console.log('Kullanıcı başarıyla kaydedildi:', user);
  })
  .catch((err) => {
    console.log('Kullanıcı kaydedilirken hata:', err);
  });



*3. Mongoose modeli nedir, basit bir örnek verir misiniz?

Mongoose modeli, MongoDB ile etkileşimde bulunmak için kullanılan bir şema (schema) ve bu şemanın üzerinde işlem yapabilecek fonksiyonları içeren bir yapıdır. Mongoose, MongoDB'nin belge tabanlı yapısını daha düzenli hale getirmek için şemalar kullanır. Şemalar, bir koleksiyondaki belgelerin yapısını tanımlar ve bu yapıyı belirli kurallar ve veri türleriyle doğrular.

Mongoose Modeli ve Şeması

Şema (Schema): Veritabanındaki belge yapısını tanımlar. Yani, hangi alanların olacağını, bu alanların türlerini ve bu alanlar için kuralları belirtir.

Model: Şemanın işlevsel bir temsilidir. Model, veritabanı üzerinde işlem yapmamızı sağlar (veri ekleme, veri sorgulama, güncelleme vb.).


Basit Bir Mongoose Modeli Örneği
Aşağıda, kullanıcı verisi saklayacak basit bir Mongoose modeli örneğini inceleyelim.

/ Mongoose kütüphanesini içeri aktarın
const mongoose = require('mongoose');

/ Kullanıcı için bir şema tanımlayın
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String, // Veri türü
    required: true // Bu alan zorunlu
  },
  email: {
    type: String,
    required: true,
    unique: true // Bu alanın her kullanıcı için benzersiz olması gerektiği belirtilir
  },
  age: {
    type: Number,
    min: 18, // Yaş minimum 18 olmalı
    max: 100 // Yaş maksimum 100 olmalı
  },
  createdAt: {
    type: Date,
    default: Date.now // Varsayılan olarak oluşturulma zamanı otomatik ayarlanır
  }
});

/ Kullanıcı modelini oluşturun
const User = mongoose.model('User', userSchema);

module.exports = User;



*4- Mongoose'da findOne() ve find() yöntemleri arasındaki fark nedir?

^1. findOne() Yöntemi:
Amaç: findOne() yöntemi, tek bir belgeyi bulur ve döndürür.

Sonuç: Sadece ilk eşleşen belgeyi döner. Eğer birden fazla eşleşen belge varsa, yalnızca ilk bulunan döndürülür.

Kullanım: Genellikle, yalnızca bir belgenin gerektiği durumlarda kullanılır (örneğin, bir kullanıcıyı e-posta adresine göre bulmak).

User.findOne({ email: 'jane.doe@example.com' })
  .then(user => {
    console.log(user);  // İlk eşleşen kullanıcıyı döner
  })
  .catch(err => {
    console.log(err);
  });

Özet:
Yalnızca ilk eşleşen belgeyi döndürür.
Tek bir belge döner (belirtilen şartlara uyan ilk belge).
Dönüş değeri: Bir belge veya null (belge bulunmazsa).


^2. find() Yöntemi:
Amaç: find() yöntemi, belirtilen koşullara uyan tüm belgeleri döndürür.

Sonuç: Koşullara uyan tüm belgeleri bir dizi (array) olarak döndürür. Eğer eşleşen belge yoksa, boş bir dizi döner.

Kullanım: Birden fazla belge döndürmek istediğinizde kullanılır (örneğin, tüm yaşları 18'den büyük kullanıcıları listelemek).

User.find({ age: { $gte: 18 } })
  .then(users => {
    console.log(users);  // Yaşı 18 veya daha büyük olan tüm kullanıcıları döner
  })
  .catch(err => {
    console.log(err);
  });

Özet:
Tüm eşleşen belgeleri döndürür.
Bir dizi (array) olarak döner.
Dönüş değeri: Eşleşen belgeler dizisi veya boş dizi (belge bulunmazsa).

findOne():  İlk eşleşen belgeyi döndürür
            Tek bir belge veya null (belge yoksa)
            Tek bir belgeyi almak için kullanılır

find():     Tüm eşleşen belgeleri döndürür
            Belge dizisi (array) veya boş dizi
            Birden fazla belgeyi almak için kullanılır



*5- Mongoose'da middleware nedir ve nasıl kullanılır?

Mongoose middleware, MongoDB üzerinde yapılan işlemler sırasında otomatik olarak çalıştırılabilen fonksiyonlardır. Bu fonksiyonlar, belirli bir işlem gerçekleştirilmeden önce (veya sonra) çalıştırılır ve veritabanı işlemleri üzerinde ek mantık uygulamak için kullanılır. Middleware, genellikle veri doğrulama, veriyi değiştirme, güncelleme ve silme işlemleri gibi yaygın işlevler için kullanılır.

Mongoose Middleware Türleri
Pre Middleware (Öncesi Middleware):

Bu tür middleware, bir işlem yapılmadan önce çalışır.
Örneğin, bir belge veritabanına kaydedilmeden önce bazı doğrulamalar veya değişiklikler yapabilirsiniz.
Post Middleware (Sonrası Middleware):

Bu tür middleware, bir işlem yapıldıktan sonra çalışır.
Örneğin, bir belge kaydedildikten sonra loglama yapabilirsiniz.

^1. Pre Middleware Kullanımı
Pre middleware, veritabanı işleminden önce çalışır. Aşağıda, save işleminden önce çalışan bir pre middleware örneği yer alıyor. Bu middleware, kullanıcı kaydedilmeden önce kullanıcının şifresini şifreler.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Şifreyi hashlemek için bcrypt kullanacağız

/ Kullanıcı şemasını oluşturuyoruz
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

/ Pre Middleware: save işleminden önce şifreyi hashle
userSchema.pre('save', function(next) {
  / Şifre değişmişse, şifreyi hashle
  if (this.isModified('password')) {
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
      if (err) return next(err);
      this.password = hashedPassword;  // Hashlenmiş şifreyi kullanıcıya atayın
      next();  // İşlemi tamamlayın
    });
  } else {
    next(); // Eğer şifre değiştirilmediyse, işlemi geçirin
  }
});

/ Modeli oluştur
const User = mongoose.model('User', userSchema);

module.exports = User;

pre('save') middleware'ı, save işleminden önce çalışır.
Şifre değiştirilmediyse, işlem direkt olarak devam eder. Eğer şifre değiştirilmişse, bcrypt ile şifre hashlenir ve bu hash veritabanına kaydedilir.


^2. Post Middleware Kullanımı
Post middleware, işlem yapıldıktan sonra çalışır. Aşağıda, bir kullanıcı kaydedildikten sonra post middleware ile bir log yazdırmayı gösteriyoruz.

/ Post Middleware: save işleminden sonra log yazdırma
userSchema.post('save', function(doc, next) {
  console.log('Yeni kullanıcı başarıyla kaydedildi:', doc);
  next(); // İşlemi tamamlayın
});
post('save') middleware'ı, save işleminden sonra çalışır.
doc, kaydedilen belgeyi temsil eder. Bu belgeyi kullanarak loglama veya başka işlemler yapabilirsiniz.


Middleware'ın Çalışma Sırası:

Pre Middleware önce çalışır.
Ana işlem (save, find, update vb.) yapılır.
Post Middleware sonra çalışır.




*6- Mongoose'da 'populate'(doldur) methodunun amacı nedir? blogPost.controller.js

Mongoose'da populate() metodu, ilişkili (referans verilen) verilerin veritabanından otomatik olarak çekilmesini sağlamak için kullanılır. MongoDB, belge tabanlı bir veritabanıdır ve her belge kendi başına bağımsız olabilir. Ancak bazı durumlarda, bir belgenin diğer belgelere referans vermesi gerekebilir. populate() metodu, bu tür referansları çözmek ve ilişkili verileri almak için kullanılır.



*7- Mongoose, MongoDB üzerinde ..... işlemlerini gerçekleştirir.?

Mongoose, MongoDB üzerinde CRUD işlemlerini gerçekleştirir.

C: Create (Oluşturma) – Yeni belge eklemek.
R: Read (Okuma) – Veritabanındaki verileri sorgulamak.
U: Update (Güncelleme) – Mevcut veriyi güncellemek.
D: Delete (Silme) – Veriyi silmek.



*8- Mongoose şemalarındaki 'required'(gerekli) seçeneği, bir alanın ...... olup olmadığını belirtir.    blogPost.model.js

Mongoose şemalarındaki 'required' (gerekli) seçeneği, bir alanın ZORUNLU olup olmadığını belirtir.



*9-Bir belgenin özelliklerini güncellemek için ...... veya..... Yöntemler?      blogPost.controller.js , blogCategory.controller.js

findOneAndUpdate(): 
Belirtilen koşula uyan ilk belgeyi bulur ve günceller.
Güncellenmiş belgeyi döndürebilir (güncel veya eski).
Belgeyi güncelledikten sonra belgeyi döndürmek isteniyorsa kullanılır.

updateOne():
Belirtilen koşula uyan tek bir belgeyi günceller.
Güncellenen belgeyi dönmez, işlem sonucu hakkında bilgi verir.
Belgeyi günceller ama sonuç döndürülmesi gerekmezse kullanılır.



findOneAndUpdate(): Belgeyi günceller ve güncellenmiş belgeyi döndürür. Genellikle güncel veriyi almak için tercih edilir.

updateOne(): Belgeyi günceller fakat güncellenen belgeyi döndürmez. Yalnızca işlem sonucu hakkında bilgi verir. Bu metot daha çok işlem kontrolü ve performans gereksinimleri için kullanılır.



*10- Belirli bir koşula göre bir belgeyi bulmak ve silmek için ...... kullanabiliriz. veya..... Yöntemler?

findOneAndDelete():
Belirtilen koşula uyan ilk belgeyi bulur ve siler, silinen belgeyi döndürür.
Silinen belgeyi döndürür, eğer belge bulunmazsa null döner.
Silinen belgeyi geri almak isterseniz kullanılır.

deleteOne():
Belirtilen koşula uyan tek bir belgeyi siler, ancak belgeyi döndürmez.
Silme işleminin sonucu hakkında bilgi döner (örneğin, kaç belge silindi).
Silme işleminin başarı durumunu kontrol etmek için kullanılır.



*/