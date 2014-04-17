function NumberAddition(str) { 
  main = [];
  current = [];
  
  for(var i = 0;i<str.length;i++){
    if(!isNaN(str[i])){
      current.push(str[i])
        }
    if(isNaN(str[i+1]) || str[i+1] == ' '){
      main.push(+current.join(''));
      current = [];
    }
  }
  sum = 0;
  for(var i = 0;i<main.length;i++){
    sum += main[i];
  }
  
  // code goes here  
  return sum; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());           
