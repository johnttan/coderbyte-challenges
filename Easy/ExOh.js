function ExOh(str) {
  var oh = 0
  for(i=0;i<str.length;i++){
    if (str[i]=='o'){oh++};
  }
  if(str.length/oh == 2){return true}else{return false};
  // code goes here  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
