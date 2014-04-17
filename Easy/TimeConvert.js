function TimeConvert(num) { 
  var minutes = num%60;
  var hours = (num - minutes)/60
  return hours + ':' + minutes;
  // code goes here  

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());           
