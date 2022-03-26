// Aim => to Sum All Numbers inbetween the both given arguments
// Method 1:

function sumAll(arr) {
  const sortedArr = arr.sort((a,b) => b-a);
  // sorted the given arguments
  const newArr = [];
  for(let i = sortedArr[0]; i >= sortedArr[1]; i--) {
    newArr.push(i); // here the newArr will collect [ 10, 9, 8, 7, 6, 5 ]
  }; 
  // so by using reduce() it will sum the returned newArr
  return newArr.reduce((initial,currentElement) => initial+currentElement,0);
};
console.log(sumAll([10, 5])); //=>45
// --------*--------------*--------------------------*------------------*-------------------------------------
// Method 2:
// without reduce function

function sumAll(arr) {
  const sortedArr = arr.sort((a,b) => b-a);
  // sorted the given arguments
  let total = 0;
  // by extracting and sum the numbers between 5 to 10
  for(let i = sortedArr[0]; i >= sortedArr[1]; i--) {
    total += i;
  }; 
  return total;
};
console.log(sumAll([5, 10])); //=>45
