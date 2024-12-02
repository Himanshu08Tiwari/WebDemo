// Loops----

// for loop
/*
const cars = ["Tata", "Volvo", "BMW", "Mercedies", "jaguar",];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
*/

//While loop
/*
const marks = [58, 95, 82, 78,];

let i = 0;
while (i < marks.length) {
    console.log("The Marks of the students are ", marks[i]);
    i++;
}*/


// do-while loop
/*
const cars = ["Tata", "Volvo", "BMW", "Mercedies", "jaguar",];

let i = 0;
console.log("The list of cars are:");
do {
    console.log(cars[i]);
    i++;
} while (i < cars.length);
*/

//map
/*
const cars = ["tata", "volvo", "bmw", "mercedies", "jaguar",];

const newCars = cars.map((ele) => {
    return ele.toUpperCase()
});
for (let i = 0; i < newCars.length; i++) {
    console.log(newCars[i]);
}
*/

// for in loop
/*
let obj = {
    harsh: 90,
    naman: 47,
    rahul: 87,
    ritik: 65
}
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a])
};
*/

// for of

let Name = "Himanshu";
console.log("Characters of stringd are : ");

for (let val of Name) {
    console.log(val);
}
