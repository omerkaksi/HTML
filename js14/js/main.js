//var, let and const

/* const x=1;
 x=2;
console.log(x); */
//global scope
var x=1;
let y=2;
const z=3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc(){
 
{
    var x=11; //function scoped var is avalaible
    const z=6;//block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
}
var x=10;
const z=5;
console.log(`function: ${x}`);
console.log(`function: ${y}`);
console.log(`function: ${z}`);

}
myFunc();