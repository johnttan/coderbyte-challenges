function LetterCapitalize(str) { 
  var split = str.split(' ');
  
  for(i=0; i<split.length; i++){
     var word = split[i].split('');
     word[0] = word[0].toUpperCase();
    split[i] = word.join('');
     
  };
  // code goes here  
  return split.join(' '); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
