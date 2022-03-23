Method-1:

function something(indexArr) {
    let regularArr = [];
    for(let i = indexArr[0]; i <= indexArr[indexArr.length-1]; i++) {
        regularArr.push(i);
    } return something1(regularArr, indexArr);
};


function something1(regularArr, indexArr) {
    const allAlpha = "abcdefghijklmnopqrstuvwxyz";
    let missingLetter = [];
    for(let i = 0; i < regularArr.length; i++) {
        if(indexArr.indexOf(regularArr[i]) === -1) {
            missingLetter.push(regularArr[i]);
        };
    };  return allAlpha[missingLetter];
};

function fearNotLetter(str) {
    let indexArr = [];
    const allAlpha = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < str.length; i++) {
        indexArr.push(allAlpha.indexOf(str[i]));
    } return something(indexArr);
  };
  
console.log(fearNotLetter("abce"));
----------------*-----------------------------*------------------------*-----------------------------*--------------------------*
  
  Method 2:
