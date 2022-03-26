// Aim : Make a function that looks through an array of objects (first argument) 
//       and returns an array of all objects that have matching name and value pairs (second argument). 
// Method :1

// extract the keys in the source 
function intoArr(obj) {
  let newArr = [];
  for(let prop in obj) {
    newArr.push(prop);
  } return newArr; // => it will return [ 'last' ].
};

function whatIsInAName(collection, source) {
  const arr = [];
  for(let i = 0; i < collection.length; i++) {
    // by using every func, checks every 'last' keys is matching in collection.
      if(intoArr(source).every(a => collection[i][a] === source[a])) {
        arr.push(collection[i]);
      };
  };
  return arr;

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// it will return => [ { first: 'Tybalt', last: 'Capulet' } ]..
// ------------------*-----------------------*----------------------------------*-----------------------------*----------------------------
// Method :2

// Using Object.keys();
function whatIsInAName(collection, source) {
  const arr = [];
  for(let i = 0; i < collection.length; i++) {
    // here object.keys will extract the keys in source. and checks every matching keys.
      if(Object.keys(source).every(a => collection[i][a] === source[a])) {
        arr.push(collection[i]);
      };
  };
  return arr;
};
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// it will return => [ { first: 'Tybalt', last: 'Capulet' } ]..
// --------------*------------------------*--------------------------------------*------------------------------------*----------------------
