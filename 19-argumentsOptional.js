// Method 1: Create a function that sums two arguments together. If only one argument is provided, 
//           then return a function that expects one argument and returns the sum.

function addTogether() {
  const [a, b] = arguments; // here arguments is an Array-like object, that contains the values of the arguments passed to that function.
  if(typeof a !== "number") {
    return undefined;
  } else if( b == undefined) {
    return function curried (b) {
      if(typeof b !== "number") {
        return undefined;
      } return a + b;
    } 
  } else if(typeof b !== "number") {
    return undefined;
  } return a + b;
}
console.log(addTogether(5)(7));
----------------------------------------------*-------------------------------------------------------*-----------------------------------
