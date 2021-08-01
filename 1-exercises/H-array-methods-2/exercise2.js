/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let formatStr = str.split("");
  formatStr[0] = formatStr[0].toUpperCase();
  return formatStr.join("");
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
