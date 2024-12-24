/*
1. JavaScript'teki async anahtar sözcüğünün amacı nedir?
A. (asenkron) eşzamansız bir fonksiyonu tanımlamak.				Cevap A
B. (senkron) eşzamanlı olarak çalışan bir fonksiyonu belirtmek için.
C. Bir jeneratör işlevi oluşturmak.
D. callback fonksiyonu belirtmek için.

2. Asenkron bir fonksiyonda, await anahtar sözcüğü ne işe yarar?
A. İşlevi zorla durdurmak için.
B. Bir promise çözülene kadar işlevin yürütülmesini duraklatmak.	Cevap B
C. Bir promise'i hatalı olarak reddeder.
D. Asenkron fonksiyonu iptal eder.

3. Aşağıdakilerden hangisi JavaScript'te async/await kullanımı için geçerli bir kullanım durumudur?
A. Bir dizi sayıyı yinelemek.
B. Sabitlerin bildirilmesi.(const)
C. Bir switch ifadesinin tanımlanması.
D. Bir API'den veri alma.						Cevap D

4. JavaScript'teki Fetch API'nin amacı nedir?
A. Bir fonksiyondan dizi oluşturmak için.
B. DOM'u değiştirmek için.
C. HTTP isteklerini göndermek ve yanıtları almak.			Cevap C
D. JavaScript işlevlerini tanımlamak.

5. Fetch API'yi kullanırken, bir yanıtı işlemek ve JSON verilerini çıkarmak için hangi yöntem kullanılır?
A. .text()
B. .json()						Cevap B
C. .response()
D. .xml()

6. async/await hata işlemeyle ilgili hangi ifade doğrudur?
A. Hatalar otomatik olarak async/await tarafından işlenir.
B. Hataları işlemek için .then() ve .catch() yöntemlerini kullanın.
C. async/await hatalar yakalanamaz.
D. Hataları yakalamak için try-catch bloklarını kullanın.			Cevap D

7. Geleneksel callback göre async/await kullanmanın birincil faydası nedir?
A. Daha basit ve daha okunabilir kod						Cevap A
B. Hataların daha kolay ele alınması
C. Daha küçük paket boyutu
D. Geliştirilmiş performans

8. setInterval() işlevi JavaScript'te ne işe yarar?
A. JavaScript kodunun yürütülmesini durdurur. (clearInterval())
B. Bir fonksiyonun yürütülmesini belirli bir süre geciktirir. (setTimeout())
C. Bir fonksiyonu belirli bir zaman aralığında tekrar tekrar çalıştırır.		Cevap C
D. Bir fonksiyonun yalnızca bir kez çalışması için zaman aşımı ayarlar. (setTimeout())

9. setInterval() ile zamanlanmış bir fonksiyonun yürütülmesini nasıl durdurursunuz?
A. Fonksiyonda return ifadesinin kullanılması.
B. ClearInterval() işlevini aralık kimliğiyle çağırarak.				Cevap B
C. Aralık süresini 0'a ayarlayarak.
D. break deyimini kullanarak.

10. clearInterval() işlevini kullanırken gerekli argüman nedir?
A. Temizlenecek fonksiyon.wo
B. Zaman aralığı.
C. DOM öğesi
D. setInterval() tarafından döndürülen aralık kimliği.			Cevap D

11. Axios kullanmanın Fetch API'ye göre birincil avantajı nedir?
A. Basitlik ve kullanım kolaylığı.					Cevap A
B. Daha geniş tarayıcı desteği.
C. Daha küçük paket boyutu.
D. Daha iyi performans.

12. 'Sonuçlar gösteriliyor' konsola ne zaman kaydedilecek?

	let modal = document.querySelector('#result');
	setTimeout(function () {
	 modal.classList.remove('hidden');
	}, 10000);
	console.log('Results shown');

A. 10 saniye sonra
B. hemen								Cevap B
C. HTTP isteğinden sonuçlar alındıktan sonra
D. 10000 saniye sonra

13. Kodunuzu neden asenkron yapmayı seçmelisiniz?
A. kodunuzda daha alt düzeydeki görevlerin, daha önceki görevler tamamlanana kadar başlatılmamasını sağlamak için
B. kodunuzu daha hızlı hale getirmek için
C. çağrı yığınının LIFO (Son Giren İlk Çıkar) yapısını korumasını sağlamak
D. Biraz zaman alabilecek görevleri, sonraki görevlerin hemen yürütülmesini engellemeden başlatmak için			Cevap D

14. Mevcut bir kaynağın içeriğini istemek için kullanılan HTTP fiili nedir?
A. DELETE
B. PATCH
C. GET									Cevap C
D. CALL


15. Fetch() tarafından döndürülen başarılı yanıtı işlemek için hangi yöntem çağrısı zincirlenir?
A. done()
B. catch()
C. then()							Cevap C
D. finally()
***catch() yöntemi, Promise'ler ile hata işleme için kullanılır. fetch() işlevinin hata durumlarını yakalamak ve işlemek için kullanılır. 
Başarılı yanıtları işlemek için catch() değil, then() kullanılır.
***finally() yöntemi, Promise işlemi tamamlandıktan sonra (başarıyla veya hata ile) her durumda çalıştırılacak kodu belirlemek için kullanılır. 
Yani, finally() yöntemi genellikle hem başarılı hem de başarısız durumları işlemek için kullanılan bir son aşamadır, 
ancak başarılı yanıtları işlemek için then() kullanılır.

16. HTML <script> etiketinin defer niteliğine hangi ifade uygulanabilir?
A. defer, komut dosyası arka planda yüklenirken tarayıcının sayfayı işlemeye devam etmesine olanak tanır.		Cevap A
B. defer, betiğin yedek içerik dağıtım ağından (CDN) yüklenmesine neden olur.
C. defer, komut dosyası tamamen yüklenene kadar tarayıcının etiketin altındaki HTML'yi işlemesini engeller.
D. defer lazy betiği yükler ve yalnızca sayfadaki başka bir betik tarafından çağrıldığında indirilmesine neden olur.

17. Konsola ne kaydedilecek?

	console.log('I');
	setTimeout(() => {
	 console.log('love');
	}, 0);
	console.log('Javascript!');

A.  	I				Cevap A
	Javascript!
	love

B.	love
	I
	Javascript!

C. Çıkış, kodun her yürütülmesinde değişebilir ve belirlenemez.

D.	I
	love
	Javascript!


1. Geri aramaların kullanımı bağlamında 'geri arama cehennemi' nedir ve dezavantajları nelerdir?

2. Asenkron programlamanın ne olduğunu açıklayabilir misiniz?

3. async/await performans ve ölçeklenebilirliğe nasıl yardımcı olur?
Cevap :
Async/await, uygulamanızın başka işler yapmasına izin vererek performansı ve ölçeklenebilirliği artırmaya yardımcı olabilir.
bir görevin tamamlanmasını bekliyor. Bu, darboğazları önlemenize ve uygulamanızın yanıt vermesini sağlamanıza yardımcı olabilir.
Ek olarak, eşzamansız/beklemede kullanmak, yazılması gereken toplam kod miktarının azaltılmasına yardımcı olabilir.
uygulamanın bakımı daha kolaydır.

4. JavaScript'teki Promise yapıcısının amacı nedir?


*/
