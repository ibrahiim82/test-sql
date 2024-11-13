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

// THIS KEYWORD

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








/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */




