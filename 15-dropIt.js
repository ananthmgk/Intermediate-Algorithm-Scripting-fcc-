// Method 1: test case = dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4];

function dropElements(arr, func) {
//   to use slice we want count variable, and here the false condition in the func are counted(!func)...
  let count = 0;
  for (let i = 0; !func(arr[i]); i++) {
    count++;
  } return arr.slice(count); // slice(2) ==> Output= [3,4]
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));

// Method 2: using while loop, because we dont need i;

function dropElements(arr, func) {
  while(!func(arr[0])) {
    arr.shift() // shift will remove the first elements from the arr.
  } return arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));
