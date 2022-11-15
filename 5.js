var fare = [];
var a = 0;
var b = 1;
var read = require("readline-sync");
var limit = parseInt(read.question("Please enter the number of elements : "));
for (let i = 0; i <limit; i++) {
    var element = parseInt(read.question("Please enter the elements : "));
    if(element%2 == 0 ){
        fare[a]= element;
        a = a+2;
    }
    else{
        fare[b] = element;
        b = b +2;
    }
    
}
console.log(fare);
