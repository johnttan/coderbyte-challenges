function ArithGeo(arr) { 
  var dif = arr[1] - arr[0];
  var factor = arr[1] / arr[0];
  var arith = true;
  var geo = true;
  for(i=0;i<arr.length - 1;i++){
    if(arr[i+1] != arr[i] * factor){
      geo = false;
    }
    if(arr[i+1] != arr[i] + dif){
      arith = false;
    }
  }
  
  if(arith==true){return 'Arithmetic'}else if(geo==true){return 'Geometric'}else{return -1};
  
 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());           
