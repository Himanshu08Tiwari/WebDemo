// Generate Random Number

//   let x = Math.floor(Math.random() * 10);


// Kisi Specific range me Number print karani ho to uske liye function:


/*
function getRandom(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
}





console.log(getRandom(20, 30));

*/





//            Date Object in js


/*
let x = new Date();

console.log(x);

*/







///                        object ka constructor


/*
function Student(first, last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}


Student.prototype.nationality = "Indian";

var student1 = new Student("Himanshu", "Tiwariii", 25, 5);
var student2 = new Student("Shivanshu", "Tiwari", 20, 6);


console.log(student1.nationality);
*/




///              object ke andar object ....bole to Nested Object


var user = {
    id: 101,
    email: "abc@gmail.com",
    personalInfo: {
        name: "abc",
        address: {
            street: "janta college college",
            city: "Rewa",
            country: "India",
        }
    }
}

console.log(user.personalInfo.address)