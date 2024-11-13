"use strict"

/* -------------------------------------------------------
    OOP --> Object Oriented Programming
            (Nesneye Yönelik Programlama)
------------------------------------------------------- */


/* -------------------------------------------------------
    OBJECTS
------------------------------------------------------- *

// JS'de direkt obje oluşturabiliriz.(Class'a ihtiyaç duymadan)
// Obje isimlendirmede PascalCase veya camelCase isimlendirme yapabiliriz.

const exampleObject ={
    propertyName: 'value', //obje içindeki değişkene property,attribute,field denir.

    methodName: function(){ //obje içinde tanımlanan fonksiyonlara method denir.
        return "bu bir method'dur"
    },

    methodNameAlternative(){
        return "bu da bir method'dur"
    },
}

// nokta ile içerdeki dataya ulaşırız (Dot Notation)
console.log(exampleObject.propertyName);
console.log(exampleObject.methodName());
console.log(exampleObject.methodNameAlternative());



/* ------------------------------------------------------- *

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['White','Red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(parametre = 'default'){
        console.log(parametre);
        return 'Engine started'
    }
}

// console.log(Car);
// console.log(Car.brand);
// console.log(Car.colors);
// console.log(Car.colors[0]);
// console.log(Car.details);
// console.log(Car.details.engineSize);
// console.log(Car.startEngine());
// console.log(Car.startEngine('ok'));

//Alternative style
console.log(Car ['brand'] );
console.log(Car ['colors'] );
console.log(Car ['colors'][1] );
console.log(Car ['details'] );
console.log(Car ['details']['engineSize']) ;
console.log(Car ['startEngine']() );





/* ------------------------------------------------------- *

//      THIS KEYWORD

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['White','Red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(parametre = 'default'){
        console.log(parametre);
        return 'Engine started'
    },
    getDetails: function (){
        // return this.details
        // return this
        return this.startEngine()
    },
    arrowFunction: () => {
        //arrow funcitonlar normal fonksiyonlardan farklı çalışır yani globalScope()'dur.globalScope olduğundan dolayı this keyword burada çalışmaz (localScopelarda çalışır)
        return this
    }
}
//this keywordu içinde bulunduğu objeyi temsil eder.
// console.log( Car.getDetails() ); Funciton are in localScope
 console.log( Car.arrowFunction() ); //ArrowFuncions are in globalScope








/* ------------------------------------------------------- *

//      ARRAY DESTRUCTURING

const testArray = ["value0","value1","value2","value3","value4"]

// const var0 = testArray[0]
// const var1 = testArray[1]
// const var2 = testArray[2]
// const varOther = testArray.slice(3,5)

// Sıralama önemli 
// const [var0,var1,var2,...varOther] = testArray
// console.log(var0,var1,var2,varOther);

// Rest operatöru (toplayıcı görevi yapar) **Eşittirin sol tarafında ise rest operatörüdür ve en sonda olmak zorundadır.
const [firstItem,seconItem,...others] = testArray
console.log(firstItem,seconItem,others);

// Spread operatöru (dağıtıcı görevi yapar) **Eşittirin sağ tarafında ise spread operatörüdür
const newArray = [...testArray,'value5','value6']




/* ------------------------------------------------------- */

//      OBJECT DESTRUCTURING

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['White','Red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(parametre = 'default'){
        console.log(parametre);
        return 'Engine started'
    }
}

// Rest operatörü **sıralama önemli değil, key isimleri önemli
// const {year,model,brand,...others} = Car 
// console.log(year,model,brand,others);

//isim değişikliği (key değişikliği)
// const {year,model:newName,brand,...others} = Car 
// console.log(year,newName,brand,others);

//default değer
// const {year,model:newName,brand,type='default-value',...others} = Car 
// console.log(year,newName,brand,type,others);

//spread operatörü
// const newObj = {
//     ...Car,
//     newKey: 'new-value'
// }
// console.log(newObj);


//Object to JSON (stringfy)
// console.log(typeof Car,Car);
// const json = JSON.stringify(Car)
// console.log(typeof json, json);

// // JSON to Object (parse)
// const obj = JSON.parse(json)
// console.log(typeof obj, obj);
// ** çıktıda methodlar gözükmez çünkü functionlar stringe çevrilemez.örneğin startEngine kısmı çevrilmez

// Object to Array
//keys:
const arrKeys = Object.keys(Car)
console.log(arrKeys);
//values:
const arrValues = Object.values(Car)
console.log(arrValues);
// Entries: (key and values)
const arrEntries = Object.entries(Car)
console.log(arrEntries);



/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */




