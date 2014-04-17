function FirstReverse(str) { 

  // code goes here
  var rev = [];
  
  for(i=0; i<str.length; i++)
      {
        rev.push(str[str.length - i -1])
      };
  return rev.join(''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());           
