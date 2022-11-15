var read = require('readline-sync');
var psngr = [];
var n =read.question("Enter the number of passengers : ");

for (let i = 0; i < n; i++) {
    var disp = read.question("Enter the passenger name : ");
    psngr.push(disp);

    
    
}
console.log(psngr);

for (var i = 0; i < n; i++) {
    for (var j = i+1; j <= n; j++) {
        
        if(psngr[i] > psngr[j])
       
        {
            var t = psngr[i];
            psngr[i] = psngr[j];
            psngr[j] = t; 
        }
        
    }

       

    
}
 console.log("ascending order : " );
 console.log(psngr);
