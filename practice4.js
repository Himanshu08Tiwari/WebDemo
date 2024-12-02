// COnditional statements....

/*let a = prompt("Hey Whats your age?");
a = Number.parseInt(a);
if (a < 0) {
    alert("invalid age !!");
}
else if (a < 9) {
    alert("You are kid!!")
}
else if (a < 18 && a >= 9) {
    alert(" You are kid and you can think of driving after 18 !!")
}
else {
    alert("You can drive !!")
}*/

/*
for (let i = 0; i < 5; i++) {
    console.log(i);
};

*//*
// for in loop
let obj = {
    harsh: 90,
    naman: 47,
    rahul: 87,
    ritik: 65
}
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a])
};

// for of loop
for (let b of "Himanshu") {
    console.log(b);
}*/

/*

//while loop
var i = 0, j = 1, k;
console.log("Fibonacci series less than 20: ");
while (i < 20) {
    console.log(i);
    k = i + j;
    i = j;
    j = k;
}

// do while loop

let num = 2;
console.log("Even Numbers less than 10");
do {
    console.log(num)
    num = num + 2;
} while (num < 10)*/





// Functions--

const userName = {
    firstName: "Himanshu",
    lastName: "Tiwari",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(userName.fullName());

// call function

const newUser = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const userName2 = {
    firstName: "Himanshu",
    lastName: "Tiwari"
}
const userName3 = {
    firstName: "Shivanshu",
    lastName: "Tiwari"
}

console.log(newUser.fullName.call(userName3));
console.log(newUser.fullName.call(userName2));

console.log("function bind---");

// function bind

const member = {
    firstName: "Rahul",
    lastName: "Tiwari",
}

let fullName = userName.fullName.bind(member);
console.log(fullName())

// function apply
console.log("function apply---");
const tempUser = {
    firstName: "Arjun",
    lastName: "Tiwari"
}
console.log(newUser.fullName.apply(tempUser));



