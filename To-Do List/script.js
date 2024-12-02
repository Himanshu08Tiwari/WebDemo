const inputText = document.getElementById("input-text");
const addText = document.getElementById("search-btn");
const showlist = document.getElementById("add-list");


addText.addEventListener('click', () => {
    if (inputText.value === "") {
        alert("please write somthing first !!")
    }
    else {


        let task = document.createElement("li");
        let cancelTask = document.createElement("img");
        task.innerHTML = inputText.value;
        cancelTask.src = "assets/cancel.png";
        task.appendChild(cancelTask);
        showlist.appendChild(task);
    }
    inputText.value = "";
    saveData();

});

showlist.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("data", showlist.innerHTML);
}

function showData() {
    showlist.innerHTML = localStorage.getItem("data");
}

showData();