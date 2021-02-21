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
        const [ square, squareColor, id ] = createSquare(evenColoredSquare, evenColoredRow, i)
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
