//Functions

//Methods = Built-in functions

//Function declaration syntax

/* function sum(num1,num2){
    
    if(num2===undefined){
        return 2*num1;
    }
    console.log(num1);

 console.log(num2);
    return num1+num2;
}
console.log(sum(2)); */

/* function  getUserNameFromEmail(email){
return email.slice(0, email.indexOf("@"));
} */
/* (email)=> arrow function */
const getUserNameFromEmail= function (email){
    return email.slice(0, email.indexOf("@")); 
}
console.log(getUserNameFromEmail("playeraane@SomeRndmEmail.com"));

const toProperCase = (ad)=> {
    return ad.charAt(0).toUpperCase()+ad.slice(1).toLowerCase();
}
console.log(toProperCase("dAvrRTNBf"));
