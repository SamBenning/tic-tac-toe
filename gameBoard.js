const gameBoard = (() => {

    let board = [];
    let clickMode = 'X';
    let turnCounter = 0;
    let player1;
    let player2;
    let currentPlayer;


    const _initBoardArr = () => {
        for (i=0; i<9; i++) {
            board[i] = -1;
        }
    }

    const _initPlayers = () => {
        player1 = Player('Player 1');
        player2 = Player('Player 2');
        currentPlayer = player1;
        _setCurrentPlayerDisplay();
    }

    const _toggleCurrentPlayer = () => {
        if (currentPlayer == player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
        _setCurrentPlayerDisplay();
    }

    const _setCurrentPlayerDisplay = () => {
        turnDisplay.innerText = "Current Player: " + currentPlayer.getName();
    }


    const _victory = (symbol) => {
        let horizontalBoard = board;
        let verticalBoard = [
            board[6], board[3], board[0],
            board[7], board[4], board[1],
            board[8], board[5], board[2]
        ]
        let diagonalBoard = [
            board[0], board[4], board[8],
            board[2], board[4], board[6]
        ]

        let boards = [horizontalBoard, verticalBoard, diagonalBoard];

        for (i=0; i<3; i++) {
            let currBoard = boards[i];
            let consecCount = 0;
            for (j=0; j<currBoard.length; j++) {
                
                if (j%3 == 0) {
                    consecCount = 0;
                }
                if (currBoard[j] === symbol) {
                    console.log(symbol)
                    consecCount++;
                }
                //console.log("count for " + i + " = " + consecCount);
                if (consecCount == 3) {
                    return true;
                }
            }
        }
        console.log("=================================")
    }

    const initBoard = (squares) => {
        _initBoardArr();
        _initPlayers();
        squareIndex = 0;
        squares.forEach(
            square => {
                square.addEventListener('click', () => {
                    if (board[parseInt(square.id)] == -1) {

                        
                        square.innerText = clickMode;
                        setBoardElement(square.id, clickMode);
                        if (_victory(clickMode)) {
                            alert('VICTORY!!!!');
                        } else {
                            toggleClickMode();
                            _toggleCurrentPlayer();
                            turnCounter++;
                        }
                           
                        
                    }
                })
            square.id = String(squareIndex);
            squareIndex++;
            }
        )
    }

    const setBoardElement = (index, value) => {
        board[index] = value;
    }

    const toggleClickMode = () => {
        if (clickMode == 'X') {
            clickMode = 'O';
        } else {
            clickMode = 'X';
        }
    };

    const resetGameState = () => {
        _initBoardArr();
        turnCounter = 0;
        currentPlayer = player1;
        _setCurrentPlayerDisplay();
    }

    return {
        setBoardElement,
        initBoard,
        toggleClickMode,
        resetGameState
    };

})();