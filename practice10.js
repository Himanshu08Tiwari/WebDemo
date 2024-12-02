// object in javascript

// object has two main things-
//               properties/method
//               Action/Function

/*
let person = {
    firstName: "Himanshu",
    lastName: "Tiwari",
    sayHello: () => {
        console.log("Hey Hello!!");
    }
};


person.age = 21; //add new properties

console.log(person);

delete person.lastName;


console.log(person);

console.log(person.lastName);//Dot based accessing
console.log(person["lastName"]); // array based accessing


console.log('height' in person); //check the property exist or not. output in true or false

for (let key in person) {
    console.log(key);
}


person.sayHello = function () {
    console.log("Hey Hello!!");
}

person.sayHello();

*/






// Ek object ke andar dusre object ki property lena....


let person = {
    firstName: "Himanshu",
    lastName: "Tiwari",
    /* sayHello() {
         console.log("Hey! I am " + this.firstName + " and I have a " + car.brand + " car.");
     }*/

    get getName() {
        return this.firstName.toUpperCase();
    },  // get karne ke liye


    /**
     * @param {string} n
     */
    set setname(n) {
        this.firstName = n.toUpperCase();
    }  // set krne ke liye
};
/*
let car = {
    brand: 'TATA',
    model: 'Safari'
};

person.sayHello();
*/

// Getter And Setter in an Object-
// Jab Method ko Property ki trh call krna ho....

console.log(person.getName);
