let currentPlayer = "X";

const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let gameStatus = ["", "", "", "", "", "", "", "", ""];
let count = 0;

const tiles = document.querySelectorAll("[data-gameBoardTile]");
const currentPlayerDisplay = document.getElementById("currentPlayer");
currentPlayerDisplay.innerText = `Current Player - ${currentPlayer}`;
const newGame = document.getElementById("newGame");
const winnerDisplay = document.getElementById("winner");

function checkWin() {
    if ((gameStatus[0] === gameStatus[1] && gameStatus[1] === gameStatus[2]) && (gameStatus[0] !== "")) {
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "Winner : " + gameStatus[0];
        console.log("Win");
    } else if ((gameStatus[3] === gameStatus[4] && gameStatus[4] === gameStatus[5]) && (gameStatus[3] !== "")) {
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "Winner : " + gameStatus[3];
        console.log("Win");
    } else if ((gameStatus[6] === gameStatus[7] && gameStatus[7] === gameStatus[8]) && (gameStatus[6] !== "")) {
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "Winner : " + gameStatus[6];
        console.log("Win");
    } else if ((gameStatus[0] === gameStatus[3] && gameStatus[3] === gameStatus[6]) && (gameStatus[0] !== "")) {
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "Winner : " + gameStatus[0];
        console.log("Win");
    } else if ((gameStatus[1] === gameStatus[4] && gameStatus[4] === gameStatus[7]) && (gameStatus[1] !== "")) {
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "Winner : " + gameStatus[1];
        console.log("Win");
    } else if ((gameStatus[2] === gameStatus[5] && gameStatus[5] === gameStatus[8]) && (gameStatus[2] !== "")) {
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "Winner : " + gameStatus[2];
        console.log("Win");
    } else if ((gameStatus[0] === gameStatus[4] && gameStatus[4] === gameStatus[8]) && (gameStatus[0] !== "")) {
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "Winner : " + gameStatus[0];
        console.log("Win");
    } else if ((gameStatus[2] === gameStatus[4] && gameStatus[4] === gameStatus[6]) && (gameStatus[2] !== "")) {
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "Winner : " + gameStatus[0];
        console.log("Win");
    }
    // console.log(gameStatus);

    // if(count == 9){
    //     currentPlayerDisplay.style.zIndex = "-1";
    //     winnerDisplay.style.zIndex = "1";
    //     winnerDisplay.innerText = "NO WINNER";
    // }
}

function handelTileClick(index) {
    newGame.style.zIndex = "1";
    count++;
    if(count == 9){
        currentPlayerDisplay.style.zIndex = "-1";
        winnerDisplay.style.zIndex = "1";
        winnerDisplay.innerText = "NO WINNER";
    }
    if (gameStatus[index] === "") {
        gameStatus[index] = currentPlayer;
        tiles[index].innerHTML = currentPlayer;
        tiles[index].classList.add("cursorNone");
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        currentPlayerDisplay.innerText = `Current Player - ${currentPlayer}`;
        // console.log(gameStatus);
        checkWin();
    }
}


tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
        handelTileClick(index);
    })
});

newGame.addEventListener("click", () => {
    currentPlayer = "X";
    count = 0;
    currentPlayerDisplay.innerText = `Current Player - ${currentPlayer}`;
    gameStatus = ["", "", "", "", "", "", "", "", ""];
    tiles.forEach(tile => {
        tile.innerHTML = "";
        tileclassList.remove("cursorNone");
    });
    currentPlayerDisplay.style.zIndex = "1";
    winnerDisplay.style.zIndex = "-1";
    winnerDisplay.innerText = "";
    newGame.style.zIndex = "-1";
});