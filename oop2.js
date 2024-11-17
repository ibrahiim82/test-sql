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



/* ------------------------------------------------------- *

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
// const Ford = new Car('Ford', 'Mustang', 1967,)
// console.log(Ford);
// const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
// console.log(Ford);

class Accessory extends Car {
    constructor(accessoryName,brand,model,year) { 
        // iki classı birbirine bağlamışsak (extend yapmışsak) contructor methodunda super kullanmalıyız
        super(brand, model, year)
        this.accessoryName = accessoryName
    }
}

const FordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967)
console.log(FordClimate);

/* ------------------------------------------------------- *

// POLYMORPHISM: miras aldığımız class'ın özellik ve methodların yeniden yazılabilmesi
// override: üst metodla aynı isim ve yapıda yeni bir method yazma (öncekini ezmek/iptal etme/önceliği almak)
// overload: üst metodla aynı isimde ama farklı yapıda yeni bir method yazma. (her ikisi de aynı anda aktif) Js overload desteklemez!!

class Vehicle {
    vehicleIsActive = false

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }
    getDetails(){
        console.log('Vehicle içindeki getDetails çalıştı');
        return this.vehicleType
    }
}

class Car extends Vehicle { //Inheritance

    isRunning= false

    constructor(brand,model,year, vehicleType){
        super(vehicleType) 
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine(param1){
        this.isRunning = true
        return 'motor çalıştı'
    }
    //override: parent class'daki metodun aynen yeniden yazılabilmesi.
    //üstteki getDetails yerine bu çalışacak
    getDetails(){
        console.log('Car içindeki getDetails çalıştı');
        return super.getDetails()
        // return this.brand
    }
    //? Overload: Üstteki methodun aynı isim ama farklı parametre adet/tip ile yeniden tanımlanması.
    //? JS Desteklemez. TypeSctrip destekler.
    //? Çalışma prensibi: Çağrıldığı zaman parametreye göre ilgili method çalışır.
    // getDetails(parametre1, parameter2) {
    //     return this
    // }
}

const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
console.log(Ford);
console.log(Ford.getDetails());



/* ------------------------------------------------------- */

// Access Modifiers
// Public: genel erişime açık (parent erişebilir,child erişebilir,Instance erişebilir)
// Protected(_): sadece tanımlı olduğu class ve inherit edilen class içinden erişilebilir. JS desteklemez(parent erişebilir,child erişebilir,Instance erişemez)
// Private(#): sadece tanımlı olduğu class içinden erişilebilir.(parent erişemez,child erişebmez,Instance erişemez)

class Vehicle {
    vehicleIsActive = false // Public property
    
    //JS protected desteklemez
    _protectedProperty = 'protected-value' //protected property
    _protectedMethod() {return this} //protected method

    #privateProperty = 'private-value' // PRIVATE PROPERTY
    #privateMethod() { return this } // PRIVATE METHOD

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }
    getDetails(){
        console.log('Vehicle içindeki getDetails çalıştı');
        return this.vehicleType
    }
}

class Car extends Vehicle { //Inheritance

    isRunning= false

    constructor(brand, model, year, vehicleType = 'Car'){
        super(vehicleType) 
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine(param1){
        this.isRunning = true
        return 'motor çalıştı'
    }
    
    getDetails(){

        console.log('Public', this.vehicleType); //class erişilebilir (public)
        console.log('Protected', this._protectedProperty); //class erişilebilir (protected)
        console.log('Protected', this._protectedProperty) // Protected: Class Erişebilir.
        console.log('Private', this.privateProperty) // Private: Class Erişemez.
        // console.log('Private', this.#privateProperty) // Private: Class Erişemez.

        console.log('Car içindeki getDetails çalıştı');
        return super.getDetails()
        
    }
}

const Ford = new Car('Ford', 'Mustang', 1967, 'Car')
console.log(Ford);
console.log(Ford.vehicleIsActive);//public: Instance erişti
console.log(Ford._protectedProperty);//protected: Instance erişemez
console.log(Ford.privateProperty);//private: Instance erişemez
console.log(Ford.getDetails());



/* ------------------------------------------------------- *

//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//? "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.)


class Car {

    isRunning = false
    #price = 999

    constructor(brand, model, year, vehicleType = 'Car') {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine(param1) {
        this.isRunning = true
        return 'Motor Çalıştı'
    }
    
    getDetails() { // getter method
        console.log('Car içindeki getDetails çalıştı.')
        return super.getDetails()
    }

    get getPrice() {
        console.log('Fiyat görüntülendi.')
        return this.#price
    }

    set setPrice(newPrice) {
        console.log('Fiyat güncellendi.')
        this.#price = newPrice
        return this.#price
    }

    //? Direkt class'tan erişmek için "static" keyword kullanılabilir.
    //? "static" ile tanımlanmış değere instance'dan erişemeyiz.
    static staticProp = 'static-value'
    static staticMethod() {
        return 'static-method'
    }

}

const Ford = new Car('Ford', 'Mustang', 1967, 'Car')

//bir classdan bir classın içindeki property ve methodlara o classta Instance olmadan erişemeyiz

// console.log(Ford.price) // undefined
// console.log(Ford.getPrice) // getter  metodlar property gibi çağrılır.
// Ford.setPrice = 2000 // setter  metodlar property gibi güncellenir.
// // console.log(Ford.setPrice(2000)) // setter methodlar artık bir normal method gibi çalışmaz.
// console.log(Ford.getPrice)

console.log(Car.staticProp) // Direkt class'tan erişim.
console.log(Car.staticMethod())
// console.log(Ford.staticProp) // Instance erişemez. (hata verir)
// console.log(Ford.staticMethod())

/* ------------------------------------------------------- */


//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)



/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */