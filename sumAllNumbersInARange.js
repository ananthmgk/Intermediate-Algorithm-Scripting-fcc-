Method 1:

function sumAll(arr) {
  const sortedArr = arr.sort((a,b) => b-a)
  const newArr = [];
  for(let i = sortedArr[0]; i >= sortedArr[1]; i--) {
    newArr.push(i);
  }; 
  return newArr.reduce((initial,currentElement) => initial+currentElement,0);
};
console.log(sumAll([10, 5]));
--------*--------------*--------------------------*------------------
Method 2:
without reduce function

function sumAll(arr) {
  const sortedArr = arr.sort((a,b) => b-a)
  let total = 0;
  for(let i = sortedArr[0]; i >= sortedArr[1]; i--) {
    total += i;
  }; 
  return total;
};
console.log(sumAll([5, 10]));
