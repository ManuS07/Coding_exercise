var read = require("readline-sync");
var flightFare = parseInt(read.question("Please enter the fare : "));
var bookingTime = parseInt(read.question("Please enter booking time 24 hour format : "));
var time = [23,0,1,2,3,4,5,6];
if(bookingTime >= 6 && bookingTime<= 9){
    flightFare = flightFare + flightFare*(10/100);
    console.log("Your fare is : " + flightFare);
}
 if(bookingTime > 9 && bookingTime<= 17){
    flightFare = flightFare + flightFare*(20/100);
    console.log("Your fare is : " + flightFare);
}
 if(bookingTime > 17 && bookingTime<= 23){
    flightFare = flightFare + flightFare*(7/100);
    console.log("Your fare is : " + flightFare);
}
 if(time.includes(bookingTime)){
    flightFare = flightFare + flightFare*(5/100);
    console.log("Your fare is : " + flightFare);
}