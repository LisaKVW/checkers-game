console.log("javascript index.js connected")

const body = document.querySelector("body")
const board = document.querySelector(".board")


/**
 * ============================
 *  Square Functions
 * ============================
 **/

const createSquare = (evenColoredSquare, evenColoredRow, i) => {
    const squareColor = chooseSquareColor(evenColoredSquare, evenColoredRow)
    const square = document.createElement("div")
    square.classList.add("square")
    square.id = i + 1
    square.style.backgroundColor = squareColor
    return [square, squareColor, (i + 1)]
}

const chooseSquareColor = (evenColoredSquare, evenColoredRow) => evenColoredRow ?
    (evenColoredSquare ? "green" : "purple") :
    (evenColoredSquare ? "purple" : "green")

/**
 * ============================
 *  Checkers-Piece Functions
 * ============================
 **/

const choosePieceColor = (id) => id < 24 ? "white" : "black"


const shouldPieceExist = (id) => id < 24 || id > 41

const addPieceToBoard = (square, color) => {
    const checkersPiece = document.createElement("div")
    checkersPiece.classList.add("checkers-piece")
    checkersPiece.classList.add(`${color}-piece`)
    square.appendChild(checkersPiece)
}


/**
 * ============================
 *  Board Functions
 * ============================
 **/

const setupBoard = () => {
    let evenColoredRow = true
    let colorCounter = 0
    for (let i = 0; i < 64; i++) {
        const evenColoredSquare = i % 2 !== 0
        const [square, squareColor, id] = createSquare(evenColoredSquare, evenColoredRow, i)
        const pieceColor = shouldPieceExist(id) && choosePieceColor(id)
        squareColor === "purple" && pieceColor && addPieceToBoard(square, pieceColor)

        board.appendChild(square)
        ++colorCounter
        if (colorCounter === 8) {
            evenColoredRow = !evenColoredRow
            colorCounter = 0
        }
    }
}

/**
 * ============================
 *  Game Setup & Launch
 * ============================
 **/

const playGame = () => {
    setupBoard()
    // other functions...
}


playGame()

let playerTurn = true

// const for White turn
// const for Black turn
// variable to know whos turn it is - like toggle
// when a piece is grabbed - we need to know which piece (.checkers-piece AND .white-piece || .black-piece) AND which board index  (square.id) ALSO need to know piece ID
// KING?? what are the rules? - King can move backward

// need variable to track game state
// function to add clicks on all the pieces - and what moves can I make? - show move
// once cell is clicked, and move is made - the onClick function need to be removed - and go the other player turn
// if piece is clicked - but player decides wants to move another one, should be able to 'let go' of piece and select different one
// when we want to make a move - we have to make sure the square is empty
// if the opposite player is occupying a square next to you and you can move diagnoloy you can move over the player (2 rows) and opposite player loses a piece
