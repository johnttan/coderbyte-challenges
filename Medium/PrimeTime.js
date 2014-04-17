function PrimeTime(num) {
  if(num==2){return true};
  if(num%2==0 || num==1) {return false};
  for(var i=3; i<= Math.sqrt(num); i+=2){
    if(num%i==0){
      return false;
    };
  }
  return true;
  // code goes here  

         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());           
