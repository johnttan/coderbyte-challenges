function FirstFactorial(num) { 
  var factorial = num;
  
  for(i=num-1; i>0; i--){
    factorial = factorial * i
      };
  // code goes here  
  return factorial; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());           
