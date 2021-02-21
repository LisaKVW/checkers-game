console.log("javascript index.js connected")

const body = document.querySelector("body")
const board = document.querySelector(".board")
// const report = document.querySelector("#report")
// const report2 = document.querySelector("#report2")

/**
 * ============================
 *       Square Functions
 * ============================
 **/

const dragoverPreventDefault = (e) => e.preventDefault()

const addEventListeners = (square) => {
    square.addEventListener("dragover", dragoverPreventDefault)
    square.addEventListener("drop", dropPiece)
}

const addSquareClassesAndId = (square, i) => {
    square.classList.add("square")
    square.id = i + 1
}

const assignRowAndColumn = (square, counter) => {
    square.setAttribute("column", counter)
    square.setAttribute("row", counter)
}

const addSquareAttributes = (square, i, counter, squareColor) => {
    // square.style.backgroundColor = squareColor
    square.classList.add(`${squareColor}`)
    assignRowAndColumn(square, counter)
    addSquareClassesAndId(square, i)
    addEventListeners(square)
}

const createSquare = (evenColoredSquare, evenColoredRow, counter, i) => {
    const squareColor = chooseSquareColor(evenColoredSquare, evenColoredRow)
    const square = document.createElement("div")
    addSquareAttributes(square, i, counter, squareColor)
    return [ square, squareColor, (i + 1) ]
}

const chooseSquareColor = (evenColoredSquare, evenColoredRow) => evenColoredRow ?
    (evenColoredSquare ? "green" : "purple") :
    (evenColoredSquare ? "purple" : "green")

/**
 * ======================================================
 *               Checkers-Piece Functions
 * ======================================================
**/

const shouldPieceExist = (id) => id < 24 || id > 41


/**
 * ============================
 *  drag & drop functionality
 * ============================
 **/


const dragPiece = (e) => {
    // report.textContent = e.target.id
    e.dataTransfer.setData("text", e.target.id)
    console.log(e.dataTransfer.getData("text"))
}

const dropPiece = (e) => {
    e.preventDefault()
    console.log("firing")
    // report.textContent = "firing"
    let id = e.dataTransfer.getData("text")
    const piece = document.getElementById(id)

    // report2.textContent = `data: ${id}`
    e.target.appendChild(piece) // does this copy the element, or does it cut/paste the element
}

/**
 * =============================================
 *   checkers piece properties & configuration
 * =============================================
**/


const choosePieceColor = (id) => id < 24 ? "white" : "black"


const addListenersToPiece = (checkersPiece) => {
    checkersPiece.draggable = "true"
    checkersPiece.addEventListener("dragstart", dragPiece)
}


const addClassesAndId = (checkersPiece, color, id) => {
    checkersPiece.id = `${color} ${id}`
    checkersPiece.classList.add("checkers-piece")
    checkersPiece.classList.add(`${color}-piece`)
}


const addPieceToBoard = (square, color, id) => {
    const checkersPiece = document.createElement("div")
    addClassesAndId(checkersPiece, color, id)
    addListenersToPiece(checkersPiece)
    square.appendChild(checkersPiece)
}


/**
 * ============================
 *       Board Functions
 * ============================
**/

const setupBoard = () => {
    let evenColoredRow = true
    let counter = 0
    for (let i = 0; i < 64; i++) {
        const evenColoredSquare = i % 2 !== 0
        const [ square, squareColor, id ] = createSquare(
            evenColoredSquare, 
            evenColoredRow, 
            counter,
            i, 
        )
        const pieceColor = shouldPieceExist(id) && choosePieceColor(id)
        squareColor === "purple" && pieceColor && addPieceToBoard(square, pieceColor, id)
        board.appendChild(square)
        ++counter
        if (counter === 8) {
            evenColoredRow = !evenColoredRow
            counter = 0
        }
    }
}


/**
 * ============================
 *     Game Setup & Launch
 * ============================
**/





/**
 * ============================
 *     BULLSHIT
 * ============================
**/


const toPixels = (number) => `${number}px`

const flyToPosition = (piece, {left: newLeft, top: newTop}) => {

    piece.style.transform = "translate(0, 0)"

}

