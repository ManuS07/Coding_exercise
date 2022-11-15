var read = require('readline-sync');
var psngr = [];
var n =read.question("Enter the number of passengers : ");

for (let i = 0; i < n; i++) {
    var disp = read.question("Enter the passenger name : ");
    psngr.push(disp);

    
    
}
console.log(psngr);
let psngr1 = [];

for (let i = 0; i < psngr.length; i++) {
    const name1 = psngr[i];
    var count = 0;
   for (let j = 0; j < psngr.length; j++) {
    const name2 = psngr[j];
    if(name2 == name1)
    {
        count++;
    }
    
   }
   if(count>1){
    let hasFoundMatch = false;
    for (let i = 0; i < psngr1.length; i++) {
        if(psngr1[i] == name1){
            hasFoundMatch = true;
            break;
        }
    }
    if(!hasFoundMatch){
        psngr1.push(name1);
    }   
    }

}
console.log("Duplicate entry found : ");
console.log(psngr1);
    
