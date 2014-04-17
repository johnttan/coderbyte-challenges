function Palindrome(str) { 
  var strsplit = str.split(' ').join('').toLowerCase()
  ret = strsplit ===strsplit.split('').reverse().join('') ? true:false;
  
  return ret;
  // code goes here  

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           
