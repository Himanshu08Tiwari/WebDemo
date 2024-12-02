//               Hoisting

console.log(double(5));

function double(num) {
    return num * 2;
};


hello();

function hello() {
    console.log('Hello world!');
}

hello();



// Block , local and global scope:

if (true) {
    const Name = "Himanshu";
    console.log(Name);
}

console.log(Name);


function myName() {
    if (true) {
        var Name = "Himanshu";
    }
    console.log(Name);
}

myName();


