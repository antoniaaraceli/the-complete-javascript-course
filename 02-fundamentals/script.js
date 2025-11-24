/* 
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D!')

// const interface = 'Audio';
// const private = 100;


//////// FUNCTIONS
function logger(){
    console.log('My name is Anto.')
}
logger();

// Function declaration
function calcAge(birthYear){
    return 2025 - birthYear;
}
const age1 = calcAge(1998);

// Function expression
const calcAge2 = function calcAge2(birthYear){
    return 2025 -birthYear;
}
const age2 = calcAge2(1998)
console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;
console.log(calcAge3(1998));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retirements in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1998, 'Araceli'));

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear){
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retirements in ${retirement} years.`);
        return retirement;
    } else{
        console.log(`${firstName} has already retired 🥳`);
        return -1;
    }   
}
console.log(yearsUntilRetirement(1950, 'Cuca'))
*/

