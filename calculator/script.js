
let dspText = document.getElementById("text");

let string = "";
let buttons = document.querySelectorAll("button");
let arr = Array.from(buttons);

arr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            dspText.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            dspText.value = string;
        }
        else if (e.target.innerHTML == 'Clr') {
            string = string.substring(0, string.length - 1);
            dspText.value = string;
        }
        else {
            string += e.target.innerHTML;
            dspText.value = string;
        }
    })
})