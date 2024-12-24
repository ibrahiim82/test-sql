/*
*Aşağıda verilen SQL ifadelerine karşılık gelen mongoDB ifadelerini yazın.

^1. SELECT * FROM people

Cevap:  db.people.find();

SELECT * ifadesi, "people" koleksiyonundaki tüm belgeleri getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

MongoDB'de find() metodu, koleksiyon içindeki tüm belgeleri döndürür.



^2. SELECT id, user_id, status FROM people;

Cevap: db.people.find({}, { id: 1, user_id: 1, status: 1 });


SELECT id, user_id, status ifadesi, sadece belirtilen alanları (id, user_id, status) getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

MongoDB'de find() metodu, koleksiyondaki belgeleri döndürür. İlk parametre {} boş bir filtre olup, tüm belgeleri seçer. İkinci parametre { id: 1, user_id: 1, status: 1 } sadece bu üç alanı döndüreceğini belirtir (1, alanın dahil edileceğini ifade eder).
Bu şekilde, id, user_id, ve status alanlarını içeren belgeler elde edilir.



^3. SELECT user_id, status FROM people;

Cevap: db.people.find({}, { user_id: 1, status: 1 });


SELECT user_id, status ifadesi, sadece user_id ve status alanlarını seçer.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

MongoDB'de find() metodu, koleksiyondaki tüm belgeleri döndürür. İlk parametre {} boş bir filtre olup, tüm belgeleri seçer. İkinci parametre { user_id: 1, status: 1 } sadece user_id ve status alanlarını döndüreceğini belirtir (1, o alanların dahil edileceğini ifade eder).

Bu şekilde sadece user_id ve status alanlarıyla belgeler elde edilir.



^4. SELECT * FROM people WHERE status = "A";

Cevap: db.people.find({ status: "A" });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE status = "A" ifadesi, status alanı "A" olan belgeleri filtreler.

MongoDB'de find() metodunda { status: "A" } ifadesi, status değeri "A" olan belgeleri seçer.



^5. SELECT user_id, status FROM people WHERE status = "A";

Cevap: db.people.find({ status: "A" }, { user_id: 1, status: 1 });

SELECT user_id, status ifadesi, yalnızca user_id ve status alanlarını seçer.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE status = "A" ifadesi, status alanı "A" olan belgeleri filtreler.

MongoDB'de find() metodunda { status: "A" } ifadesi, status değeri "A" olan belgeleri seçer ve ikinci parametre { user_id: 1, status: 1 } sadece user_id ve status alanlarını döndürür.



^6. SELECT * FROM people WHERE status != "A";

Cevap: db.people.find({ status: { $ne: "A" } });

SELECT * ifadesi, tüm alanları seçer.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE status != "A" ifadesi, status değeri "A" olmayan belgeleri seçer.

MongoDB'de find() metodunda { status: { $ne: "A" } } ifadesi, status değeri "A" olmayan belgeleri filtreler. $ne (not equal) operatörü, MongoDB'de bir alandaki değerin belirli bir değere eşit olmadığını kontrol etmek için kullanılır.



^7. SELECT * FROM people WHERE status = "A" AND age = 50;

Cevap: db.people.find({ status: "A", age: 50 });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE status = "A" AND age = 50 ifadesi, status değeri "A" ve age değeri 50 olan belgeleri filtreler.

MongoDB'de find() metodunda { status: "A", age: 50 } ifadesi, her iki koşulun (status = "A" ve age = 50) sağlandığı belgeleri döndürür.



^8. SELECT * FROM people WHERE status = "A" OR age = 50;

Cevap: db.people.find({ $or: [{ status: "A" }, { age: 50 }] });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE status = "A" OR age = 50 ifadesi, status değeri "A" veya age değeri 50 olan belgeleri seçer.

MongoDB'de $or operatörü, birden fazla koşuldan en az birinin sağlanmasını sağlayan bir sorgu yazmanızı mümkün kılar. { $or: [{ status: "A" }, { age: 50 }] } ifadesi, status "A" olan veya age 50 olan belgeleri döndürecektir.



^9. SELECT * FROM people WHERE age > 25;

Cevap: db.people.find({ age: { $gt: 25 } });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE age > 25 ifadesi, age değeri 25'ten büyük olan belgeleri seçer.

MongoDB'de $gt (greater than) operatörü, bir alandaki değerin belirli bir değerden büyük olup olmadığını kontrol eder. { age: { $gt: 25 } } ifadesi, age değeri 25'ten büyük olan belgeleri döndürecektir.



^10. SELECT * FROM people WHERE age < 25;

Cevap: db.people.find({ age: { $lt: 25 } });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE age < 25 ifadesi, age değeri 25'ten küçük olan belgeleri seçer.

MongoDB'de $lt (less than) operatörü, bir alandaki değerin belirli bir değerden küçük olup olmadığını kontrol eder. { age: { $lt: 25 } } ifadesi, age değeri 25'ten küçük olan belgeleri döndürecektir.



^11. SELECT * FROM people WHERE age > 25 AND age <= 50;

Cevap: db.people.find({ age: { $gt: 25, $lte: 50 } });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE age > 25 AND age <= 50 ifadesi, age değeri 25'ten büyük ve 50'ye eşit veya küçük olan belgeleri seçer.

MongoDB'de $gt (greater than) ve $lte (less than or equal to) operatörleri, sırasıyla bir alandaki değerin belirli bir değerden büyük ve küçük veya eşit olup olmadığını kontrol eder. { age: { $gt: 25, $lte: 50 } } ifadesi, age değeri 25'ten büyük ve 50'ye eşit veya küçük olan belgeleri döndürecektir.



^12. SELECT * FROM people WHERE user_id LIKE "%bc%";

Cevap: db.people.find({ user_id: /bc/ });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE user_id LIKE "%bc%" ifadesi, user_id değeri içinde "bc" geçen tüm belgeleri seçer.

MongoDB'de, LIKE operatörünün yerine düzenli ifadeler (regular expressions) kullanılır. /bc/ ifadesi, user_id alanında "bc" geçen tüm belgeleri döndürür. Bu, SQL'deki %bc% ifadesine karşılık gelir.



^13. SELECT * FROM people WHERE status = "A" ORDER BY user_id ASC;

Cevap: db.people.find({ status: "A" }).sort({ user_id: 1 });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE status = "A" ifadesi, status değeri "A" olan belgeleri filtreler.

ORDER BY user_id ASC ifadesi, user_id alanına göre artan sırayla sıralama yapar.

MongoDB'de sıralama işlemi için .sort() metodu kullanılır. { user_id: 1 } ifadesi, artan sırada sıralama yapmayı belirtir (ASC sıralama).



^14. SELECT * FROM people WHERE status = "A" ORDER BY user_id DESC;


Cevap: db.people.find({ status: "A" }).sort({ user_id: -1 });

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE status = "A" ifadesi, status değeri "A" olan belgeleri filtreler.

ORDER BY user_id DESC ifadesi, user_id alanına göre azalan sırayla sıralama yapar.

MongoDB'de sıralama işlemi için .sort() metodu kullanılır. { user_id: -1 } ifadesi, user_id alanını azalan (DESC) sırayla sıralamak için kullanılır.



^15. SELECT COUNT(*) FROM people;

Cevap: db.people.countDocuments();

SELECT COUNT(*) ifadesi, "people" koleksiyonundaki toplam belge sayısını döndürür.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

MongoDB'de belge sayısını almak için countDocuments() metodu kullanılır. Bu metod, koleksiyondaki tüm belgelerin sayısını döndürür.



^16. SELECT COUNT(user_id) FROM people;

Cevap: db.people.countDocuments({ user_id: { $exists: true } });

SELECT COUNT(user_id) ifadesi, user_id alanı bulunan belgelerin sayısını döndürür.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

MongoDB'de, belirli bir alanın var olup olmadığını kontrol etmek için $exists operatörü kullanılır. { user_id: { $exists: true } } ifadesi, user_id alanı bulunan tüm belgeleri sayar. Bu, SQL'deki COUNT(user_id) ifadesine karşılık gelir.



^17. SELECT COUNT(*) FROM people WHERE age > 30;

Cevap: db.people.countDocuments({ age: { $gt: 30 } });

SELECT COUNT(*) ifadesi, "people" koleksiyonundaki belirli bir koşulu sağlayan belgelerin sayısını döndürür.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

WHERE age > 30 ifadesi, age değeri 30'dan büyük olan belgeleri filtreler.

MongoDB'de, belge sayısını almak için countDocuments() metodu kullanılır ve { age: { $gt: 30 } } koşulu, age değeri 30'dan büyük olan belgelerin sayısını döndürür.



^18. SELECT DISTINCT(status) FROM people;

Cevap: db.people.distinct("status");

SELECT DISTINCT(status) ifadesi, "people" koleksiyonundaki benzersiz (distinct) status değerlerini getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

MongoDB'de, belirli bir alandaki benzersiz değerleri almak için distinct() metodu kullanılır. distinct("status") ifadesi, status alanındaki tüm benzersiz değerleri döndürür.



^19. SELECT * FROM people LIMIT 1;

Cevap: db.people.find().limit(1);

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

LIMIT 1 ifadesi, sadece bir belge döndürülmesini sağlar.

MongoDB'de, .find() metodu koleksiyondaki belgeleri getirirken, .limit(1) metodu döndürülecek belge sayısını sınırlar ve yalnızca bir belge döndürür.



^20. SELECT * FROM people LIMIT 5 SKIP 10;

Cevap: db.people.find().skip(10).limit(5);

SELECT * ifadesi, tüm alanları getirir.

FROM people ifadesi, "people" koleksiyonuna atıfta bulunur.

LIMIT 5 ifadesi, döndürülecek belge sayısını 5 ile sınırlar.

SKIP 10 ifadesi, ilk 10 belgeyi atlar ve ondan sonrasını alır.

MongoDB'de .skip() metodu, belgeleri atlamak için kullanılır ve .limit() metodu, döndürülecek belge sayısını sınırlamak için kullanılır. skip(10) ile ilk 10 belgeyi atladıktan sonra, limit(5) ile 5 belge döndürülür.



^21. CREATE TABLE people (
^  id MEDIUMINT NOT NULL AUTO_INCREMENT,
^  user_id VARCHAR(30),
^  age INT,
^  status CHAR(1),
^  PRIMARY KEY (id)
^ );

Cevap: db.createCollection("people");

Açıklama: MongoDB'de doğrudan SQL'deki gibi tablo oluşturma komutu yoktur. Ancak, MongoDB koleksiyonlar üzerinde çalışır ve bir koleksiyon ilk veri eklediğinizde otomatik olarak oluşturulur.

MongoDB'de, people koleksiyonunu yaratmak için özel bir komut yazmanıza gerek yoktur. Eğer veri eklediğinizde koleksiyon yoksa, MongoDB otomatik olarak bu koleksiyonu oluşturur.

Ayrıca, MongoDB'deki veri yapısı SQL'deki veri türlerine tam olarak karşılık gelmeyebilir. Ancak, MongoDB'de veri türlerini aşağıdaki şekilde tanımlayabilirsiniz:

id: MongoDB’de _id otomatik olarak her belgeye bir benzersiz kimlik atar. Bu alan SQL'deki AUTO_INCREMENT işlevini yerine getirir.
user_id: String veri türü kullanılır.
age: Number veri türü kullanılır.
status: String veya Char veri türü kullanılır.


Örnek bir belge şu şekilde olabilir:

db.people.insertOne({
  user_id: "user123",
  age: 30,
  status: "A"
});

Bu şekilde MongoDB'de veriyi ekleyebilir ve koleksiyonu kullanmaya başlayabilirsiniz.



^22. ALTER TABLE people ADD join_date DATETIME;

Bu SQL sorgusunun MongoDB karşılığı:

MongoDB, SQL'deki gibi ALTER TABLE komutunu doğrudan desteklemez. Ancak, koleksiyonlara yeni bir alan eklemek için var olan belgeleri güncelleyebilirsiniz. MongoDB'de bu işlemi yapmak için şu adımları izleyebilirsiniz:

1.Yeni bir alan eklemek için var olan her belgeye bir alan eklemek gerekir.

MongoDB'de koleksiyonlara yeni bir alan eklemek için updateMany() metodunu kullanabilirsiniz. Örneğin, tüm belgelere join_date adlı yeni bir alan eklemek için şu sorguyu yazabilirsiniz:

db.people.updateMany({}, { $set: { join_date: null } });


updateMany() metodu, koleksiyondaki tüm belgeleri günceller.
{} boş bir filtre olup, tüm belgeleri seçer.

$set: { join_date: null } ifadesi, tüm belgelere join_date adlı yeni bir alan ekler ve varsayılan olarak null değerini atar.

MongoDB'de veritabanı şemaları, SQL'deki gibi katı değildir. Yeni alanları eklemek ve belgeleri dinamik olarak güncellemek mümkündür. Ancak, SQL'deki gibi doğrudan ALTER TABLE komutuna ihtiyaç duyulmaz.



^23. DROP TABLE people;

Cevap db.people.drop();

SQL'deki DROP TABLE komutu, belirtilen tabloyu ve içindeki tüm verileri kalıcı olarak siler.

MongoDB'de benzer bir işlem için drop() metodu kullanılır. Bu metot, "people" koleksiyonunu ve içindeki tüm belgeleri siler.

Yani, MongoDB'deki db.people.drop() komutu, "people" koleksiyonunu tamamen siler.


INSERT INTO people(user_id, age, status)
VALUES ("bcd001", 45, "A");



^24. INSERT INTO people(user_id, age, status)
^    VALUES ("bcd001", 45, "A");


Cevap:  db.people.insertOne({
        user_id: "bcd001",
        age: 45,
        status: "A"
        });

SQL'deki INSERT INTO komutu, belirli bir tabloya veri ekler.

MongoDB'de insertOne() metodu kullanılarak tek bir belge eklenir.

{ user_id: "bcd001", age: 45, status: "A" } ile belirtilen alanlar ve değerler, MongoDB koleksiyonuna bir belge olarak eklenir.

Bu şekilde, "people" koleksiyonuna bir belge eklenmiş olur.



^25. UPDATE people SET status = "C" WHERE age > 25;

db.people.updateMany(
  { age: { $gt: 25 } }, // Koşul: age > 25
  { $set: { status: "C" } } // Güncellenen alan: status = "C"
);


SQL'deki UPDATE komutu, belirtilen koşula uyan verileri günceller.

SET status = "C" ifadesi, status alanını "C" olarak günceller.

WHERE age > 25 ifadesi, sadece age değeri 25'ten büyük olan belgeleri seçer.

MongoDB'de bu işlem için updateMany() metodu kullanılır:

İlk parametre { age: { $gt: 25 } }, age değeri 25'ten büyük olan tüm belgeleri seçer.

İkinci parametre { $set: { status: "C" } } ise, seçilen belgelerde status alanını "C" olarak günceller.



^26. UPDATE people SET age = age + 3 WHERE status = "A";

db.people.updateMany(
  { status: "A" }, // Koşul: status = "A"
  { $inc: { age: 3 } } // Güncelleme: age alanını 3 artır
);

SQL'deki UPDATE komutu, belirtilen koşula uyan verileri günceller.

SET age = age + 3 ifadesi, age değerini mevcut değerinin üzerine 3 ekler.

WHERE status = "A" ifadesi, yalnızca status değeri "A" olan belgeleri günceller.

MongoDB'de bu işlemi yapmak için updateMany() metodunu kullanırız:

İlk parametre { status: "A" }, status değeri "A" olan tüm belgeleri seçer.

İkinci parametre { $inc: { age: 3 } } ise, age alanını 3 artırır ($inc operatörü, sayısal değerleri artırmak için kullanılır).



^27. DELETE FROM people WHERE status = "D";

db.people.deleteMany({ status: "D" });

SQL'deki DELETE FROM komutu, belirtilen koşula uyan verileri siler.

WHERE status = "D" ifadesi, status değeri "D" olan tüm belgeleri seçer ve siler.

MongoDB'de deleteMany() metodu kullanılarak bir koşula uyan birden fazla belge silinebilir:

{ status: "D" } koşulu, status değeri "D" olan tüm belgeleri seçer.

deleteMany() metodu, bu belgeleri koleksiyondan siler.

Eğer sadece bir belge silmek isterseniz, deleteOne() metodu kullanılabilir.



^28. DDELETE FROM people;

db.people.deleteMany({});

SQL'deki DELETE FROM komutu, belirtilen tablodaki tüm verileri siler.

MongoDB'de deleteMany({}) metodu, koleksiyondaki tüm belgeleri siler. {} boş bir filtre olduğu için koleksiyondaki tüm belgeleri hedef alır.

Not: deleteMany() koleksiyondaki tüm belgeleri siler, ancak koleksiyonun kendisini silmez. Eğer koleksiyonu tamamen silmek isterseniz, şu komutu kullanabilirsiniz:

db.people.drop();

Bu komut, "people" koleksiyonunu ve içindeki tüm verileri kalıcı olarak siler.








*/
