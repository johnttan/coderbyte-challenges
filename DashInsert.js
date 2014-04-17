function DashInsert(num) { 
  num = String(num);
  var result = []
  for(var i=0;i<num.length;i++){
    result.push(num[i]);
    if(num[i]%2 != 0 && num[i+1]%2 != 0 && i!=num.length-1){result.push('-')};
  }
  // code goes here  
  return result.join(''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());           
