//! 1
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

//! 2
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

//! 3
// let sayi = +prompt("sayi giriniz");
// let sum = 0;
// while (sayi >= 0) {
//     sum += sayi;
//   sayi = +prompt("sayi giriniz");
// }
// console.log(sum);

//! 4
// var hash = "";
// var count = 1;
// var n = 3;
// for (var x = 1; x <= 7; x++) {
//  while (hash.length != count) hash += "#";
//  hash += "\n";
//  count += n;
//  n++;
// }
// console.log(hash);

//! var
/*
{
  var a = 3;
}
console.log(a);

//* SCOPE - blok alanı

{
  const number = 6; //!local alanda
  console.log("NUMBER =", number);
}
console.log(number); //! global alanda undefined

var i = 38; //'global değişken
{
  i = 99; //'global değişkene localde değer aktardım
}
console.log(i); //! çıktı artık 99

{
  var varScope = "feyza"; //? var ile bir scope icerinde degisken tanımlandiginda
  //? bu degisken scope'a bagli olmaz (Global)
}
console.log(varScope); //! feyza

{
  let letScope = "tuba";
}
 console.log(letScope) //!app.js:103 Uncaught ReferenceError: letScope is not defined

var sayi1 = 1500;
let sayi2 = 800;
console.log(sayi2); //! 800 çıktısını verir
{
  var sayi1 = 500; //? hoistingden dolayi ayni global degiskene deger aktarır.
  let sayi2 = 400; //? yeni local sayi2
  console.log(sayi2);
}
console.log(sayi1, sayi2); //? --> global sayi1 ve sayi2 yi yazdirir

//! gelmeden önce mantıksal operatör ve condition bakabilirsin.


*/

//! 6
// let firstName = null
// let lastName = null
// let nickName = "coderBond"
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous")
//* coderBond

//! 7

// function onZoom(x){
//     console.log("Zoom active for", x)
// }

// function startClass(x,y,z){
//  console.log(" Class starts at", x);
//  y(z);
// }

// startClass("20:00",onZoom,"FS");

//! 8

// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(5)
// );
//120

//! 9
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1, y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

//! 10
// let a = [10, 20, 30];
// a[10] = 100;
// console.log(a[6]);

// let b = [undefined];
// b[2] = 1;
// console.log(b);
// console.log(b.map(e => 99));

// console.log(typeof b[1]);

//! 11

// function orderPizza(type, ingredients, callback) {
//   console.log("Pizza ordered...");
//   console.log("Pizza is for preparation");

//   setTimeout(function () {
//     let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
//    $10`;
//     callback(msg);
//   }, 3000);
// }

// orderPizza("Vegeterian", "Cheese", function (message) {
//   console.log(message);
// });

//! 12
// class Employee {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//   detail() {
//     console.log(this.id + " " + this.name);
//   }
// }
// let e1 = new Employee(10, "Qadir Adamson");
// let e2 = new Employee("Victor Hug");
// let e3 = new Employee(12);
// e1.detail();
// e2.detail();
// e3.detail();

//! 13

// class Animal {
//   constructor(name, weight) {
//     this.name = name;
//     this.weight = weight;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   sound() {
//     return `${this.name} is says`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, weight) {
//     super(name, weight);
//   }
//   sound() {
//     return `${super.sound()} Meow!`;
//   }
// }

// let felix = new Cat("felix", 5);
// console.log(felix.sound());
