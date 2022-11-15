let psngr_name = [];
let destination = [];

var read = require("readline-sync");
var limit = parseInt(read.question("Please enter the limit : "));

for (let i = 0; i < limit; i++) {
   var name =read.question("Please enter name : ");
   psngr_name.push(name);
}
for (let j = 0; j < limit; j++) {
    var dest = read.question("Please enter the destination : ");
    destination.push(dest);
    
}

console.log("Passenger name array : ");
console.log(psngr_name);
console.log("Destination array : ");
console.log(destination);
let m = psngr_name.concat(destination);
console.log("Merged array : ");
console.log(m);
