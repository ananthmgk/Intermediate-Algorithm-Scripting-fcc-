// Method 1:

function sumFibs(num) {
  // creating a variable of newArr to collect all Fibonacci Numbers with first element as 1. 
  let newArr = [1];
  let previousElmnt  = 0;
  let currentElmnt   = 1
  let sum;
  // collecting Fibonacci Numbers from 0 to num in newArr
  for(let i = 0; i <= num; i++) {
    sum = previousElmnt + currentElmnt;
    previousElmnt = currentElmnt;
    currentElmnt = sum;
    if(sum <= num) {
      newArr.push(sum);
      };
    } // and here it returns the sum of all the odd numbers from newArr.
    return newArr.filter(element => element % 2 != 0).reduce((initial,current) => initial+current,0);
  }
console.log(sumFibs(10));

//------------------*---------------------------*----------------------------*------------------------------------------------

// Method 2:

function sumFibs(num) {
  // here all the odd Fibonacci numbers are added and stored in this oddFibSum variable.
  let oddFibSum = 0;
  let previous = 0;
  let current = 1;
// here while loop is better than for loop, because i value is not necessary.
  while (current <= num) {
    if(current % 2 !== 0) {
      oddFibSum += current;
    }
    let temp = previous + current;
    previous = current;
    current = temp;
  }
  return oddFibSum;
}
console.log(sumFibs(4000000)); // => 4613732.
