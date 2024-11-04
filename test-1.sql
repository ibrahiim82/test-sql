-- bu bir yorum satırıdır.
/*
Multiline
Comments
*/
SELECT 1 AS One; -- iki tire satır sonu yorum için de kullanılır.
SELECT 1 AS One, /* araya yorum eklenebilir */ 2 AS two;

--SELECT 1 AS one: -- SQL komutlrını birbirinden ayırmak için ";" kullanırız.Tek bir komut satırı yazacaksak konmayabilir.Konması tavsiyedir.
--NOT Case-Sensitivie (küçük-BÜYÜK harf ayrımı YAPMAZ)
--SELECT 1 AS one;
select 1 as one; --! Piyasa standartı olarak küçük yazmak uygun değildir.

--Piyasa Standartları:
-- ** SQL"in komutları daima büyük harfle yazılır. 
--   örnek SELECT * FROM album WHERE column=21 AND...
-- ** String verilerde tek-tırnak veya çift tırnak kullanabiliriz.
--   standart olan tek tırnaktır. -- SELECT 'string-data' AS data 
-- ** Her bir temel komut ayrı bir satıra yazılır.


     --- SQL ---

-- * SELECT -- Seç getir.
-- * FROM -- Hangi tablodan.

-- SELECT * FROM Album; -- * yıldız tüm sütunlar demek.
SELECT Title,ArtistId FROM Album; -- istediğimiz sütunları getirir.
-- Tavsiye edilen sütun isimlerin tek tek yazmaktır.(* kullanmaktan kaçınmalıyız)

-- * AS --Lakap Takma -- Tablo ve sütunları geçici adlandırmak için kullanırız.
-- SELECT 'hello-data' AS baslik; 
-- SELECT 1+2*4 AS toplam;
-- SELECT AlbumId AS no,Title AS baslik FROM Album;
SELECT AlbumId+140 AS no,Title AS baslik FROM Album;