var read = require('readline-sync');
var psngr = [];
var n =read.question("Enter the number of passengers : ");

for (let i = 0; i < n; i++) {
    var disp = read.question("Enter the passenger name : ");
    psngr.push(disp);

    
    
}
console.log(psngr);

for (let i = 0; i < psngr.length; i++) {
    console.log("length of the name "+ psngr[i] + "  is : " + psngr[i].length);    
}