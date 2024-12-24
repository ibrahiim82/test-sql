/*
1. React kütüphanesinden yalnızca componenti içe aktarmak istiyorsanız, hangi sözdizimini kullanıyorsunuz?

A. import React.Component from 'react'
B. import [ Component ] from 'react'
C. import Component from 'react'
D. import { Component } from 'react'                Cevap D

Cevap: D



2. Aşağıdaki kod göz önüne alındığında, bu React öğesi neye benziyor?

React.createElement('h1', null, "What's happening?");

A. <h1 props={null}>What's happening?</h1>
B. <h1>What's happening?</h1>                       Cevap B
C. <h1 id="component">What's happening?</h1>
D. <h1 id="element">What's happening?</h1>

Cevap: B



3. useLayoutEffect'i ne zaman kullanıyorsunuz?

A. tüm cihazlar için optimize etmek için 
B. güncellemeyi tamamlamak için                     Cevap B
C. ekran düzenini değiştirmek için 
D. efekt çalışmadan önce tarayıcının boyaması gerektiğinde

Cevap: B



4. Dish componente gönderilen özellikleri nasıl destruct edersiniz?

function Dish(props) {
 return (
 <h1>
 {props.name} {props.cookingTime}
 </h1>
 );
}

A. function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }
B. function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }                         Cevap B
C. function Dish(props) { return <h1>{name} {cookingTime}</h1>; }
D. function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }

Cevap: B



5. Props değerlerini mümkün olduğunda bir componentin state'ine kopyalamaktan kaçınmak neden önemlidir?

A. çünkü asla durumu değiştirmemelisiniz
B. getDerivedStateFromProps() güvenli olmayan bir yöntem olduğundan
C. Bir componentin props'daki değişikliklere yanıt olarak güncellenmesine izin vermek istediğiniz için          Cevap C
D. verilerin ebeveyne geri akmasına izin vermek istediğiniz için

Cevap: C



6. Children Prop nedir?

A. state'e (duruma) child component ekleyen bir property(özellik)
B. bir diziyi property olarak ayarlamanıza izin veren bir property
C. child elementlere(alt öğelere) veri aktarmanıza izin veren bir property
D. jsx'in hem açılış etiketi hem de kapanış etiketi içeren componentlerde 
üzerinde oluşturduğu ve içeriğine atıfta bulunan özel bir property.          Cevap D

Cevap: D



7. fetch() fonksiyonu hangi kütüphaneden gelir?

A. FetchJS
B. ReactDOM
C. Kütüphane yok. fetch() çoğu tarayıcı tarafından desteklenir              Cevap C
D. React

Cevap: C



8. React.js bağlamında Axios nedir?

A. Bir stil kütüphanesi
B. Bir state(durum) yönetim aracı
C. HTTP isteklerini yapmak için bir JavaScript kitaplığı                    Cevap C
D. Yönlendirme kitaplığı

Cevap: C



9. Axios'u bir React projesine nasıl kurarsınız?

A. npm install react-axios
B. npm install axios                                 Cevap B
C. npm install react-http
D. npm install http-axios-react

Cevap: B



10. Bir Axios isteğindeki hataları nasıl ele alıyorsunuz?

A. error method kullanma
B. fail method kullanma
C. handleError method kullanma
D. catch method kullanma                             Cevap D

Cevap: D



11. React'te bir Axios POST isteğindeki parametreleri nasıl iletebilirsiniz?

A. data property kullanma                                             Cevap A
B. params property kullanma
C. body property kullanma
D. payload property kullanma

Cevap: A



12. React'te, functional componentlerdeki Axios isteklerini yönetmek için yaygın bir yaklaşım nedir?

A. useEffect hook kullanma                                           Cevap A
B. componentDidMount lifecycle yöntemini kullanma
C. Axios çağrılarının doğrudan component body'e gömülmesi
D. Axios istekleri için ayrı bir sınıf oluşturma

Cevap: A



13. React'te geleneksel fetch API'sine göre Axios kullanmanın birincil avantajı nedir?

A. Axios daha basit bir sözdizimi sağlar
B. Axios, HTTP istekleri oluşturmada daha hızlıdır
C. Axios, önleyiciler ve iptal tokenleri(belirteçleri) için gömme(yerleşik) desteğine sahiptir                  Cevap C
D. Axios, React ekibi tarafından önerilen resmi HTTP kütüphanesidir

Cevap: C







1. Özel Hooklar Nelerdir?

Javascript'te adı ‘use’ ile başlayan ve diğer hookları çağıran bir işlevdir.

Neredeyse tüm durumlarda, özel hookların, render desteklerini ve HoC'leri (Yüksek Dereceli componentleri) değiştirmek ve gereken iç içe geçme miktarını azaltmak için yeterli olduğu düşünülmektedir. Özel hooklar, Render Props ve HoC'lerle birlikte gelebilecek birden fazla soyutlama katmanından veya sarmalayıcı cehenneminden kaçınmanıza olanak tanır.

Özel Hookların dezavantajı, sınıfların içinde kullanılamamasıdır. Bir arrow function kullanırken 'this'i yapıcının içine bağlamak gereksizdir. Bu, React callback'lerinde 'this' kullanımından kaynaklanan hataları önler.




2. React Hooks kullanırken uyulması gereken kurallar nelerdir?

Hooks ile kod yazarken uyulması gereken 2 kural vardır: 
React Hooks sadece en üst seviyede çağrılmalıdır. Bunların nested(iç içe geçmiş) fonksiyonlar, döngüler veya koşullar içinde çağrılmasına izin verilmez.

Hook'ların yalnızca React Fonksiyon Componentlerinden çağrılmasına izin verilir




3. Axios nedir ve React uygulamalarında HTTP istekleri yapmayı nasıl kolaylaştırır?

Axios, hem tarayıcılarda hem de Node.js HTTP istekleri yapmayı basitleştiren üçüncü taraf bir JavaScript kütüphanesidir. React'te Axios kullanım kolaylığı ve otomatik JSON ayrıştırma, istek/yanıt durdurma ve fetch function'a kıyasla daha iyi error handling(hata işleme) nedeniyle sıklıkla tercih edilir.




4. Bir React componentinde fetch ile asenkron işlemleri nasıl ele alıyorsunuz?

Fetch'i' genellikle componentDidMount lifecycle(yaşam döngüsü) yöntemi içinde veya functional componentlerde useEffect hook ile kullanırsınız. Daha sonra yanıtı .then() ve .catch() kullanarak veya async/await ile asenkron(eşzamansız) olarak işleyebilirsiniz.

functional compenentte useEffect ile fetch kullanma örneği:

import { useEffect } from 'react';
function MyFunctionalComponent() {
 useEffect(() => {
 fetch('https://api.example.com/data')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error('Error:', error));
 }, []);
 // ... rest of the component
}


*/