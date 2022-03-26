// Aim:  Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr,...args) {
  const newArr = [];
  arr.map(a => (args.indexOf(a) == -1 && newArr.push(a)));
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); 
// => [1, 1]
