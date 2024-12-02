// RegEx :
/*
let str = "This is improve file for improve project";

let reg = /Improve/i;
//let reg = /improve/g;

let response = reg.exec(str);
console.log(response);

response = reg.exec(str);
console.log(response);
*/

// test
/*
let str = "This is improve file for improve project";

let reg = /Improve/g;

let reg1 = /Improve/i;

let response = reg.test(str);
console.log(response);

response = reg1.test(str);
console.log(response);
*/
// match
/*
let str = "This is improve file for improve project";

let reg = /improve/g;
let reg1 = /Improve/g;

let result = str.match(reg);
console.log(result);

result = str.match(reg1);
console.log(result);
*/


// search
/*
let str = "This is improve file for improve project";

let reg = /improve/g;
let reg1 = /Imprrrove/g;

let result = str.search(reg);
console.log(result);

result = str.search(reg1);
console.log(result);

*/


// Replace
/*
let str = "This is improve file for improve project";

let reg = /improve/g;
let reg1 = /Imprrrove/g;

let result = str.replace(reg, 'code improve');
console.log(result);

result = str.search(reg, 'code improve');
console.log(result);
*/


// Meta characters

let str = "This is coco improve file for improve project color";

let reg = /improve/g;
reg = /^This/;
//reg = /project$/;
reg = /projectt$/;

reg = /f.le/; // match single chrac.
reg = /f*le/; // for 0 or more

reg = /colou?r/; // optional
reg = /colou\?r/; // for sp. charc.
reg = /\w+rove/; // word match
reg = /\W+rove/; // start with ' ', _, alphabet, num.

reg = /\drove/; // check digit
reg = /\D+rove/; // check non digit

reg = /imp[tyr]ove/; // check t y r
reg = /imp[a-zA-Z]ove/;
reg = /imp[^rxz]ove/;

reg = /co{2}l/;
reg = /co{0,2}l/;
reg = /(code|co){2}/;

if (reg.test(str)) {
    let finalResponse = reg.exec(str);
    console.log(finalResponse);
} else {
    console.log('Match Not Found');
}

