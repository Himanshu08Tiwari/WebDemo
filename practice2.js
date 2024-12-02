/*
let myname = "Himanshu";
console.log(myname);
console.log(myname.length);

// Accessing string characters

console.log(myname[0]);
console.log(myname[1]);

//Template literal in string

let child1 = "Aman";
let child2 = "Prabhat";

let Sentence = `${child1} is a friend of ${child2}`;
console.log(Sentence);
*/

// Escape Sequence Character
/*
let fruit = 'Bana\'na';
let fruit1 = 'Bana\nna';
let fruit2 = 'Bana\tna';
let fruit3 = 'Bana\rna';
console.log(fruit);
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

*/


// String Methods-
/*
let Name = "LeopardRuns";

console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

console.log(Name.slice(0, 7));
console.log(Name.slice(7));

let myname = "Himanshu";
console.log(myname);
console.log(myname.replace("Him", "Shiv"));
*/


// concat
let Name = "Himanshu";
let friend = "Naman";
console.log(Name.concat(" is a friend of ", friend, " okay!!"));

let friend2 = "        Meena      ";
console.log(friend2);
console.log(friend2.trim());

// split
let company = "LeopardRuns Innovation Technology";
console.log(company.split(" "));

console.log(company.search('Innovation'))