function DivisionStringified(num1,num2) { 
  var div = num1 / num2;
  div = Math.round(div);
  div = String(div).split('').reverse();
  var final = [];
  
  for(var i=0;i<div.length;i++){
    final.push(div[i]);
    if((i+1)%3 == 0 && div.length > 3 && i!=div.length-1){final.push(',')};
  }
  
  final = final.reverse().join('')
  return final;
  // code goes here  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());           
