// Method 1: Flatten a nested array, Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
  const newArr = [];
  arr.map(num => {
    if (Array.isArray(num)) { // Array.isArray tell if their is an array, say true or false,
      newArr.push(...steamrollArray(num)); // if it is true, it pushes the recurcive function in the arr
    }
    else {
      newArr.push(num);
    }
  });
   return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); // ==> [ 1, 2, 3, 4 ]
-------------------------*--------------------------------*-----------------
