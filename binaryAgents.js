// Method 1: Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  // split the string with backspace " ",
  // then iterate the splited string,
  // Here String.fromCharCode(65) => it tells what alphabet character is setted for the given number => A,
  // here parseInt(item,2) converts the item with base 2 as Binary to Decimal.=> 65,
  // Atlast join it.
  let finalStr = str.split(" ").map(item => String.fromCharCode(parseInt(item,2))).join("");
  return finalStr;
};
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
---------------------------*------------------------------------*------------------------------------
