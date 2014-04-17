function CountingMinutesI(str) { 
  var time1 = [[],[], 'am'];
  var time2 = [[],[], 'am'];
  var time1min = false;
  var time2min = false;
  str = str.split('-')
  str[0] = str[0].split(':')
  str[1] = str[1].split(':')
  var timedif = 0
      if(str[0][1][2]==str[1][1][2]){
      timedif =(parseInt(str[1][0])*60+parseInt(str[1][1].slice(0, str[1][1].length-2))-(parseInt(str[0][0])*60+parseInt(str[0][1].slice(0, str[0][1].length-2))))
        }else{
          timedif =((parseInt(str[1][0])+12)*60+parseInt(str[1][1].slice(0, str[1][1].length-2))-(parseInt(str[0][0])*60+parseInt(str[0][1].slice(0, str[0][1].length-2))))
            }
  // code goes here  
  return timedif;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());           
