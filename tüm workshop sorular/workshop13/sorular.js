/*
1. Aşağıdaki kod bloğunun çıktısı nedir?
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
    ilk satır: 0.1 + 0.2 = 0.30000000000000004
    ikinci satır: false


2. Aşağıdaki kod bloğunun çıktısı nedir?
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
ilk satır:
    Öncelikle 1 < 2 işlemi yapılır. Bu ifade doğru (true) olduğu için, true değeri elde edilir.    1 < 2  // true

    Sonrasında, elde edilen true değeri (boolean) ikinci karşılaştırmada yer alır. JavaScript'te true değeri sayısal olarak 1'e dönüştürülür. Dolayısıyla, bu ifade aslında şu hale gelir:  1 < 3  // true
1 < 2 < 3 ifadesi doğru (true) olarak değerlendirilir.

ikinci satır:
    İlk olarak 3 > 2 karşılaştırması yapılır. Bu ifade doğru (true) olduğu için, true değeri elde edilir.   3 > 2  // true

    Daha sonra, elde edilen true değeri (boolean) ikinci karşılaştırmada yer alır. Yine, true sayısal olarak 1'e dönüştürülür. Dolayısıyla, bu ifade şu şekilde değerlendirilir:    1 > 1  // false
sonuç: false


3. Pozitif sayıların toplamını bulan programı yazınız. Ancak kullanıcı negatif bir sayı girerse
Girilen negatif sayı toplama eklenmezse döngü sona erer.

let toplam = 0;

while (true) {
    let sayi = parseFloat(prompt("Bir sayı girin (negatif bir sayı girerseniz, toplama eklenmez ve döngü sona erer):"));

    // Eğer sayı negatifse döngüden çık
    if (sayi < 0) {
        break;
    }

    // Pozitifse toplamı güncelle
    toplam += sayi;
}
console.log("Toplam:", toplam);


4. Aşağıdaki kod bloğunun çıktısı nedir?
null == undefined
null === undefined
isNaN(2 + null)
isNaN(2 + undefined)
null ? console.log("true") : console.log("false") 

true
false
false
true
false


5. Aşağıdaki kod bloğunun çıktısı nedir?
var hash = "";
var count = 1;
var n = 3;
for (var x = 1; x <= 7; x++) {
 while (hash.length != count)
 hash += "#";
 hash += "\n";
 count += n;
 n++;
}
console.log(hash);



6. Aşağıdaki kod bloğunun çıktısı nedir?
let firstName = null
let lastName = null
let nickName = "coderBond"
console.log(firstName ?? lastName ?? nickName ?? "Anonymous")



7. Aşağıdaki kod bloğunun çıktısı nedir?
function onZoom(x){
 console.log("Zoom active for", x)
02-FS-Backend-WS-2-.md 2024-10-14
4 / 8
}
function startClass(x,y,z){
 console.log(" Class starts at", x);
 y(z);
}
startClass("20:00",onZoom,"FS");



8. Aşağıdaki kod bloğunun çıktısı nedir?
console.log
((function f(n){return ((n > 1) ? n * f(n-1) : n)})(5));



9. Aşağıdaki kod bloğunun çıktısı nedir?
(function () {
 try {
 throw new Error();
 } catch (x) {
 var x = 1, y = 2;
 console.log(x);
 }
 console.log(x);
 console.log(y);
})();



10. Aşağıdaki kod bloğunun çıktısı nedir?
let a = [10, 20, 30];
a[10] = 100;
console.log(a[6]);
let b = [undefined];
b[2] = 1;
console.log(b);
console.log(b.map(e => 99)); 



11. Aşağıdaki kod bloğunun çıktısı nedir?
function orderPizza(type, ingredients, callback) {
 console.log('Pizza ordered...');
 console.log('Pizza is for preparation');
 setTimeout(function () {
 let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
$10`;
 callback(msg);
 }, 3000);
}
orderPizza('Vegeterian', 'Cheese', function(message){
 console.log(message);
});



12. Aşağıdaki kod bloğunun çıktısı nedir?
class Employee{
 constructor(id,name){
 this.id=id;
 this.name=name;
 }
 detail(){
 console.log(this.id+" "+this.name)
 }
 }

let e1=new Employee(10,"Qadir Adamson");
let e2=new Employee("Victor Hug");
let e3=new Employee(12)
e1.detail();
e2.detail();
e3.detail();



13. Aşağıdaki kod bloğunun çıktısı nedir?
class Animal {
 constructor(name, weight) {
 this.name = name;
 this.weight = weight;
 }
 eat() {
 return `${this.name} is eating`;
 }
 sound(){
 return `${this.name} is says`;
 }
}
class Cat extends Animal {
 constructor(name, weight) {
 super(name, weight);
 }
 sound(){
 return `${super.sound()} Meow!`;
 }
}
let felix=new Cat("felix",5)
console.log(felix.sound())





*/