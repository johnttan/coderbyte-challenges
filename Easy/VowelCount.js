function VowelCount(str) { 
  var count = 0;
  var vowels = "aeiou";
  str = str.toLowerCase();
  for(i=0;i<str.length;i++){
    if(vowels.indexOf(str[i])>-1){count++}
  }
  // code goes here  
  return count; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           
