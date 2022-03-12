Method :1:-

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const regex = /[aeiou]/gi;
  let finalStr = "";
  if(str[0].match(regex)) {
    finalStr = `${str}way`;
  } else {
    let count = 0;
    let array = [];
  for(let some of str) {
    if(vowels.indexOf(some) == -1) {
      count++;
      array.push(some);
    } else {
      finalStr = `${str.slice(count)}${array.join('')}ay`;
      return finalStr;
    } 
  }  finalStr = `${str}ay`;
      return finalStr;
  }; return finalStr;
}
console.log(translatePigLatin("california"));
