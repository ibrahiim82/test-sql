-- bu bir yorum satırıdır.
/*
Multiline
Comments
*/
	-- SELECT 1 AS One; -- iki tire satır sonu yorum için de kullanılır.
	-- SELECT 1 AS One, /* araya yorum eklenebilir */ 2 AS two;

--SELECT 1 AS one: -- SQL komutlrını birbirinden ayırmak için ";" kullanırız.Tek bir komut satırı yazacaksak konmayabilir.Konması tavsiyedir.
--NOT Case-Sensitivie (küçük-BÜYÜK harf ayrımı YAPMAZ)
--SELECT 1 AS one;
	-- SELECT 1 as one; --! Piyasa standartı olarak küçük yazmak uygun değildir.

--Piyasa Standartları:
-- ** SQL"in komutları daima büyük harfle yazılır. 
--   örnek SELECT * FROM album WHERE column=21 AND...
-- ** String verilerde tek-tırnak veya çift tırnak kullanabiliriz.
--   standart olan tek tırnaktır. -- SELECT 'string-data' AS data 
-- ** Her bir temel komut ayrı bir satıra yazılır.
/*
SELECT *
FROM tableName
WHERE column=1
	AND (column2=1 OR column3=1)
*/



--- --- --- SQL --- --- ---



-- * SELECT -- Seç getir.
-- * FROM -- Hangi tablodan.

-- SELECT * FROM Album; -- * yıldız tüm sütunlar demek.
-- SELECT Title,ArtistId FROM Album; -- istediğimiz sütunları getirir.
-- Tavsiye edilen sütun isimlerin tek tek yazmaktır.(* kullanmaktan kaçınmalıyız)

-- * AS --Lakap Takma -- Tablo ve sütunları geçici adlandırmak için kullanırız.
-- SELECT 'hello-data' AS baslik; 
-- SELECT 1+2*4 AS toplam;
-- SELECT AlbumId AS no,Title AS baslik FROM Album;
	-- SELECT AlbumId+120 AS no,Title AS baslik FROM Album;

-- SELECT Album.AlbumId, Album.Title FROM Album;
-- SELECT a.AlbumId, a.Title FROM Album AS a; --Tablo isimlendirme
-- SELECT a.AlbumId AS Numara, a.Title AS baslik FROM Album AS a; --Tablo ve sütun isimlendirme
-- SELECT a.AlbumId Numara, a.Title baslik FROM Album a; -- AS yazmadan(bir boşluk) bırakarak isimlendirme yapılabilir(tercih edilen yöntem).

-- *DISTINCT -- Tekrar edilen kayıtların sadece bir defa gelmesini sağlar.(benzer kaydı engeller)
-- SELECT DISTINCT City FROM Customer;
-- SELECT DISTINCT Country FROM Customer;
-- SELECT DISTINCT Country FROM Customer; --Bütun sütünlardaki verilerin aynı olduğunu kontrol eder.

-- *WHERE -- Filtreleme
-- SELECT * FROM Customer WHERE Country = 'USA'; --Eşit olanları getir
-- SELECT * FROM Customer WHERE Country != 'USA'; --Eşit olmayanları getir(!=)(Tercih edilen yöntem)
-- SELECT * FROM Customer WHERE Country <> 'USA'; --Eşit olmayanları getir(<>)
-- SELECT * FROM Customer WHERE CustomerId >20; --Büyük olanları getir.
-- SELECT * FROM Customer WHERE CustomerId >=20; --Büyük ve eşit olanları getir.
-- SELECT * FROM Customer WHERE CustomerId <20; --Küçük olanları getir.
-- SELECT * FROM Customer WHERE CustomerId <=20; --Küçük ve eşit olanları getir.
-- SELECT * FROM Customer WHERE CustomerId BETWEEN 10 AND 20; --10 ile 20 arasındaki kayıtları getir.(her ikisi de dahil)
-- SELECT * FROM Customer WHERE CustomerId BETWEEN '2024-01-01' AND '2024-02-28'; --(genelde tarih filtrelemede kullanılır) 

-- * WHERE * AND / OR / NOT
-- SELECT * FROM Customer WHERE NOT Country = 'USA'; -- NOT operatörü genelde True/False (Null/0/'') verilerinde kullanılır. (WHERE isActive = FALSE) = (WHERE NOT isActive)
-- SELECT * FROM Customer WHERE Country = 'USA' AND Company NOT NULL;
-- SELECT * FROM Customer WHERE Country = 'USA' AND NOT Company; -- Alternatif NOT kullanımı.
-- SELECT * FROM Customer WHERE Country = 'USA' OR Country = 'Brazil' OR Country = 'Denmark';
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country = 'Denmark') AND CustomerId < 20;
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country = 'Denmark') AND CustomerId < 20 AND State = 'SP';

-- * WHERE * IN / NOT IN
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark');
-- SELECT * FROM Customer WHERE Country NOT IN ('USA', 'Brazil', 'Denmark');
-- SELECT * FROM Customer WHERE CustomerId IN (1,2,4,8,16,32);

