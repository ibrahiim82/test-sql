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

    runEngine(){
        return 'motor çalıştı'
    }
}

const PascalCaseInstanceName = new Car()
console.log(PascalCaseInstanceName);
console.log(PascalCaseInstanceName.isRunning);
console.log(PascalCaseInstanceName.runEngine());

//*class'tan türetilen obje içindeki methodlar default olarak gizlidir







/* ------------------------------------------------------- */
/* ------------------------------------------------------- */