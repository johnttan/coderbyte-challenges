function ThirdGreatest(strArr) { 
  buckets = {};
  
  for(var i = 0;i<strArr.length;i++){
    if(buckets[strArr[i].length] === undefined){buckets[strArr[i].length] = []};
  buckets[strArr[i].length].push(strArr[i]);
  }
  
  keys = Object.keys(buckets).sort(function(a,b){return b-a})
  num = 3;
  key = 0;
  for(var i = 0;i<keys.length;i++){
    if(num > 0){
    num -= buckets[keys[i]].length;
    if(num <= 0){key = keys[i]}
    }
  }
  third = buckets[key][buckets[key].length-1]
  // code goes here  
  return third; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());           
