/*
1. Zaman aşımı zamanlayıcısını durdurma fonksiyonu nedir?
A. stopTimer
B. clearTimeout							Cevap B
C. shutdownTimer
D. clearTimer

2. JavaScript'te kodu asenkron (eşzamansız) olarak çalıştırmak için 2 yerel fonksiyon nedir?
A. timeout - setTimeout
B. startInternal - setInterval
C. setTimeout - setInterval					Cevap C
D. interval - setInterval
***settimeout Belirli bir süre sonra yalnızca bir kez çalışacak bir işlevi planlamak için kullanılır.
***setInterval Belirli bir aralıkta tekrar tekrar çalışacak bir işlevi planlamak için kullanılır.

3. Aşağıdaki kodun çıktısı nedir?
let x = 0;
async function test() {
 x += await 2;
 console.log(x);
}
test();
x += 1;
console.log(x);
A. 2 3
B. 0 1
C. 1 2						Cevap C
D. 2 2

4. Hangi yöntem JSON verilerini bir JavaScript nesnesine dönüştürür?
A. JSON.fromString();
B. JSON.toObject()
C. JSON.stringify()
D. JSON.parse()					Cevap D

5. HTML script(komut dosyası) etiketinin "async" özelliği hakkında hangi ifade doğrudur?
A. Hem dahili hem de harici JavaScript kodu için kullanılabilir.
B. Yalnızca dahili JavaScript kodu için kullanılabilir.
C. Yalnızca bir söz veren dahili veya harici JavaScript kodu için kullanılabilir.
D. Yalnızca harici JavaScript kodu için kullanılabilir.				Cevap D

6. İlk Önce Hangi Sıra Yürütülür?
// Callback queue
setTimeout(() => console.log("timeout"), 0);
// Microtask queue
Promise.resolve().then(() => console.log("promise"));
A. Callback queue
B. Microtask queue					Cevap B
C. Öncelik yok
D. Hangisinin önce arandığına bağlıdır

7. Aşağıdaki asenkron(eşzamansız) fonksiyonu ve çıktısını göz önünde bulundurun. 
Konsolda ne görüntülenecek? f() işlevini mi çağırıyorsunuz?
async function f() {
 let result = 'first!';
 let promise = new Promise((resolve, reject) => {
 setTimeout(() => resolve('done!'), 1000);
 });
 result = await promise;
 console.log(result);
}
f();
A. first!
B. done!				Cevap B
C. JavaScript error
D. Something else


8. Çıktı ne olacak?
Promise.resolve('Success!')
 .then(data => {
 return data.toUpperCase()
 })
 .then(data => {
 console.log(data)
 })
A. print "Success!" and "SUCCESS!"
B. print "Success!"
C. print "SUCCESS!"				Cevap C
D. nothing prints

9. Asenkron(eşzamansız) JavaScript'te event loop (olay döngüsünün) rolü nedir?
A. Senkron yürütmeyi sağlar.
B. Eşzamansız görevleri ve geri aramaları yönetir.			Cevap B
C. Kullanıcı arayüzü olaylarını özel olarak ele alır.
D. Zaman uyumsuz/beklemede kullanımını engeller.

10. Aşağıdaki kod çalıştırıldığında konsola ne kaydedilecek?
async function example() {
 throw new Error('Something went wrong');
}
example().catch(error => console.error(error.message));
A. Çıkış yok, hata göz ardı edilir.
B. Kod, işlenmeyen bir promise reddi hatası verecektir.
C. tanımsız
D. Something went wrong					Cevap D










*/
