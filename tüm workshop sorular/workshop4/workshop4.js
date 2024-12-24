/*
1. Bir diziyi, içindeki eleman sayısından daha fazla değişkenle destructure(bozmaya) çalışırsanız ne olur?
sıralamak?
A. Ekstra değişkenler tanımsız olarak atanır                              Cevap A
B. Bir hata oluşur
C. Dizi otomatik olarak yeniden boyutlandırılır
D. Yalnızca ilk birkaç değişkene değer atanır

2. Dizi destruct etmede rest elemanı (...) ne yapar?
A. Öğeleri birden çok diziye yayar   (...spread)
B. Kalan elemanları bir dizide toplar               		Cevap B
C. Dizideki elemanları kaldırır  (splice)
D. Dizideki öğelerin sırasını tersine çevirir  (reverse)

3. İki nesneyi birleştirmek için merge(yayılma) operatörünü nasıl kullanırsınız?
A. const merged = {...obj1, ...obj2}				Cevap A
B. const merged = {...obj1 + obj2}
C. const merged = {...obj1 & obj2}
D. const merged = {...obj1 | obj2}

4. Aşağıdaki kodun çıktısı ne olacaktır?
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);
A. 1, 2, 3, 4, 5
B. [1, 2]
C. [1, 2, 3, 4, 5]
D. [3, 4, 5]			Cevap D


5. Aşağıdaki kodun çıktısı ne olacaktır?
function sum(...numbers) {
 return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));
A. 1
B. 10				Cevap B
C. 24
D. 1234

6. Bir fonksiyonda rest parametrelerini kullanmak için hangi syntax(sözdizimi) doğrudur?
A. function(...rest, a) {}
B. function(a, rest...) {}
C. function(a, ...rest) {}			Cevap C
D. function(rest..., a) {}

7. Aşağıdaki kodun çıktısı ne olacaktır?

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);

A. Syntax error
B. Undefined
C. [1, 2, 3, undefined, undefined]
D. [1, 2, 3, 4, 5]			Cevap D

8. Spread operatörü JavaScript'te ne yapar?
A. Birden fazla diziyi tek bir dizide birleştirir
B. Nesneleri kopyalar
C. Yinelenebilir öğeleri (dizi gibi) ayrı ayrı öğelere yayar	Cevap C
D. Nesneleri birleştirir

8. Bootstrap nedir?
A. Bir programlama dili
B. Bir front-end framework'dür				Cevap B
C. Bir veritabanı yönetim sistemi
D. Bir işletim sistemi

9. Bootsrap'te kırmızı renkli kenarlığı(border) hangi class gösterir?
A. border warning
B. border border-danger                                 Cevap B
C. border border-warning
D. border-danger

10. Bootsrap'te hangi sınıf küçük harfli metni belirtir?
A. lowercase
B. text-lowercased
C. text-lowercase					Cevap C
D. txt-lowercased

11. Hangi sınıf bir masaya zebra çizgileri ekler?
A. .table-zebra
B. .table-bordered
C. .table-striped					Cevap C
D. .even and .odd

12. Responsive(duyarlı) bir navbar oluşturmak için kullanılan Bootstrap sınıfı nedir?
A. .navbar-fixed
B. .nav-collapse
C. .nav-responsive
D. .navbar						Cevap D

13. Bootstrap'i HTML dosyanıza nasıl dahil edebilirsiniz?
A. Local Bootstrap dosyalarını indirin ve bağlayın							Cevap A ve B
B. CDN (Content Delivery network)(İçerik Dağıtım Ağı) bağlantısı kullanın				Cevap A ve B
C. Herhangi bir işlem yapmanıza gerek kalmadan Bootstrap Kodunu doğrudan projenize yazabilirsiniz.
D. Sisteminizde Python kurulu olmalıdır

14. Bootstrap modal bileşeninin birincil işlevi nedir?
A. Form öğeleri oluşturmak 
B. Bir mesaj kutusunu görüntülemek 				Cevap B
C. Gezinme bağlantılarını tanımlamak
D. Kullanıcı kimlik doğrulamasını gerçekleştirmek

15. ..... sınıfı görüntüyü bir daire şeklinde şekillendirir.
A. .img-thumbnail
B. .img-responsive
C. .img-circle							Cevap C
D. .img-rounded


Klasik Sorular

1. JavaScript'te spread operatörü ile dinlenme operatörü arasındaki farkı açıklayabilir misiniz?
JavaScript'teki spread operatörü (...) ve dinlenme operatörü (...) aynı sözdizimini kullanır ancak
bağlama bağlı olarak farklı amaçlara hizmet eder.

2.Destructuring kullanarak bir nesneden belirli özellikleri nasıl ayıklarsınız ve bu özellikler için varsayılan değerleri nasıl sağlayabilirsiniz?
Destructing, bir nesneden belirli özellikleri çıkarmanıza ve bunları değişkenlere atamanıza olanak tanır. 
Bu özelliklerin tanımsız olması veya nesnede bulunmaması durumunda bu özellikler için varsayılan değerler de sağlayabilirsiniz.



*/
