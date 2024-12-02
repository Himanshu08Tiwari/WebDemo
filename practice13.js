//implicit
/*
function sayHello() {
    console.log(this.greet)
};


let greet1 = {
    greet: 'Hello',
    sayHello: sayHello
};

let greet2 = {
    greet: 'hi',
    sayHello: sayHello
};

greet1.sayHello();
greet2.sayHello();

//explicit

const newObj = {
    greet: 'Hello',
    func: function sayHello() {
        console.log(this.greet);
    },
}
newObj.func();*/



//callback
/*
function sayHello() {
    console.log("Hello");
};

function sayHi() {
    console.log("Hii..");
};

function add(num1, num2, callback) {
    console.log(num1 + num2);
    callback();
};

let a = 10;
let b = 20;

add(a, b, sayHello);
add(30, 10, sayHi);


add(30, 10, function () {
    console.log("Bye !!")
});
*/

//set in js

let set = new Set();

let Name1 = { name: "Himanshu" };

let Name2 = { name: "Rahul" };
let Name3 = { name: "Arjun" };


set.add(Name1);
set.add(Name2);
set.add(Name3);


console.log(set.size);

for (let user of set) {
    console.log(user.name);
};

console.log(set.delete(Name3));


console.log(set.has(Name2));

console.log(set.has('Arjun'));

set.clear();

console.log(set);