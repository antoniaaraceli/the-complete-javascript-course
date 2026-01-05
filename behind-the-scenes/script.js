'use strict';
/*
function calcAge(birthYear){
    const age = 2026 - birthYear;
    function printAge(){
        let output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Araceli';

            // Reasssigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;}
            }
        // console.log(add(3, 2)); // Error
    }
    return printAge();
}

const firstName = 'Antonia';

calcAge(1996);


// Variables
console.log(me);
// console.log(job);
// console.log(age);

var me = 'Araceli';
let job = 'developer';
const age = 26;

// Functions
console.log(addDeclaration(2,3));
// console.log(addExpression(2, 3));
console.log(addArrow);

function addDeclaration(a, b){
    return a + b;
}

const addExpression = function(a, b){
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}

// THIS Keyword
console.log(this);
const calcAge = function(birthYear){
    console.log(2026 - birthYear);
    console.log(this);
}

calcAge(1998);

const calcAgeArrow = birthYear => {
    console.log(2026 - birthYear);
    console.log(this);
}

calcAgeArrow(1998);

const araceli = {
    year: 1998,
    calcAge: function() {
        console.log(this);
        console.log(2026 - this.year);
    }
}

araceli.calcAge();

const matilda = {
    year: 2017
}

matilda.calcAge = araceli.calcAge;
matilda.calcAge();

const f = araceli.calcAge;
console.log(f);
f();

var firstName = 'Matilda';

const araceli = {
    firstName: 'Antonia',
    year: 1998,
    calcAge: function() {
        // console.log(this);
        console.log(2026 - this.year);

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1999);
        // };

        // Solution 2. Arrow functions uses the this keyword from its parent scope
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1999);
        };
        isMillenial();
    },
    greet: function(){
        console.log(`Hey, ${this.firstName}!`)
    }
};

araceli.calcAge();
*/

// Arguments Keywords
const addExpression = function(a, b){
    console.log(arguments);
    return a + b;
};

addExpression(2,5);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};

addArrow(2, 5);
 



