// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN
/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtrac the min from max (amplitude) and return it

const calcTempAmplitude = function(temps){
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(temps[i] > max) max = curTemp;
        if(temps[i] < min) min = curTemp;
    }
    return max - min;
};
console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temperture
// 1) Understanding the problem
// with 2 arrays, should we implement the funcionality twice? No!, Just merge 2 arrays.

// 2) Breaking up into sub-problems
// - How to merge two arrays?

const calcTempAmplitude = function(t1, t2){
    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(temps[i] > max) max = curTemp;
        if(temps[i] < min) min = curTemp;
    }
    return max - min;
};
console.log(calcTempAmplitude([3,5,1], [9, 0, 5]));
*/

// Debuggin exercise
const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        // 3. Fix the bug
        value: Number(prompt('Degrees celcius:'))
    }
    // 2. Find the bug
    //console.log(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}
//debugger;
// 1. Identify the bugg
console.log(measureKelvin());
