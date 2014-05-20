function StringScramble(str1,str2) {
    str1 = str1.split('')
    for(var i=0;i<str2.length;i++){
        console.log(str1)
        console.log(str2[i])
        if(str1.indexOf(str2[i]) == -1){
            console.log(false)
            return false
        }
        str1.splice(str1.indexOf(str2[i]), 1)
    }
  // code goes here  
  console.log(true)
  return true
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble('aqwe', 'qa');                            















                            
                            
                            
  