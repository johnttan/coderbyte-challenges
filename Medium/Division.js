function Division(num1,num2) { 
    var larger = Math.max(num1, num2);
    var remainder = (larger == num1) ? num2: num1;
    var newremainder;
    while(larger % remainder != 0){
        newremainder = larger % remainder;
        larger = remainder
        remainder = newremainder
        console.log(larger, remainder)
    }
    console.log(remainder)
    return remainder
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Division(210, 45);                            