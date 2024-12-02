/*let str = "*";
let space = " ";


for (let i = 1; i <= 5; i++) {
    console.log(str.repeat(i));
}

console.log("/-------------------/");

for (let i = 5; i >= 1; i--) {
    console.log(str.repeat(i));
}

console.log("/-------------------/");

for (let i = 0; i < 5; i++) {
    console.log(space.repeat(i) + str.repeat(5 - i));
}
console.log("/-------------------/");

for (let i = 1; i <= 5; i++) {
    console.log(space.repeat(5 - i) + str.repeat(i));
}

console.log("/-------------------/");

for (let i = 1; i <= 5; i++) {
    console.log(space.repeat(5 - i) + str.repeat(i * 2 - 1));
}

console.log("/-------------------/");

for (let i = 5; i >= 1; i--) {
    console.log(space.repeat(5 - i) + str.repeat(i * 2 - 1));
}

console.log("/-------------------/");

*/



let str = "*";
let space = " ";

for (let i = 1; i <= 5; i++) {
    console.log(str.repeat(i));
}

for (let i = 4; i >= 1; i--) {
    console.log(str.repeat(i));
}

console.log("/-------------------/");

for (let i = 1; i <= 5; i++) {
    console.log(space.repeat(5 - i) + str.repeat(i));
}

for (let i = 1; i < 5; i++) {
    console.log(space.repeat(i) + str.repeat(5 - i));
}

console.log("/-------------------/");

for (let i = 0; i < 5; i++) {
    console.log(space.repeat(i) + str.repeat(5 - i));
}

for (let i = 2; i <= 5; i++) {
    console.log(space.repeat(5 - i) + str.repeat(i));
}