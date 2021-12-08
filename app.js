const squares = document.querySelectorAll('div.game-square');
const resetBtn = document.querySelector('button.reset');
const selectorBtn = document.querySelector('button.selector');
const turnDisplay = document.querySelector('p.turn-display');



resetBtn.addEventListener('click', () => {
    squares.forEach( square => {
        square.innerText = "";
    })
    gameBoard.resetGameState();
})

selectorBtn.addEventListener('click', () => {
    if (selectorBtn.innerText == "X") {
        selectorBtn.innerText = "O";
    } else {
        selectorBtn.innerText = "X";
    }

    gameBoard.toggleClickMode();

})



gameBoard.initBoard(squares);