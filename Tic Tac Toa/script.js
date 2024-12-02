const newGame = document.querySelector(".newgame");
const reset = document.querySelector(".reset");
const showMsg = document.querySelector(".msg");
const boxes = document.querySelectorAll(".box");

let turn = true;
let count = 0;
const winningOrder = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
]

let resetGame = () => {
    turn = true;
    count = 0;
    enableBoxes();
}


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
            count++;
        } else {
            box.innerText = "O";
            turn = true;
            count++;
        }
        box.disabled = true;
        let iswinner = checkWinner();

        if (count == 9 && !iswinner) {
            showMsg.innerText = "Match - Draw !!";
        }
    })
});

let enableBoxes = () => {
    for (let box of boxes) {

        box.innerText = "";
    }
    box.disabled = false;
}

let disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const showWinner = (winner) => {
    showMsg.innerText = `congratulations!! ${winner} wins the game`;
    disableBoxes();
}


let checkWinner = () => {
    for (let order of winningOrder) {
        let boxVal1 = boxes[order[0]].innerText;
        let boxVal2 = boxes[order[1]].innerText;
        let boxVal3 = boxes[order[2]].innerText;


        if (boxVal1 != "" && boxVal2 != "" && boxVal3 != "") {
            if (boxVal1 === boxVal2 && boxVal2 === boxVal3) {
                showWinner(boxVal1);
                return true;
            }
        }
    }
}

newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);