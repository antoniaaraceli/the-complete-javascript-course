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

//// ARRAYS
const friends = ['Diana', 'Sebas', 'Romo'];
console.log(friends);

const years = new Array(2000, 2001, 1999);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'Adán';
console.log(friends);
// friends = ['Dulce', 'Diego'];

const firstName = 'Antonia';
const antonia = [firstName, 'Sánchez', 2025 - 1998, 'developer', friends];

console.log(antonia);
console.log(antonia.length);

// Exercise
const calcAge = function(birthYear){
    return 2025 - birthYear;
}

const years = [1998, 2001, 2004, 1966, 1976];

// calcAge(years);
const year1 = calcAge(years[0]);
const year5 = calcAge(years[years.length - 1]);
console.log(year1);
console.log(year5);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[years.length - 1])];

console.log(ages);

///// Methods
// PUSH
const friends = ['Diana', 'Sebas', 'Romo'];
console.log(friends);

friends.push('Kari');
console.log(friends);

// UNSHIFT
friends.unshift('Ale');
console.log(friends);

// Remove elements
friends.pop(); // Last: Kari
console.log(friends);
const popped = friends.pop(); // Romo
console.log(popped);
console.log(friends);

friends.shift(); // Ale
console.log(friends);

console.log(friends.indexOf('Sebas'));
console.log(friends.indexOf('Adán'));

friends.push(23)
console.log(friends.includes('Sebas'));
console.log(friends.includes('Adán'));
console.log(friends.includes(23)); // '23' false

if (friends.includes('Sebas')){
    console.log('You have a friend called Sebas')
}
*/

////////// OBJECTS //////////
const antoArray = [
    'Antonia',
    'Sánchez',
    2025 - 1998,
    'developer',
    ['Diana', 'Sebas', 'Romo']
]

const anto = {
    firstName: 'Antonia',
    lastName: 'Sánchez',
    age: 2025 - 1998,
    job: 'developer',
    friends: ['Diana', 'Sebas', 'Romo']
}
console.log(anto);

console.log(anto.lastName);
console.log(anto['lastName']);

const nameKey = 'Name';
console.log(anto['first' + nameKey]);
console.log(anto['last' + nameKey]);
/*
const insterestedIn = prompt('What do you want to know about Anto? Choose between fisrtName, lastName, age, job, friends.')

if (anto[insterestedIn]){
    console.log(anto[insterestedIn]);
} else {
    console.log('Wrong request!')
}
*/
anto.location = 'León, Guanajuato';
anto['instagram'] = 'antoniaaraceli.tech';

console.log(anto);

// Challenge
// Anto has 3 friends, and her best friend is called Diana
console.log(`${anto.firstName} has ${anto.friends.length} friends, and her best friend is called ${anto.friends[0]}`)