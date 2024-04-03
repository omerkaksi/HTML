//Arrays

const myArray=[];
myArray[0]="Dave";
myArray[1]=1001;
myArray[2]=false;

console.log(myArray);
console.log(myArray.length);
//last element
console.log(myArray[myArray.length-1]);

console.log(myArray[1]);

myArray.push("school");// return value is length
console.log(myArray);

const lastItem=myArray.pop(); //return  values isl ast item
console.log(myArray);

const newLength=myArray.unshift(42);
console.log(newLength);
console.log(myArray);

const firstItem=myArray.shift();//all positions are shifted
console.log(firstItem);
console.log(myArray);

/* delete myArray[1];//no position change, undefined data
console.log(myArray); */
/* myArray.splice(1,1);
console.log(myArray); */
myArray.splice(1,1,42);//replace
console.log(myArray);
myArray.splice(1,0,47);//add
console.log(myArray);

const myyArray = ["A" , "B","C","D","E","F"];
const newArray=myyArray.slice(2,5);
console.log(newArray);
myyArray.reverse();
console.log(myyArray);

const newString= myyArray.join();
console.log(newString);

const nArray=newString.split(",");
console.log(nArray);

const myyArrayA = ["A" , "B","C"];
const myyArrayB = ["D","E","F2"];
const n2Array=myyArrayA.concat(myyArrayB);
console.log(n2Array);

const n3Array=[...myyArrayA, ...myyArrayB];
console.log(n3Array);

const AA=[1,2,3,4];
const BB=[6,7,8,9];

const AB=[AA,BB];
console.log(AB[1][2]); ///nested arrays 
const CC=[1,2,3,4];
const DD=[6,7,8,9];
const CD=[CC,DD];
const ABCD=[AB,CD];
console.log(ABCD);
console.log(ABCD[0][1][2]);
