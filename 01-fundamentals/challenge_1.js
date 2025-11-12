// Compare Body Mass Index (BMI)

// Data, Kg, m
const massMark = 78;
const heightMark = 1.69; 
const massJohn = 92;
const heightJohn = 1.95;

// BMI Calculation 
const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

console.log(BMIMark);
console.log(BMIJohn);

// Comparation
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
