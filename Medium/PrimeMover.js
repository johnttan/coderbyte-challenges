function PrimeMover(num) {
  var number = 0;
  primes = []
  while(num > 0){
  number++;
  if(number==2){primes.push(number);num--;}
  prime = true;
  if(number%2==0 || number==1) {prime=false;continue;};
  for(var i=3;i<=Math.sqrt(number);i+=2){
  
  if(number%i==0){
    prime=false;
    continue;
  }
  }

  if(prime){
    primes.push(number);
    num--;
  }}
  // code goes here  
  return number; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());           
