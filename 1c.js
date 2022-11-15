var read = require('readline-sync');
var psngr = [];
var n =read.question("Enter the number of passengers : ");

for (let i = 0; i < n; i++) {
    var disp = read.question("Enter the passenger name : ");
    psngr.push(disp);

    
    
}
console.log(psngr);
console.log(psngr.length);

var nam = read.question("Enter name to search : ");
for (let i = 0; i < psngr.length; i++) {
   if(nam == psngr[i]){
    console.log("The searched name is : "+ psngr[i] + "  and is in the position : " + i+ " of the array");
    break;
   }
 
    
}