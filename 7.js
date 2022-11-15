var read = require("readline-sync");
var psngr_name = read.question("Please enter your name : ");
var distance = parseInt(read.question("Please enter the distance travelled : "));
var flyer_pts = 100;

if(distance >=10000){
    flyer_pts = flyer_pts + 10;
    console.log(" Dear " + psngr_name + " ,you are awarded with 10 flyer points. Your total is : "+ flyer_pts);


}
else if(distance >=20000){
    flyer_pts = flyer_pts + 20;
    console.log(" Dear " + psngr_name + " ,you are awarded with 20 flyer points. Your total is : "+ flyer_pts);

}
else if(distance >=50000){
    flyer_pts = flyer_pts + 30;
    console.log(" Dear " + psngr_name + " ,you are awarded with 30 flyer points. Your total is : "+ flyer_pts);


}
else if(distance >=100000){
    flyer_pts = flyer_pts + 50;
    console.log(" Dear " + psngr_name + " ,you are awarded with 50 flyer points. Your total is : "+ flyer_pts);


}
else{
    console.log("Dear " + psngr_name + " Better luck next time ;) ");
}
