var fare = [];
var destination = [];

var read = require("readline-sync");

var limit = parseFloat(read.question("Please enter the limit : "));

for (let i = 0; i < limit; i++) {
    var fare1 = parseFloat(read.question("Please enter the fare : "));
    fare.push(fare1);
    
}
console.log("Fare array");
console.log(fare);

for (let i = 0; i < limit; i++) {
    var dest = read.question("Please enter the destination : ");
    destination.push(dest);
    
}
console.log("Destination array");
console.log(destination);

var n = parseInt(read.question("Please enter the number  : "));
console.log(fare[n]);
console.log(destination[n]);