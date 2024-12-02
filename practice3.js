// Array
/*
let marks = [11, 12, 13, 14];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);

let marks1 = [11, 12, 13, 14, false, "Absent"];
console.log(marks1);
console.log(marks1.length);

marks1[0] = 15;
console.log(marks1);

*/

// Array Methods


/*
let num = [1, 2, 3, 45, 56]

let num2 = num.toString();
console.log(num2);

let c = num.join("_");
console.log(c);
console.log(c, typeof c);

num.pop();
console.log(num);

let r = num.pop();
console.log(num, r);

let b = num.push(34);
console.log(num, b);

let d = num.shift();
console.log(num, d);

let e = num.unshift(34);
console.log(num, e);

*/

/*
let num = [1, 2, 3, 4, 6, 8];
delete num[0];
console.log(num);

// concat

let num1 = [101, 112, 12, 313, 14];
let newArray = num.concat(num1);
console.log(newArray);

// sort
num1.sort();
console.log(num1); // sort alphabatically

let compare = (a, b) => {
    return a - b
};
num1.sort(compare);
console.log(num1);

num1.reverse();
console.log(num1);

*/

// splice and slice
/*
let num = [12, 13, 14, 15, 16, 17, 18];
console.log(num);
num.splice(2, 3, 1021, 1023, 1123, 1323);
console.log(num);

let newNum = num.slice(3, 5);
console.log(newNum);


for (let i = 0; i <= num.length; i++) {
    console.log(num[i]);
}

num.forEach((element) => {
    console.log(element * element);
})

*/


// map filter reduce

let arr = [43, 45, 56, 76];
console.log(arr);

let a = arr.map((value) => {
    // console.log(value)
    return value + 1
})
console.log(a);



let arr2 = [233, 24, 5, 56, 3]
let a2 = arr2.filter((a) => {
    return a < 10
})
console.log(a2);


let arr3 = [1, 2, 3, 4, 5];
let a3 = arr3.reduce((h1, h2) => {
    return h1 + h2
});
console.log(a3);