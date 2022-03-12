Method -1:

function strWithUpperCaseMiddle(str) {
  let splitedStr = str.split(/[ `!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/? ~]/);
  let upperCaseArray = [];
  for(let i = 0; i < splitedStr.length; i++) {
    for(let j = 1; j < splitedStr[i].length; j++) {
      if (splitedStr[i][j] === splitedStr[i][j].toUpperCase()) {
        upperCaseArray.push(splitedStr[i][j]);
      } 
    } 
  } return upperCaseArray;
}
 
function spinalCase(str) {
  let collectedUpperCases = strWithUpperCaseMiddle(str);
  let splitedStr = str.split(/[ `!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/? ~]/);
  let firstWordInStr = splitedStr[0].slice(1);
  let upperCaseReplaced = firstWordInStr.replace(/[A-Z]/g, '- ');
  let splitedToLoop = upperCaseReplaced.split('-');
  let finalWord = [str.slice(0,1) + splitedToLoop[0]];
  for(let i = 1; i < splitedToLoop.length; i++) {
    finalWord.push(splitedToLoop[i].replace(' ', `${collectedUpperCases[i-1]}`));
  } for(let j =1; j < splitedStr.length; j++) {
    finalWord.push(splitedStr[j]);
  } return finalWord.join('-').toLowerCase();
} 

console.log(spinalCase("AllThe-small Things"));
----------------*-------------------------------*----------------------------------*-----------------------------------
