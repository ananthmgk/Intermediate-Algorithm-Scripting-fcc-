// Method 1: Check if the predicate (second argument) is truthy on all elements of a collection (first argument),

function truthCheck(collection, pre) {
  // Iterate the objects using for in loop,
  for(let item in collection) {
    if(!collection[item][pre]) { // if the 'pre' value in any one of the 'item' is not true return false,
      return false;
    }
  } return true; // after checking all the 'items' as true, return true.
}
console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"));
--------------------------------*------------------------------------------*---------------------------------------------------------------
