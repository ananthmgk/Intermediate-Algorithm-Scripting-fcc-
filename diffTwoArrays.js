Method(1):-
function diffArray(arr1, arr2) {
  const newArr = [];
  for(let i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1){
      newArr.push(arr1[i])
    }
  }
  for(let j = 0; j < arr2.length; j++){
    if(arr1.indexOf(arr2[j]) == -1){
      newArr.push(arr2[j])
    }
  } return newArr;
} 
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
--------*----------*-------------------*-----------------------*----------------------------
Method(2):-

function diffArray(arr1, arr2) {
  const newArr = [];
  arr1.map(a => (arr2.indexOf(a) == -1 && newArr.push(a)));
  arr2.map(b => (arr1.indexOf(b) == -1 && newArr.push(b)));
  return newArr;
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
---------*------------------------*---------------------*------------------*-------------------
Method(3):-

