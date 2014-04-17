function LongestWord(sen) { 
  sen = sen.replace(/[^\w\s]|_/g, "")
  var split = sen.split(' ');
  var bigword = '';
  
  for(i=0; i<split.length; i++){
    
    if (split[i].length > bigword.length){
      bigword = split[i]
        }};
  // code goes here  
  return bigword; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
