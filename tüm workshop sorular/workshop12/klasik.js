/*
1- Backend geliştiriciliği nedir?

Backend geliştiriciliği, genellikle uygulamanın veri işleme, veri tabanı yönetimi, sunucu tarafı mantığı ve API (Application Programming Interface) entegrasyonlarıyla ilgilenmektir.


2- Bir backend geliştiricisinin sahip olması gereken beceriler nelerdir?

Programlama Dilleri,Veritabanları,API Geliştirme ve Türevleri


3- Backend neden önemlidir?

Güvenlik, performans, veri yönetimi ve entegrasyon gibi önemli işlevlerin doğru şekilde yönetilmesi backend'e dayalıdır.


4- SQL nedir?

Yapısal Sorgulama Dili olan, ilişkisel veritabanı yönetim sistemleri (RDBMS) ile etkileşimde bulunmak için kullanılan bir programlama dilidir. SQL, veritabanlarındaki verileri sorgulamak, eklemek, güncellemek ve silmek gibi işlemleri yapabilmek için kullanılır.


5.JOIN nedir ve türleri nelerdir?

birden fazla tabloyu birleştirerek veri elde etmeyi sağlayan bir komuttur.

INNER JOIN (İç Birleştirme):
Tanım: İki tabloyu birleştirirken, yalnızca her iki tablodaki eşleşen satırları döndürür.

LEFT JOIN:
Tanım: Sol tablodaki tüm satırları ve sağ tablodaki eşleşen satırları döndürür. Eğer sağ tabloda eşleşen satır yoksa, sağ tablodaki sütunlar NULL olur.

RIGHT JOIN:
Tanım: Sağ tablodaki tüm satırları ve sol tablodaki eşleşen satırları döndürür. Eğer sol tabloda eşleşen satır yoksa, sol tablodaki sütunlar NULL olur.

FULL JOIN (veya FULL OUTER JOIN - Tam Dış Birleştirme):
Tanım: Hem sol tablodaki hem de sağ tablodaki tüm satırları döndürür. Eşleşmeyen satırlar için NULL değerleri yer alır.

CROSS JOIN:
Her iki tablonun BÜTÜN kayıtlarını gösterir.Yani, birinci tablodaki her satır, ikinci tablodaki her satırla birleşir.

SELF JOIN (Kendine Birleştirme):
bir tablonun kendisiyle birleştirilmesi işlemidir. Bu, özellikle bir tablodaki satırların, o tablonun başka bir satırıyla ilişkilendirilmesi gerektiği durumlarda kullanılır.


6. SQL'de WHERE ve HAVING arasındaki fark nedir?
WHERE, bir sorgu sırasında satırlara uygulanan bir filtreleme koşuludur. Yani, veritabanından hangi satırların çekileceğini belirler.
WHERE koşulu, grup oluşturmadan önce verileri filtreler. Bu, SELECT sorgularında gruplama (GROUP BY) veya (TOP, COUNT, SUM, AVG gibi) fonksiyonları kullanılmadan önce çalışır.

HAVING, gruplama (GROUP BY) işleminden sonra uygulanan bir filtreleme koşuludur. Yani, GROUP BY ile gruplandıktan sonra fonksiyonlarla yapılan hesaplamalara dayalı bir filtreleme sağlar.
HAVING, GROUP BY ifadesi ve fonksiyonlar (örneğin, SUM(), COUNT(), AVG(), MAX(), MIN()) ile birlikte kullanılır ve gruplandıktan sonra veriyi filtreler.


7. SQL'de GROUP BY ve HAVING nelerdir?
GROUP BY, verileri belirli bir veya birden fazla sütuna göre gruplamak için kullanılır. Genellikle fonksiyonlar ile (örneğin, SUM(), COUNT(), AVG(), MAX(), MIN()) birlikte kullanılır
HAVING, gruplama yapıldıktan sonra grupların üzerinde filtreleme yapmanızı sağlar. Yani, veriyi önce gruplar, ardından gruplar üzerinde koşul uygulayarak gereksiz grupları dışarıda bırakabilirsiniz.


8. PRIMARY KEY ile FOREIGN KEY arasındaki fark nedir?
PRIMARY KEY(birincil anahtar) bir tablodaki her satırı benzersiz bir şekilde tanımlayan sütun veya sütunlar grubudur. Veritabanındaki her satırın benzersiz bir kimliğe sahip olmasını sağlamak için kullanılır.
PRIMARY KEY sütunu, NULL değer alamaz. Her bir satır için bu sütunun mutlaka bir değeri olmalıdır.
Her tabloda yalnızca bir tane primary key olabilir.

FOREIGN KEY, bir tablodaki sütunun, başka bir tablodaki PRIMARY KEY (veya başka bir benzersiz sütun) ile ilişkilendirilmesini sağlar.
FOREIGN KEY, tablodaki verilerin bütünlüğünü korur. Yani, bir FOREIGN KEY değeri, yalnızca var olan bir PRIMARY KEY değerine karşılık gelebilir. Eğer ilişkili satır başka tabloda mevcut değilse, hata alırsınız.
Bir tablonun birden fazla FOREIGN KEY ilişkisi olabilir.











1. TRACKS TABLOSUNDAN TRACK ADINI VE OLUŞTURUCUSUNU GETİREN BİR SORGU YAZIN

SELECT track_name, column_name FROM tracks;


2. TRACKS TABLOSUNDAN TÜM SÜTUNLARI GETİREN BİR SORGU YAZIN
SELECT * FROM tracks;


3. HER PARÇANIN OLUŞTURUCUSUNUN BENZERSİZ ADINI VEREN BİR SORGU YAZIN
SELECT DISTINCT creator FROM tracks;


4. TRACK TABLOSUNDAN EŞSİZ ALBUMID, MEDYATYPEID DÖNDÜREN BİR SORGU YAZIN
SELECT DISTINCT albumid, mediatypeid FROM tracks;


5. ‘Jorge Ben’İN TRACK ADINI VE TRACK KİMLİĞİNİ DÖNEN BİR SORGU YAZIN
SELECT track_id, track_name
FROM tracks
WHERE artist = 'Jorge Ben';


6. TOPLAM MİKTARI 25 $'DAN FAZLA BÜYÜK OLAN FATURALARIN TÜM BİLGİLERİNİ DÖNDÜREN BİR SORGU YAZIN
SELECT * FROM faturalar WHERE toplam_tutar > 25;
SELECT faturalar.*
FROM faturalar
JOIN fatura ON farutalar.faturalar_id = fatura.faturalar_id
GROUP BY farutalar.faturalar_id
HAVING SUM(fatura.miktar * fatura.birim_fiyat) > 25;
  
    ingilizcesi

SELECT * FROM invoices WHERE total_amount > 25;
SELECT i.*
FROM invoices i
JOIN invoice_items ii ON i.invoice_id = ii.invoice_id
GROUP BY i.invoice_id
HAVING SUM(ii.quantity * ii.unit_price) > 25;







*/