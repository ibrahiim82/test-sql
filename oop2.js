"use strict"

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.


// Class Declaration:
// class PascalCaseClassName {
//     ...
// }

// Class Expression:
// const PascalCaseClassName = class {
//     propertyName = 'value' //property,attribute,field
//     undefinedProperty //sadece tanımlama yapabiliriz.(değeri undefinde olur)

//     methodName1(){
//         return 'method'
//     }
// }
//tercih edilen yöntem class declarationdur
//class; bir obje değildir obje türeten şablondur


/* ------------------------------------------------------- */

// INSTANCE = Bir class'tan üretilen objedir
//* constructor functionun class hali

class Car {
    isRunning= false

    //*class içine gönderilen parametreleri alabilmek için 'constructor' methodu kullanılır
    constructor(brand,model,year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine(param1){
        console.log(param1);
        return 'motor çalıştı'
    }
}

// const PascalCaseInstanceName = new Car()
// console.log(PascalCaseInstanceName);
// console.log(PascalCaseInstanceName.isRunning);
// console.log(PascalCaseInstanceName.runEngine('test-value'));

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford);
const Mercedes = new Car('Mercedes', 'CLK200', 2010)
console.log(Mercedes);
//*class ismiyle gönderilen parametreleri alan method constructor methodudur.

console.log(Ford.isRunning);
Ford.isRunning = true
console.log(Ford.isRunning);

//*class'tan türetilen obje içindeki methodlar default olarak gizlidir







/* ------------------------------------------------------- */
/* ------------------------------------------------------- */