function SimpleSymbols(str) { 
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var char = false;
  for(i=0;i<str.length;i++){
    if(letters.indexOf(str[i]) != -1){
      char = true;
      if ((str[i-1] === '+') && (str[i+1] === '+')){
        
        }else{return false}
    
    }};
  // code goes here 
  if (char === false){return false};
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
