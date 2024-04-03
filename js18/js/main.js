//Factory functions
/* function pizzaFactory(pizzaSize){
    const crust="original";
    const size=pizzaSize;
    return {
        bake: ()=> console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}

const myPizza= pizzaFactory("small");
myPizza.bake(); */

//Classes   //super class
class Pizza{
    crust="original";      //public
    #sauce="traditional"; //private field
    #size;
    constructor(pizzaSize){
        this.#size=pizzaSize;
            }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }
    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}
const myPizza= new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.crust);