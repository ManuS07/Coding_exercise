var read = require("readline-sync");
var dob = read.question("Please enter your Date of Birth(dd-mm-yyyy) :  ");

var currentYear = 2022;
var s = dob.split('-');
var age = currentYear - s[2];
if(age <= 10 ){
    console.log("Kid");
}
else if(age > 10 && age < 30){
    console.log("Youth");
}
else if(age >= 30 && age < 60){
    console.log("Adult");
}
else if(age >= 60){
    console.log("Senior Citizen");
}