-- * WHERE * LIKE (SpecialChars:'%', JokerChar;'_' = SingleChar) -- Arama yapar.
-- SELECT * FROM Customer WHERE Country LIKE 'USA'; -- 'USA' olanlar.
-- SELECT * FROM Customer WHERE Address LIKE '696'; -- '696' ile başlayanlar.
-- SELECT * FROM Customer WHERE Address LIKE '%langer'; -- 'langer' ile bitenler.
-- SELECT * FROM Customer WHERE Address LIKE '%rue%'; -- içinde 'rue' geçenler.
-- SELECT * FROM Customer WHERE Phone LIKE '_55_%' -- 2. ve 3. karakteri '5' olanları ve en az 4 karakter olanları getir.
-- SELECT * FROM Customer WHERE Address LIKE '_a_%'; --2.karakter 'a' ve en az 3 karakter olanlar.
-- SELECT * FROM Customer WHERE Phone LIKE '+__ 030%'; -- Ülke kodu bilinmeyen 030 ile başlaya telefonlar.
-- SELECT * FROM Customer WHERE Phone LIKE '+__ 030%' AND FirstName = 'Niklas'; -- Niklas isimli 030 ile başlayan numaralı kayıtlar.

-- * ORDER BY -- Sıralama (ASC = A'dan Z'ye - DESC = Z'den A'ya)
-- SELECT * FROM Customer ORDER BY CustomerId DESC;
-- SELECT * FROM Customer ORDER BY Country ASC; -- A-Z sırala
-- SELECT * FROM Customer ORDER BY Country ASC; -- Z-A sırala
-- SELECT * FROM Customer ORDER BY Country DESC, City ASC,LastName DESC; -- Sırasıyla Ülke-Şehir-Soyisim sıralaması yapar.
-- SELECT * FROM Customer ORDER BY Country, City, LastName DESC; -- Default sıralama = ASC (yazılmasa da olur)
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country = 'Denmark') AND CustomerId < 20 ORDER BY Country, City, LastName DESC;
/*
-- Piyasa standartı yazımı:
SELECT CustomerId, FirstName, LastName, Company, City, Country
FROM Customer 
WHERE (Country = 'USA'  OR Country = 'Brazil'  OR Country = 'Denmark')
	AND CustomerId < 20 
ORDER BY Country, City, LastName DESC;
*/

-- * LIMIT -- Limitler. Belli syaıda kayıt getirir. (Sayfalamada kullanılır.)
-- SELECT * FROM Customer LIMIT 0, 10; -- LIMIT (kaç adet kayıt atlayacak), (kaç adet kayıt getirilecek.)
-- SELECT * FROM Customer LIMIT 5, 15;
-- SELECT * FROM Customer LIMIT 10; -- Başlangıç default = 0 (Tek bir rakam yazılırsa başlangıcı sıfır kabul eder.) (Tercih edilmeyen yöntemdir.)
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark') LIMIT 5, 5; -- Filtrelemeden sonra ilk 5 atla, 5 kayıt getir.
-- SELECT * FROM Customer WHERE Country IN ('USA', 'Brazil', 'Denmark') ORDER BY FirstName ASC LIMIT 10, 15;

-- * SUBQUERIES (SELECT IN SELECT) (Nested Query)
-- SELECT * FROM Album WHERE ArtistId = (SELECT ArtistId FROM Artist WHERE Name = 'Led Zeppeli'); -- ArtisId'yi, Artist tablosundan isim sorgulayarak buldu.
-- SELECT alb.AlbumId, alb.Title, (SELECT art.Name FROM Artist AS art WHERE art.ArtistId = alb.ArtistId) AS Artist FROM Album AS alb; -- Albumlerin sanatçı verisini Artist tablosundan çekti.
/*
-- SubSelect sorgusunu tablo gibi kullanmak:
SELECT FirstName, LastName
FROM (
	SELECT * FROM Customer WHERE Country = 'USA' AND CustomerId > 20
) WHERE FirstName LIKE '%a%'
*/



--- --- --- JOINS --- --- ---

--Birden fazla tablodan aynı anda veri çekmek için kullanılır.

-- * INNER JOIN -- Yalnızca kesişen kayıtları getirir.
-- * (Alternatif yazım yöntemi olarak INNER JOIN yazmak yerine sadece JOIN yazılabilir.)(Default JOIN yöntemidir)(Piyasada kullanım:INNER JOIN)

/*
SELECT *
FROM Artist AS art
JOIN Album AS alb ON alb.ArtistId = art.ArtistId -- 'JOIN' == 'INNER JOIN'
ORDER BY alb.ArtistId,alb.AlbumId
*/

/*
SELECT c.FirstName, c.LastName, c.Country, i.InvoiceId, i.InvoiceDate, i.Total AS InvoiceTotal
FROM Customer AS c
INNER JOIN Invoice AS i ON i.CustomerId = c.CustomerId
ORDER BY c.CustomerId
*/

