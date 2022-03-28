// Method 1:

function sumPrimes(num) {
  // the below func to check whether the num is prime numbers or not,
  function pickPrimeNumbers(num) {
    // in this loop we starts from 2 because 1 is not a prime number.
    for(let i = 2; i < num; i++) {
      // if the remainder is zero it's not a prime number.
      if(num % i == 0) {
        return 0;
      } 
    } return num; // it returns prime numbers.
  };

  let newArr = [2];
  for(let i = 3; i <= num; i++) {
    newArr.push(pickPrimeNumbers(i));
    // here the newArr returns all the prime numbers in an array, and it is added by reduce func.
  } return newArr.reduce((a,b) => a+b);
};
console.log(sumPrimes(10)); // => 17
// --------------------------*---------------------------*----------------------------------*-------------------------------------
