var read = require('readline-sync');
var flight_nos = [];
var value = true;

while(value){
    
        var disp = read.question("Enter the flight number : ");
        flight_nos.push(disp);
        var choice = read.question("Do you want to continue (Y/N) : ");
       
        if(choice == "Y"){
            continue;

        }   
        else if(choice == "N"){
            value = false;
        }     
        
    }

console.log(flight_nos);