/*
SELECT t.Name Sarki, a.Title Album, m.Name Dosya, g.Name Tur
FROM Track t
INNER JOIN Album a ON a.AlbumId=t.AlbumId --eşittirin sağında veya solunda olması önemsizdir
INNER JOIN MediaType m ON t.MediaTypeId=m.MediaTypeId
INNER JOIN Genre g ON g.GenreID=t.GenreId
*/


-- * LEFT JOIN --Üstteki(FROM) tablodaki bütün kayıtları getir ve JOIN tablosundaki KESİŞEN kayıtları getir.

/*
SELECT *
FROM Artist AS art
LEFT JOIN Album AS alb ON alb.ArtistId=art.ArtistId --Eğer bir karşılığı yoksa NULL yazar.
ORDER BY ArtistId ASC, AlbumId ASC
*/


-- * RIGHT JOIN -- Üst (FROM) tablodaki KESİŞEN kayıtlar ve JOIN tablodaki BÜTÜN kayıtları getir.
/*
SELECT *
FROM Artist AS art
RIGHT JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/


-- * FULL OUTER JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, Eşleşenleri yanyana göster.
/*
SELECT *
FROM Artist AS art
FULL OUTER JOIN Album AS alb ON alb.ArtistId=art.ArtistId
ORDER BY ArtistId ASC, AlbumId ASC
*/


-- * CROSS JOIN -- Her iki tablonun BÜTÜN kayıtlarını göster, İlişki gözetme.--(KULLANILAN BİR YÖNTEM DEĞİLDİR)
/*
SELECT *
FROM Artist AS art
CROSS JOIN Album AS alb
ORDER BY ArtistId ASC, AlbumId ASC
*/


-- * JOIN ÖRNEKLER
/*
-- Hangi sanatçı hangi albümleri çıkarmıştır. Bir albüme sahip olmayan sanatçıları gösterme. Sadece albüm sahibi olan sanatçıları göster.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
INNER JOIN Album AS t2 ON t1.ArtistId=t2.ArtistId
-- WHERE t1.Name = 'Led Zeppeli'
ORDER BY t1.ArtistId
/*
-- Bütün sanatçıları göster. Hangi sanatçı hangi albüme sahip onu da göster. Ama albüm sahibi olmayan kayıtlara NULL yaz.
SELECT t1.ArtistId, t1.Name AS sanatci, t2.Title AS album
FROM Artist AS t1
LEFT JOIN Album AS t2 ON t2.ArtistId=t1.ArtistId
ORDER BY t1.ArtistId
*/



--- --- --- FUNCTIONS --- --- ---


-- SELECT count (*) FROM album; --count(*) tavsiye edilmez
-- SELECT count (total) FROM Invoice; --kaç adet fatura kesilmiş
-- SELECT count (BillingState) FROM Invoice; -- null'ları saymaz.

-- MIN MAX AVG 
-- SELECT min(Total) FROM invoice;
-- SELECT max(Total) FROM invoice;
-- SELECT avg(Total) FROM invoice;

/*
SELECT min(Total) as EnDusuk, max(Total) as EnYuksek, avg(Total) OrtalamaFatura
FROM invoice;
*/

-- ROUND
SELECT round(avg(Total)) FROM Invoice;
SELECT round(avg(Total),2) FROM invoice;

-- LENGTH
SELECT length (BillingAddress),BillingAddress FROM Invoice;



--- --- --- GROUP BY --- --- ---


SELECT count (*) FROM invoice WHERE BillingCountry= 'Germany';
SELECT count (*) FROM invoice GROUP BY BillingCountry;

--her bir ülke için kesilen fatura adedi
SELECT BillingCountry, count (*) AS kesilenFaturaAdedi FROM invoice GROUP BY BillingCountry;


--en fazla fatura kesilen ülke
SELECT BillingCountry, max(Total) FROM invoice GROUP BY BillingCountry;
SELECT BillingCountry, max(Total), min(Total) FROM invoice GROUP BY BillingCountry;



-- CRUD create update delete veri üzerinde değişiklik yapıyor.
-- CREATE ifadesi database yapısı üzerinde kullanılır
-- INSERT ifadesi veri üzerinde
-- INSERT INTO hangi alana hangi veriler
-- INSERT INTO tablename(fields) VALUES(...,...)

INSERT INTO Genre (GenreId,Name) VALUES(30,'arabesk');
INSERT INTO Genre VALUES (31,'halk'); --db'deki tablo field sırası ne ise on sıra ekler
INSERT INTO Genre (Name,GenreId) VALUES('sanat',32);
INSERT INTO Genre (GenreId,) VALUES(33);

-- n adet INSERT
INSERT INTO Genre
VALUES
     (34,'turk pop')
	 (35,'turk jazz')
	 (36,'anadolu rock')


-- UPDATE 	güncelle
-- UPDATE Tablename SET fieldname=newdata -- WHERE condition
-- SELECT * from Genre  WHERE GenreId=30;
UPDATE Genre SET Name='yeni tür' WHERE GenreId=30;

-- DELETE   sil
DELETE FROM Genre WHERE GenreId=30;








