Method :1

function intoArr(obj) {
  let newArr = [];
  for(let prop in obj) {
    newArr.push(prop);
  } return newArr;
};

function whatIsInAName(collection, source) {
  const arr = [];
  for(let i = 0; i < collection.length; i++) {
      if(intoArr(source).every(a => collection[i][a] === source[a])) {
        arr.push(collection[i]);
      };
  };
  return arr;
};
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
------------------*-----------------------*----------------------------------*-----------------------------*----------------------------
Method :2

Using Object.keys();
function whatIsInAName(collection, source) {
  const arr = [];
  for(let i = 0; i < collection.length; i++) {
      if(Object.keys(source).every(a => collection[i][a] === source[a])) {
        arr.push(collection[i]);
      };
  };
  return arr;
};
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
--------------*------------------------*--------------------------------------*------------------------------------*----------------------
