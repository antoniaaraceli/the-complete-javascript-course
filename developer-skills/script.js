// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function squareSum(numbers){
  let sum = 0;
  let square;
  for(let i = 0; i < numbers.length; i++){
      square = numbers[i] * numbers[i];
      sum += square;
  }
  return sum;
}

console.log(squareSum([]))