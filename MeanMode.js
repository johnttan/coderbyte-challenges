function MeanMode(arr) { 
  arr = arr.sort(function(a,b){return a-b})
  
    var map = {};
  var mode = arr[0];
  for(i=0;i<arr.length;i++){
    if(map[arr[i]] == null){map[arr[i]] = 1}
    else{map[arr[i]]++};
          if(map[arr[i]]>map[mode]){mode = arr[i]}
  }
  var mean = arr.reduce(function(a, b) {
    return a + b;
}) / arr.length;

  if(mode==mean){return 1}else{return 0}
  // code goes here  

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());           
