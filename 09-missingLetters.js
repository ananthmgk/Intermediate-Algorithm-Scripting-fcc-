Method-1:

function fearNotLetter(str) {
    let arrOfIndex = [];
    const allAlpha = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < str.length; i++) {
        arrOfIndex.push(allAlpha.indexOf(str[i]));
    } return creatingRegularArr(arrOfIndex);
  };
  
console.log(fearNotLetter("abce"));

function creatingRegularArr(arrOfIndex) {
    let regularArr = [];
    for(let i = arrOfIndex[0]; i <= arrOfIndex[arrOfIndex.length-1]; i++) {
        regularArr.push(i);
    } return compareBothTheArrays(regularArr, arrOfIndex);
};


function compareBothTheArrays(regularArr, arrOfIndex) {
    const allAlpha = "abcdefghijklmnopqrstuvwxyz";
    let missingLetter = [];
    for(let i = 0; i < regularArr.length; i++) {
        if(arrOfIndex.indexOf(regularArr[i]) === -1) {
            missingLetter.push(regularArr[i]);
        };
    };  return allAlpha[missingLetter];
};
----------------*-----------------------------*------------------------*-----------------------------*--------------------------*
  
  Method 2:
