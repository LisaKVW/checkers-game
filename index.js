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

let playerTurn = true // toggle for turn
let whiteScore = 12 // each player has 12 pieces - once you have 0 you lose
let blackScore = 12

// ability to select a piece
let whitePiece = document.getElementsByClassName("white-piece")
let blackPiece = document.getElementsByClassName("black-piece")
let allPieces = document.getElementsByClassName("checkers-piece")
let playerPiece //for the toggle
let square = document.getElementsByClassName("square")

// Grabbing a Piece - adding click function to all
const grabPiece = () => {
    if (playerTurn) {
        for (let i = 0; i < whitePiece.length; i++) {
            whitePiece[i].addEventListener("click", selectedPiece)
        }
    } else {
        for (let i = 0; i < blackPiece.length; i++) {
            blackPiece[i].addEventListener("click", selectedPiece)
        }
    }
}
grabPiece()

// to grab the right piece - we need its ID and the ID of the square - this so we click on piece and move it to correct +7 or +9 square id
// NEED function - but first need id to pieces

// togggle between players
const selectedPiece = () => {
    if (playerTurn) {
        playerPiece = whitePiece
    } else {
        playerPiece = blackPiece
    }
}
selectedPiece()


// const selectedPiece = () => {
//     if (square +7 !== whitePiece[i]){
//         //then move
//     } if (square + 9 !== whitePiece[i]) {
//         //then move
// }
// }

// every piece can move 10/12/14/16/8 squares forward - as a row has 8 squares, this means piece can move +7 or +9 AND +14 & +18 (this because of the rows)
//  - if its a king we can go -7 AND -9 AND -14 & -18

// need variable to track game state - winner?
// function to add clicks on all the pieces - and what moves can I make? - show move
// once cell is clicked, and move is made - the onClick function need to be removed - and go the other player turn
// if piece is clicked - but player decides wants to move another one, should be able to 'let go' of piece and select different one
// when we want to make a move - we have to make sure the square is empty
// if the opposite player is occupying a square next to you and you can move diagnoloy you can move over the player (2 rows) and opposite player loses a piece

// const for White turn
// const for Black turn
// variable to know whos turn it is - like toggle
// when a piece is grabbed - we need to know which piece (.checkers-piece AND .white-piece || .black-piece) AND which board index  (square.id) ALSO need to know piece ID
// KING?? what are the rules? - King can move backward
