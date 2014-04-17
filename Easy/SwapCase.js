function SwapCase(str) { 
  str = str.split('')
  str = str.map(function(value){
    char = value.charCodeAt(0)
    if(char >= 'a'.charCodeAt(0) && char <= 'z'.charCodeAt(0)){
    return String.fromCharCode(char - 32)
    }else if(char >= 'A'.charCodeAt(0) && char <= 'Z'.charCodeAt(0)){
    return String.fromCharCode(char + 32)
      }else{return value}
  })
  // code goes here  
  return str.join(''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
