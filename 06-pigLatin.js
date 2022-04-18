Method :1:-

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  const arrOfVowels = ['a', 'e', 'i', 'o', 'u'];
  const regexVowels = /[aeiou]/gi;
  let finalStr = "";
  // if the first letter of the string is a vowels, just add "way" at the end.
  if(str[0].match(regexVowels)) {
    finalStr = `${str}way`;
  } else { // for other cases
    let count = 0; // here count will count the non vowels letters.
    let nonVowelLetters = []; // non vowels letters are pushed in this nonVowelLetters.
  for(let letter of str) {
    if(arrOfVowels.indexOf(letter) == -1) {
      count++;
      nonVowelLetters.push(letter);
    } else {
      finalStr = `${str.slice(count)}${nonVowelLetters.join('')}ay`;
      return finalStr;
    } 
  }  finalStr = `${str}ay`;
      return finalStr;
  }; return finalStr; // "way" added str.
}
console.log(translatePigLatin("california"));
