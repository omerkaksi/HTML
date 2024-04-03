//Objects
//key-value pairs in curly braces
const myObj ={ name:"Dave"};
console.log(myObj.name);

const anotherObj={
    alive:true,
    answer:42,
    hobbies:["Eat","Sleep","Code"],
    beverage:{
        morning:"Coffee", afternoon:"Iced Tea"
    },
    action: function(){
        return `Time for ${this.beverage.morning}`;
    }
}
console.log(anotherObj.answer);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj["beverage"]);
console.log(anotherObj["alive"]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());//call a method


const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrrooooom!"
    }
}

const truck=Object.create(vehicle);
    truck.doors=2;
    console.log(truck);
    console.log(truck.wheels);//inherit
    console.log(truck.engine());
    const car=Object.create(vehicle);
    car.doors=4;
    car.engine= function() {
        return "Whoooooosh";
    }
    console.log(car.engine());

    const tesla=Object.create(car);
    console.log(tesla.wheels);

    const band ={vocals:"robert",
guitar:"jimmy", bass:  "john", drums: "bonham"};

delete band.drums
console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(band[job]);
    console.log(`On ${job}, it's ${band[job]}`);
}
//destructring objects
const {guitar: myVariable, bass:myBass}=band;
console.log(myVariable);
console.log(myBass);
const {vocals,guitar, bass, drums}=band;
console.log(vocals);
console.log(guitar);

function sings ({ vocals }){
    return `${vocals} sings`; }
console.log(sings(band));