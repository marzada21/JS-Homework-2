// JS Homework #2 //

// ----- Exercise 1 ----- //

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    for (let foodType in person) {
        console.log(`${foodType}:`);
        if (Array.isArray(person[foodType])) {
            // If it's an array, iterate through the items
            person[foodType].forEach(item => {
                console.log(`  - ${item}`);
            });
        } else if (typeof person[foodType] === 'object') {
            // If it's an object, iterate through its properties
            for (let place in person[foodType][0]) {
                console.log(`  - ${place}: ${person[foodType][0][place]}`);
            }
        } else {
            console.log(`  - ${person[foodType]}`);
        }
    }
}

displayFavoriteFoods(person3);

// ----- Exercise 2 ----- //

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    addAge = (years) => {
        this.age += years;
    };
}

let person1 = new Person('John', 25);
let person2 = new Person('Alice', 30);

person1.printInfo();
person2.printInfo();

person1.addAge(3);

console.log("After incrementing age:");
person1.printInfo();
person2.printInfo();

// ----- Exercise 3 ----- //

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 9) { // index starts counting at 0, so i used 9
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

checkStringLength("HelloWorld") // this is 10 characters if above was set to 10 it would count as a 'Small Number'
    .then(result => console.log(result))
    .catch(error => console.log(error)); 
checkStringLength("Hello")
    .then(result => console.log(result))
    .catch(error => console.log(error));