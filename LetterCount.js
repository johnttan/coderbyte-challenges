function LetterCountI(str) { 
  function computecount(word){
    word = word.split('');
    var count = 0;
    var lett;
    for(var i=0;i<word.length;i++){
      var count2 = 0;
      for(var z=0;z<word.length;z++){
        if(word[i] == word[z]){
          count2 ++;
        }
      }
      if(count2 > count){count = count2;lett = word[i]} 
    }
    return count;
  };
  
  str = str.split(' ');
  var fword;
  var fcount = 0;
  for(f=0;f<str.length;f++){
    var counted = computecount(str[f]);
    if(counted > fcount){fword = str[f]; fcount = counted};
  }
  return fcount > 1 ? fword:-1 

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());           
