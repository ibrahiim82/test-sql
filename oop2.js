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
//class; bir obje değildir obje türeten şablondur yani classlar obje türetmek için kullanılan şablondur


/* ------------------------------------------------------- *

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
        this.isRunning = true
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

// console.log(Ford.isRunning);
// Ford.isRunning = true
// console.log(Ford.isRunning);
// console.log(Mercedes.isRunning);



//*class'tan türetilen obje içindeki methodlar default olarak gizlidir

// console.log(Ford.isRunning);
// console.log(Ford.runEngine());
// console.log(Ford.isRunning);



/* ------------------------------------------------------- */

// INHERITANCE: Miras almak. başka bir class'ın tüm özellik/methodlarını devralma. (parent-chid ilikisi vardır)
// SUPER: parent (üst) class temsil eder - THIS: chlid(alt) class temsil eder.

class Vehicle {
    vehicleIsActive = false

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }
}

class Car extends Vehicle { //Inheritance

    isRunning= false

    constructor(brand,model,year, vehicleType){
        //super() parametresi parent class'ı temsil eder,her zaman üstte olmalu
        // super('Car')
        super(vehicleType) //super üst class'ı temsil eder yani vehicle classını temsil eder.
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine(param1){
        this.isRunning = true
        return 'motor çalıştı'
    }
}

const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
console.log(Ford);


/* ------------------------------------------------------- */