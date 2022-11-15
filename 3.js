/*   Displaying array  */
var read = require('readline-sync') ;
var fare = [];
for (let i = 0; i < 10; i++) {
    var f = parseInt(read.question("Enter the fare :  "));
    fare.push(f);
    
}
console.log(fare);

/*  Searching */
var nam = parseInt(read.question("Enter name to search : "));
for (let i = 0; i < fare.length; i++) {
   if(nam == fare[i]){
    console.log("The searched name is : "+ fare[i] + "  and is in the position : " + i+ " of the array");
    break;
   }
 
    
}

/*  Ascending order  */
for (let i = 0; i < 10; i++) {
    for (let j = i+1; j <= 10; j++) {
        {
            if(fare[i] > fare[j]){
                var t = fare[i];
                fare[i]= fare[j];
                fare[j]= t;
            }
        }
        
    }
    
}
console.log("Ascending order : "  );
console.log(fare);


/*   Descending Order  */

for (let i = 0; i < 10; i++) {
    for (let j = i+1; j <= 10; j++) {
        {
            if(fare[i] < fare[j]){
                var t = fare[i];
                fare[i]= fare[j];
                fare[j]= t;
            }
        }
        
    }
    
}
console.log("Descending order : "  );
console.log(fare);


/* Max and min elements  */ 
let max = fare[0];
for (let i = 0; i < fare.length; i++) {
    if(fare[i] > max){
        max = fare[i];
    }
   
    
        
    
    
}
console.log("The max value in the array :  " + max);

let min = fare[0];
for (let i = 0; i < fare.length; i++) {
    if(fare[i] < min){
        min = fare[i];
    }
   
    
        
    
    
}
console.log("The min value in the array : " + min);


/*  Duplicate Elements  */


let fareDup = [];

for (let i = 0; i < fare.length; i++) {
    const fare1 = fare[i];
    var count = 0;
   for (let j = 0; j < fare.length; j++) {
    const fare2 = fare[j];
    if(fare2 == fare1)
    {
        count++;
    }
    
   }
   if(count>1){
    let hasFoundMatch = false;
    for (let i = 0; i < fareDup.length; i++) {
        if(fareDup[i] == fare1){
            hasFoundMatch = true;
            break;
        }
    }
    if(!hasFoundMatch){
        fareDup.push(fare1);
    }   
    }

}
console.log("Duplicate entry found : ");
console.log(fareDup);


