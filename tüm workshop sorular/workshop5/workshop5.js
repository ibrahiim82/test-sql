/*
1. DOM, bir HTML belgesini __________ olarak sunar.
A. Karma tablo yapısı
B. Dinamik yapı
C. Ağaç yapısı                                      Cevap C
D. Bunların hepsi

2. Değiştirmek istediğiniz öğeyi _________ ile bulabilirsiniz.
A. getElementById()
B. getElementsByTagName()
C. getElementsByClassName()
D. Bunların hepsi				    Cevap D

3. Document nesnesi Hangi nesnenin bir parçasıdır?
A. Tree
B. Window					    Cevap B
C. System
D. Anchor
***Window nesnesi hiyerarşinin en üstündeki nesnedir. Document, Screen, Location, History ve Navigator 
nesneleri Window nesnesinin altında/içerisinde yer alır.

4. Bir DOM Node'unu diğerine eklemek için hangi yöntemi kullanıyorsunuz?
A. JattachNode()
B. getNode()
C. querySelector()
D. appendChild()					    					Cevap D
*** querySelector yöntemi, belirtilen CSS seçicisine uyan ilk öğeyi seçmek için kullanılır. 
Örneğin, document.querySelector('.myClass') ifadesi, .myClass sınıfına sahip ilk öğeyi döndürür. 
Ancak bu yöntem, düğüm eklemek için değil, var olan bir öğeyi seçmek için kullanılır.

5. 'cw'nin bir eleman düğümü olduğunu varsayalım.'cw'nin ana düğümü seçmek için kullanılabilecek aşağıdaki ifadeyi seçin.
A. cw.getParent()
B. cw.parentContainer
C. cw.parentElement					Cevap C
D. cw.nodes()

6. Aşağıdaki elemandan 'p1' sınıfı nasıl kaldırılır?
A. pElement.classList.remove("p1")			Cevap A
B. pElement.className = ""
C. pElement.removeAttribute('class')
D. Yukarıdakilerin hepsi
*** B şıkkı tüm sınıfları kaldırır.  C şıkkı tüm sınıf özniteliğini kaldırır.

7. Aşağıda gösterilen event listener bir form düğmesi için yazdınız, ancak düğmeye her tıkladığınızda,
sayfa yeniden yüklenir. Hangi ifade bunu engelleyebilir?
A. e.blockReload();
B. button.preventDefault();
C. button.blockReload();
D. e.preventDefault();					Cevap D

8. Bu kodda yanlış olan ne?
C. greet fonksiyonunun bir anahtar/değer çifti olarak tanımlanması gerekir.
B. JavaScript'te sondaki virgüllere izin verilmez.
C. Fonksiyonlar nesnelerin özellikleri olarak bildirilemez
D. Hiçbir şey, hata yok.					Cevap D

9. Web geliştirmede DOM'un temel amacı nedir?
A. Bir HTML belgesinin yapısını tanımlamak için
B. Web sayfalarına CSS ile stil vermek
C. Bir web sayfasındaki HTML öğeleriyle etkileşimde bulunmak ve bunları değiştirmek     Cevap C
D. Sunucu tarafı komut dosyaları oluşturmak için

10. Tek bir öğeye kaç tane event listener ekleyebilirsiniz?
A.İki
B.İstediğiniz kadar					Cevap B
C. Yalnızca bir tane
D. olay dinleyici sayısı < Dom öğeleri sayısı

11. Doğru Javascript etkinliğini seçin
A. onmouseout  (fare çıkışında)				Cevap A
B. anmouseout  (fare çıkışı)
C. inmouseout  (fare içi)
D. enmouseout  (fare çıkışı)

12. DOM'da JavaScript kullanarak yeni bir HTML öğesi oluşturmak için hangi yöntem kullanılır?
A. newElement
B. createNode
C. createElement					Cevap C
D. addNode

13. JavaScript'te innerHTML özelliği ne işe yarar?
A. Bir öğenin CSS stillerini alır.			(style)
B. Bir öğenin HTML içeriğini alır veya ayarlar.					Cevap B
C. Bir öğenin etiket adını döndürür.			(tagName)
D. Bir elementin belirli bir sınıfa sahip olup olmadığını kontrol eder.  (classList.contains())

14. JavaScript'te event propagation (olay yayılımı) nedir?
A. Aynı öğeye birden fazla olayın kaydedilmesi için bir yöntem
B. Bir olayın meydana gelmesini durdurma eylemi
C. Olaylar arasındaki süreyi ölçmenin bir yolu
D. Olayların hedef öğeden belgeye aktarıldığı süreç.		Cevap D

15. JavaScript event handling (olay işlemede) event.target özelliğinin amacı nedir?
A. Etkinliği tetikleyen HTML öğesini döndürür.					    Cevap A
B. Geçerli saati döndürür.	 	(date)
C. Hedefin ana öğesini döndürür.	(event.currentTarget)
D. Kullanıcının ziyaret ettiği önceki URL'yi döndürür.	 (document.referrer)

16. Sass bir _____.
A. Scripting language (Komut dosyası dili)
B. Markup language (Biçimlendirme dili)
C. CSS pre-processor (CSS ön işlemcisi)		Cevap C
D. Programming Language (Programlama Dili)

17. Sass, ______ anlamına gelir.
A. Semantically Awesome Stylesheet
B. Syntactically Awesome Stylesheet		Cevap B
C. Simple Awesome Stylesheet
D. Syntax-based Awesome Stylesheet

18. SASS kullanmanın faydaları nelerdir?
A. CSS için kendi sözdizimini sağlayan bir ön işleme dilidir.
B. CSS'nin tüm özelliklerini içeren ve açık kaynak kodlu bir ön işlemci olan CSS'nin bir üst kümesidir.
C. Daha kararlı ve güçlü CSS uzantısı ve stil belgeleri daha net ve yapısaldır
D. Yukarıdakilerin hepsi							Cevap D

19. SASS hangi yılda tanıtıldı?
A.2005
B.2006				Cevap B
C.2008
D.2009


20. Aşağıdaki direktiflerden hangisi SassScript ifade değerini ölümcül hata olarak görüntüler?
A. @error					Cevap A
B. @warn
C. @at-root
D. Yukarıdakilerin hiçbiri
***A şıkkı Sass'te bir hata durumunda işlem yapar ve belirtilen hata mesajını döndürerek işlem durur.
***B şıkkı bir uyarı mesajı görüntüler ama derleme sürecini durdurmaz.
***C şıkkı bir CSS kuralını ya da stil kuralını kök (root) seviyesine taşımanıza olanak sağlar 
ve bu nedenle hata ile ilgili değildir.




1. JavaScript events (olayları) nedir?

Kullanıcı Etkileşim Olayları:
	click: Bir öğeye tıklandığında tetiklenir.
	keydown: Bir tuşa basıldığında tetiklenir.
	mouseover: Fare işaretçisi bir öğenin üzerine geldiğinde tetiklenir

Form Olayları:
	submit: Bir form gönderildiğinde tetiklenir.
	change: Bir form öğesinin değeri değiştiğinde tetiklenir.

Window (Pencere) Olayları:

	load: Sayfa ve tüm kaynaklar yüklendiğinde tetiklenir.
	resize: Pencere boyutu değiştirildiğinde tetiklenir.

Focus and Blur Olayları:
	focus: Bir öğe odaklandığında tetiklenir.
	blur: Bir öğe odaktan çıktığında tetiklenir

Fare Olayları:

	mousemove: Fare bir öğe üzerinde hareket ederken tetiklenir.
	mouseout: Fare işaretçisi bir öğeden ayrıldığında tetiklenir.


2. Event Handler (Olay işleyicisi) olarak arrow function kullanmak mümkün mü? Evet ise, o zaman nasıl?

3. DOM'daki öğelerde Seçime ilişkin querySelector ve querySelectorAll yöntemleri arasındaki farkı açıklayın.
querySelectorAll() metodu, QuerySelector () metodu ile aynı mantık ile çalışır tek farkı eşleşen 
ilk elamanı döndürmek yerine eşleşen tüm elemanları bir NodeList objesi olarak döndürmesidir


4. DOM manipülasyonunda getAttribute ve setAttribute yöntemlerinin amacı nedir?
getAttribute() metodu ile bir Html öğesinin bir niteliğinin değerini alabiliriz.
setAttribute() metodu ile bir Html öğesine yeni bir nitelik ekleyebilir ve bu niteliğe istediğimiz değeri verebiliriz.


5. event.preventDefault() yönteminin amacı nedir ve onu ne zaman kullanırsınız?
event.preventDefault() yöntemi, bir olayın varsayılan davranışını engellemek için kullanılır. 
Bu yöntem, genellikle tarayıcıların otomatik olarak gerçekleştirdiği işlemleri durdurmak için tercih edilir. 





*/
