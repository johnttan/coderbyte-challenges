function RunLength(str) { 
  var queue = [];
  var index = 0;
  for(var i=0;i<str.length;i++){
    if(queue[index]===undefined){queue[index]=[1, str[i]]}
    else if(str[i]==queue[index][1]){queue[index][0] += 1}
    else{index += 1;queue[index] = [1, str[i]]}
  }

  
  // code goes here  
  return queue.join('').split(',').join(''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());           
