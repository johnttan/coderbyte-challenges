function PalindromeTwo(str) {
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    str = str.split('')
    newstr = []

    for(var i = 0; i<str.length; i++){
        if(letters.indexOf(str[i]) >= 0){
            newstr.push(str[i])
        }
    }
    newstr = newstr.join('').toLowerCase()

    return newstr == newstr.split('').reverse().join(''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());                            















                            
                            
                            
  