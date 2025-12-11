// Coding Challenge 1

/**
 * Given an array of forecasted maximum temperatures the thermomether displays a string with these temperatures.
 * 
 * Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."
 * 
 * Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. 
 * 
 * Use the problem solving framework: Understand the problem and break it into sub-problems!
 * 
 * TEST DATA 1: [17, 21, 23]
 * TEST DATA 2: [12, 5, -5, 0, 4]
 * 
 * ///// Small taks
 * 1. Create a loop to review each element of the array.
 * 2. Create a string template into a variable.
 * 3. Return the string
 */

const printForecast = function(arr){
    let temString = '...';
    for(i = 0; i < arr.length; i++){
        temString += ` ${arr[i]}°C in ${i + 1} days ...`
    }
    return temString;
}

console.log(printForecast([12, 5, -5, 0, 4]))
