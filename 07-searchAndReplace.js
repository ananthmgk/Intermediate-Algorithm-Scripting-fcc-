Method: 1.

function myReplace(str, before, after) {
    let finalStr = "";
    if(before[0] === before[0].toUpperCase()){
        finalStr = `${after[0].toUpperCase()}${after.slice(1)}`;
    } else if(before[0] != before[0].toUpperCase()) {
        finalStr = `${after[0].toLowerCase()}${after.slice(1)}`;
    } return str.replace(before,finalStr);
  }
  
console.log(myReplace("Let us go to the store", "store", "mall"));
------------------------------*-----------------------------------*-------------------------------*--------------------
