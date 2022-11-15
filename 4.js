var read = require("readline-sync");
var dob = read.question("Please enter your Date of Birth(dd-mm-yyyy) :  ");

var currentYear = 2022;
var s = dob.split('-');
var age_year = currentYear - s[2];
console.log("Age in year : " + age_year);
var age_months = age_year*12;
console.log("Age in months : " + age_months) ;
var age_weeks = age_months*4;
console.log("Age in weeks : " + age_weeks);
var age_days = age_weeks*7;
console.log("Age in days : " + age_days);
var age_hr = age_days*24;
console.log("Age in hour : " + age_hr);

if(s[2]% 4 == 0){
    console.log("It is a leap year ");


}
else{
    console.log("It is not a leap year ");
}

