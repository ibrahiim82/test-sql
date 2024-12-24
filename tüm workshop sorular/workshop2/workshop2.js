/*
1. Fonksiyonlar nelerdir?
A. Javascript'te kullanabileceğiniz koddur
B. if ve else ifadelerini koyabileceğiniz yerdir
C. Bir dizi görevi yapmanızı sağlayan bir kod bloğudur
D. Belirli bir görevi yapmanızı sağlayan bir kod bloğudur                        Cevap D

2. Global değişken kapsamı nedir
A. Değişkene fonksiyonun içinde ve dışında herhangi bir yerden erişilebilir      Cevap A
B. Değişkene yalnızca fonksiyonun içinden erişilebilir
C. Değişkene yalnızca işlevin dışından erişilebilir
D. Yukarıdakilerin tümü
***Değişkenler (var,let,const)

3. Konsol çıktısı ne olacak?                                                                                                                 
let myCar = 'My car is yellow';
function aName(){
 let myCar = 'My car is red';
}
console.log(myCar);

A. Konsol "Arabam kırmızı" ifadesini döndürecektir
B. Konsol "Arabam tanımsız" ifadesini döndürecektir
C. Konsol "Arabam sarı" mesajını verecektir                          Cevap C
D. Konsol "tanımsız değişken" döndürecektir
***çünkü değişken fonksiyon içinde geçerlidir

4. Verilen sayının tek mi çift mi olduğunu veren bir fonksiyon yazın
let sayi = prompt("Lütfen bir sayı giriniz.");  
   if(sayi%2 === 0) {
       console.log("Girilen sayı çifttir.")
   } else if(sayi%2 === 1) {
       console.log("Girilen sayı tektir.")
   } else {
       console.log("Lütfen geçerli bir sayı giriniz!")
   }


*** function evenNumber(num) {
    if (number % 2 === 0) {
        return 'Çift';
    } else {
        return 'Tek';
    }
	console.log(evenNumber(4));
	console.log(evenNumber(5));


***TERNARY ile -->    function evenNumber (num)  {
                      return number % 2 === 0 ? 'Çift' : 'Tek';
		     }


5.Verilen sayının karesini alan bir fonksiyon yazın
function square (num) {
    return number * number;
}
console.log(square(4));
console.log(square(5));

*** function square (num) {
    return Math.pow(number, 2);
}
console.log(square(4));



6.Bir argüman ile parametre arasındaki fark nedir?
A. argüman, fonksiyon oluşturduğunuzda ayarlanır. Parametre, çağrıldığınızda girdiğiniz şeydir.
işlev
B. Parametre, fonksiyon oluşturduğunuzda ayarlanır. Argüman,fonksiyonu çağırdığınızda girdiğiniz şeydir.              Cevap B
işlev
C. Değişkeni oluşturduğunuzda argüman ayarlanır. Parametre, fonksiyon çağırdığınızda girdiğiniz şeydir.
D. Değişkeni oluşturduğunuzda parametre ayarlanır. Argüman, fonksiyon çağırdığınızda girdiğiniz şeydir.

***Parametreler, fonksiyonun tanımlanırken belirtilir
  	function add(a, b) {  // a ve b parametrelerdir
   	 return a + b;
 	 }
Argümanlar, fonksiyon çağrıldığında sağlanan verilerdir.
	console.log(add(5, 3));  // 5 ve 3 argümanlardır

7. Fonksiyon bildirimi ile fonksiyon ifadesi arasındaki fark nedir?
A. Hiçbir fark yok
B. Fonksiyon bildirimi hoisting yapılırken Fonksiyon ifadesi hoisting yapılmaz                                 Cevap B
C. Fonksiyon ifadesi hoisting yapılır, ancak Fonksiyon bildirimi hoisting yapılmaz
D. Fonksiyon bildirimi var anahtar sözcüğünü kullanırken, Fonksiyon ifadesi let anahtar sözcüğünü kullanır

8. JavaScript'teki bir fonksiyona birden fazla parametreyi nasıl iletebilirsiniz?
A. Birden fazla parametreye izin verilmez
B. Kıvırcık parantezleri kullanın
C. Köşeli parantez kullanın
D. Parametreleri virgülle ayırın                           		  Cevap D

9. Bir fonksiyondaki return ifadesinin amacı nedir?
A. Bir değişken bildirmek için
B. Fonksiyondan bir değer çıktısı almak için               		  Cevap B
C. Kod hakkında yorum yapmak için
D. Fonksiyonu çalıştırmak için

10. Bir fonksiyonda varsayılan parametreyi nasıl tanımlarsınız?
A. Varsayılan anahtar kelimeyi kullanarak
B. JavaScript varsayılan parametreleri desteklemiyor
C. Fonksiyon bildiriminde bir değer atayarak                              Cevap C
D. Tanımsız anahtar kelimeyi kullanarak

11. Bir dizenin uzunluğunu bulmak için hangi JavaScript dize yöntemi/özelliği kullanılır?
A. length()
B. getSize()
C. size()
D. length                                                                 Cevap D

12. JavaScript'te bir stringi küçük harfe dönüştürmek için hangi yöntem kullanılır?
A. toLowerCase()                                                                          Cevap A
B. toLower()
C. lowerCase()
D. convertLowerCase()

13. Bir alt dizeyi başka bir alt dizeyle değiştirmek için hangi JavaScript dize yöntemi kullanılır?
A. substitute()
B. replace()                                                             Cevap B
C. switch()
D. replaceAll()

14. Bir dizenin JavaScript'te belirli bir alt dize içerip içermediğini nasıl kontrol edebilirsiniz?
A. contains()
B. hasSubstring()
C. has()
D. includes()                                           Cevap D

***büyük küçük harf duyarlıdır
	let text = "JavaScript is awesome!";
console.log(text.includes("awesome"));  // Çıktı: true
console.log(text.includes("Java"));     // Çıktı: true
console.log(text.includes("java"));     // Çıktı: false

15. JavaScript'teki sınırlayıcıyı temel alarak bir dizeyi alt dizeler dizisine bölmek için hangi yöntem kullanılır?
A. divide()
B. separate()
C. split()                                              			Cevap C
D. slice()

16. JavaScript'te bir dizenin bir kısmını çıkarmak için hangi yöntem kullanılır?
A. extract()
B. substring()              							Cevap B veya C
C. slice()
D. cut()

17. JavaScript'te bir dizeyi birden çok kez nasıl tekrarlayabilirsiniz?
A. repeat() 									Cevap A
B. duplicate()
C. replicate()
D. copy()

18. Bir stringin her iki ucundaki boşlukları kaldırmak için hangi yöntem kullanılır?
A. trim()                                                                              Cevap A
B. removeWhitespace()
C. strip()
D. trimStart()
***trimStart() metodu yalnızca bir stringin başındaki boşlukları kaldırır

19. StartWith() yöntemi bir dizede neyi kontrol eder?
A. Dize belirli bir alt dizeyle bitiyorsa
B. Dize belirtilen bir alt dizeyi içeriyorsa (includes)
C. Dize belirli bir alt dizeyle başlıyorsa					Cevap C
D. Dize boşsa

20. Bir dizgenin tüm elemanlarını sırayla döndüren bir fonksiyon yazın.
function printStringElements(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

printStringElements("Hello");

21. Bir CSS animasyonunun süresini tanımlamak için hangi özelliği kullanıyorsunuz?
A. animation-duration (animasyon süresi)                                           Cevap A
B. animation-length (animasyon uzunluğu)
C. animation-time  (animasyon zamanı)
D. animation-span (animasyon aralığı)

22. @keyframes kuralında tanımlanan animasyonun adını belirtmek için hangi CSS özelliği kullanılır?
A. keyframes-name  (anahtar karelerin adı)
B. animation-name  (animasyon adı)                                                 Cevap B
C. animation-type  (animasyon türü)
D. animation-style  (animasyon tarz)

23. CSS animasyonlarında Animation-iteration-count özelliği ne işe yarar?
A. Animasyonun hızını değiştirir                  (timing-function)
B. Animasyonun yönünü belirtir                    (direction)
C. Animasyon başlamadan önceki gecikmeyi ayarlar  (delay)
D. Bir animasyonun kaç kez çalıştırılması gerektiğini tanımlar                     Cevap D

24. Animation-direction özelliğinin hangi değeri animasyonun her döngüde yönünü tersine çevirir?
A. reverse
B. alternate									   Cevap B
C. alternate-reverse
D. backward

25. Bir animasyonun, animasyon tamamlandığında son ana kare tarafından belirlenen stili korumasını istiyorsanız
tamamlandığında hangi animasyon doldurma modu değerini kullanmalısınız?  (Animation fill mode)
A. forwards    												Cevap A
B. backwards
C. both
D. none






1.JavaScript dizesindeki tek tek karakterlere nasıl erişirsiniz?
2. JavaScript'te dizeleri işlemek için mevcut yöntemler nelerdir?
3.javascript callback function nedir

5. JavaScript fonksiyonlarındaki 'argümanlar' nesnesi nedir?


*/
