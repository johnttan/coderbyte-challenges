function AlphabetSoup(str) { 
  var result = [];
  var start = 'a'
  var end = 'z'
  for (i=start.charCodeAt(0);i<=end.charCodeAt(0);i++){
    for(z=0;z<str.length;z++){
      
      if(str[z] == String.fromCharCode(i)){result.push(str[z])};
    }}
                          
  // code goes here  
  return result.join(''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());           
