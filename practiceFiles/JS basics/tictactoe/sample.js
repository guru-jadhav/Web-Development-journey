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
const newGame = document.getElementById("newGame");
const winnerDisplay = document.getElementById("winner");

// Initialize current player display
currentPlayerDisplay.innerText = `Current Player - ${currentPlayer}`;

function checkWin() {
    for (let i = 0; i < winningStates.length; i++) {
        const [a, b, c] = winningStates[i];
        if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            tiles[a].classList.add("win");
            tiles[b].classList.add("win");
            tiles[c].classList.add("win");
            return gameStatus[a];  // Return the winner ("X" or "O")
        }
    }
    return null;  // No winner
}

function handleTileClick(index) {
    newGame.style.zIndex = "1";
    count++;

    if (gameStatus[index] === "") {
        gameStatus[index] = currentPlayer;
        tiles[index].innerHTML = currentPlayer;
        tiles[index].classList.add("cursorNone");
        
        // Check if there's a winner
        const winner = checkWin();
        if (winner) {
            winnerDisplay.style.zIndex = "1";
            winnerDisplay.innerText = `Winner: ${winner}`;
            currentPlayerDisplay.style.zIndex = "-1";
            return;
        }

        // Check for tie (all tiles filled, no winner)
        if (count === 9) {
            currentPlayerDisplay.style.zIndex = "-1";
            winnerDisplay.style.zIndex = "1";
            winnerDisplay.innerText = "NO WINNER";
            return;
        }

        // Switch current player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        currentPlayerDisplay.innerText = `Current Player - ${currentPlayer}`;
    }
}

tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
        handleTileClick(index);
    });
});

newGame.addEventListener("click", () => {
    currentPlayer = "X";
    count = 0;
    currentPlayerDisplay.innerText = `Current Player - ${currentPlayer}`;
    gameStatus = ["", "", "", "", "", "", "", "", ""];
    
    tiles.forEach((tile) => {
        tile.innerHTML = "";
        tile.classList.remove("cursorNone");
        tile.classList.remove("win");
    });
    
    currentPlayerDisplay.style.zIndex = "1";
    winnerDisplay.style.zIndex = "-1";
    winnerDisplay.innerText = "";
    newGame.style.zIndex = "-1";
});
