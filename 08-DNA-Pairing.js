Method 1:

function pairElement(str) {
    let newArr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "A") {
            newArr.push(["A","T"]);
        } else if(str[i] === "T") {
            newArr.push(["T","A"]);
        } else if(str[i] === "C") {
            newArr.push(["C","G"]);
        } else if(str[i] === "G") {
            newArr.push(["G","C"]);
        }
    } return newArr;
  }
  
console.log(pairElement("ATCGA"));
------------------*----------------------*---------------------------*--------------------------*--------------------------

Method 2:
