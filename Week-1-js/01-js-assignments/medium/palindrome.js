/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[\W_]/g,"")
  let copy = "";
  original = str;
  if(str.length === 0 || str.length === 1)return true;

  while(str.length>0)
  {
    // can use string slicing concept also
    let last = str[str.length -1];
    copy = copy + last
    str = str.substring(0,str.length - 1)
    console.log(str.length);
  }
  
  if(original === copy) return true;  
  else return false;
 
}

module.exports = isPalindrome;
