var read = require('readline-sync');
var psngr = [];
var n =read.question("Enter the number of passengers : ");

for (let i = 0; i < n; i++) {
    var disp = read.question("Enter the passenger name : ");
    psngr.push(disp);

    
    
}
console.log(psngr);
var psngr1 = [];
for (let i = 0; i < psngr.length; i++) {
   var a =  psngr[i].split(' ');
   psngr1.push(a);

    
}
console.log(psngr1);