// Aim: Compare two arrays and return a new array with any items which is not found in any arrays.
// Method(1):-
function diffArray(arr1, arr2) {
  // finding missing elements from arr2 to arr1 and its pushes into newArr.
  const newArr = [];
  for(let i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1){
      newArr.push(arr1[i])
    }
  }
  // finding missing elements from arr1 to arr2 and its pushes into newArr.
  for(let j = 0; j < arr2.length; j++){
    if(arr1.indexOf(arr2[j]) == -1){
      newArr.push(arr2[j])
    }
  } return newArr;
} 
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// --------*----------*-------------------*-----------------------*----------------------------
// Method(2):-

function diffArray(arr1, arr2) {
  const newArr = [];
  // finding missing elements from arr2 to arr1 and its pushes into newArr.
  arr1.map(a => (arr2.indexOf(a) == -1 && newArr.push(a)));
  // finding missing elements from arr1 to arr2 and its pushes into newArr.
  arr2.map(b => (arr1.indexOf(b) == -1 && newArr.push(b)));
  return newArr;
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// ---------*------------------------*---------------------*------------------*-------------------
// Method(3):-

