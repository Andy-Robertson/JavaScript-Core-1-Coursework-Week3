/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {

let formatStr = str.split(" ");
formatStr = formatStr.charAt(0).toUpperCase() + formatStr.slice(1, formatStr.length);

// let formatStr = str.split(" ");
 console.log("SPLIT: " + formatStr);
// console.log(typeof formatStr);

// formatStr = formatStr[0].toUpperCase() + formatStr.splice(1, formatStr.length); 
// console.log("upper: " + formatStr);
// console.log(typeof formatStr);

// formatStr = formatStr.join("");
// console.log("joined: " + formatStr);
// console.log(typeof formatStr);

}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name1 = "daniel";

console.log(capitalise(name1));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