const stackThemAll = () => {
    const square32 = document.getElementById("32")
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => square.style.position = "relative")
    
    square32.style.position = "relative"
    square32.style.backgroundColor = "yellow"
    const coordinates32 = square32.getBoundingClientRect()

    const thePieces = document.querySelectorAll(".checkers-piece")

    thePieces.forEach((piece, index) => {
            
            const milliseconds = index / 10 * 1000
            setTimeout(() => piece.classList.add("in-position"), milliseconds)

    })
}


const playGame = () => {
    setupBoard()
    stackThemAll()
    // other functions...
}

playGame()


// let playerTurn = true 
// toggle for turn
// let whiteScore = 12 
// each player has 12 pieces - once you have 0 you lose
// let blackScore = 12

// ability to select a piece
// let whitePieces = document.getElementsByClassName("white-piece")
// let blackPieces = document.getElementsByClassName("black-piece")
// let allPieces = document.getElementsByClassName("checkers-piece")
// let playerPiece //for the toggle
// let square = document.getElementsByClassName("square")

// Grabbing a Piece - adding click function to all
// const grabPiece = () => {
//     if (playerTurn) {
//         for (let i = 0; i < whitePieces.length; i++) {
//             whitePieces[i].addEventListener("click", selectedPiece)
//         }
//     } else {
//         for (let i = 0; i < blackPieces.length; i++) {
//             blackPieces[i].addEventListener("click", selectedPiece)
//         }
//     }
// }






// to grab the right piece - we need its ID and the ID of the square - this so we click on piece and move it to correct +7 or +9 square id
// NEED function - but first need id to pieces

// togggle between players
// const selectedPiece = () => {
//     if (playerTurn) {
//         playerPiece = whitePieces
//     } else {
//         playerPiece = blackPieces
//     }
// }
// selectedPiece()




// human perspective

/* move to a space in front of you, but no back (unless theres a king)  */  
// this means two things: 
// 1. you need to keep track of whether or not a piece is "normal" or "king"
// 2. You need a way to keep track of places in front of you, 

// ==> a piece needs a class to indicate whether or not it's a king or normal piece
// ==> when each piece is created they're given a default "normal-piece" class
// ==> add row numbers to the board 
// ==> normal black pieces can move to row numbers less than the row they're currently positioned on
// ==> normal white pieces can move to row numbers less than the row they're currently positioned on


/* you can only move diagonally*/

// you need to keep track of piece color -- any attempt to do it by square index number causes problems on the 
// end columns. 
// ==> Therefore, we need column numbers to allow special logic for columns 1 and 8 (end columns)
// ==>  This means that each square needs a column and row property
// ==>  once we have rows and columns numbered, we know that each piece on columns 2-7 can move to the column numbers
// ==> 1 greater and 1 less than the occupied column-space
// ==> if a piece is on column 1 or 8, it can move to columns 2 and 7 respectively

/* you can't move to a space already occupied by another one of your pieces */
/* when you diagonally jump an opponents piece, you can double jump more opponents pieces */

// you need to know which spaces in front of and connected to your piece have another piece on them
// after that, you need to know whether it's a friendly or opponent piece
// ==> you need to "select" the diagonally connected squares
// ==> check to see if they have children
// ==> ==> if they have children, check their color-class to determine if its friendly or opponent
// ==> ==> ==> if it's friendly, you can't move there -- we're done
// ==> ==> ==> if it's an opponent, you must check to see if you can jump it
// ==> ==> ==>  this means you need to check the diagonally connected squares behind the opponent piece
// ==> ==> ==> ==> if there's an available space behind the opponent, you must jump to it
// ==> ==> ==> ==> ==> repeat the entire process after the successful jump

// you need to keep track of open spaces to jump to behind opponents pieces

// the process of determining whether or not you can jump an opponents piece is repeated after a successful jump


// come back to this later
/* if you have a king, it can move in any diagonal direction */
// for kings, you remove any logic dealing with only being able to move forward
// all other rules apply

/* we don't think about pieces by number - they're all the same */
// we check the board for pieces -- not the pieces themselves

/*  you lose when you run out of pieces or forfeit */
// you need a way to keep track of your pieces count
// also, give player option to restart/forfeit









// const selectedPiece = () => {
//     if (square +7 !== whitePieces[i]){
//         //then move
//     } if (square + 9 !== whitePieces[i]) {
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





// []
// {}
// ""
// int


