// Alert prompt Confirm


const d = new Date();

if (d.getHours() < 12) {
    alert("Hey good morning !!");
} else {
    alert("Hey good Evening !!");
}




let user = prompt("Enter Your Name..");

if (user != null) {
    document.write(`Hey ${user}, Welcome On Server`);
} else {
    document.write("No User Present");
}



let response = confirm("Do you want to confirm your booking?");

if (response) {
    document.write("Booking Confirmed");
} else {
    document.write("Booking Not Confirmed");
}