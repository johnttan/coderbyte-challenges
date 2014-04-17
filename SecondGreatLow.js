function SecondGreatLow(arr) { 

  arr = arr.sort(function(a,b){return a - b});
  var arr2 = arr.filter(function(elem, pos, self) {
    return self.indexOf(elem) == pos;
})
  if (arr2.length<3) {
    return arr2[1] + " " + arr2[0];
  } else {
    return arr2[1] + " " + arr2[arr2.length-2];
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());           
