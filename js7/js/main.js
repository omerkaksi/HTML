// If statements
/* let customerIsBanned=false;
let soup="chicken noodle soup";
let reply;
let crackers=true;
if (customerIsBanned){
    console.log("no soup");
}
else if (soup && crackers) {
reply= `Here is your order of ${soup}`;
}
else{
 reply=`Sorry no ${soup}`;
}
console.log(reply); */

/* let testScore=81;
let collegeStudent=true;
let grade;
if (testScore>=90){
    grade="AA";
}
else if(testScore>=80){
    grade="BB";
}
console.log(grade); */

switch(2){
case 1: console.log(1);
break;
case 2: console.log(2);
break;
case 3: console.log(3);
break;
default: console.log("no match")

}

let testScore=71;
let myGrade= testScore > 90 ? "AA"
: testScore>80? "BB" 
: testScore>70? "cc"
: "yeter";
 console.log(myGrade +` notum şu ki ${myGrade}`);
