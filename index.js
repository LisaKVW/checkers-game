console.log("javascript index.js connected")

const body = document.querySelector("body")
const board = document.querySelector(".board")


const createBoard = () => {
    const textColor = "white"
    let evenColoredRow = true
    let colorCounter = 0
    for (let i = 0; i < 64; i++) {
        const evenColoredSquare = i % 2 !== 0
        const squareColor = evenColoredRow ?
            (evenColoredSquare ? "green" : "purple") :
            (evenColoredSquare ? "purple" : "green")

        const square = document.createElement("div")
        square.classList.add("square")

        square.id = i + 1

        square.style.backgroundColor = squareColor
        if (squareColor === "purple" && square.id < 24) {
            makePlayerOnePiece(square)
        } else if (squareColor === "purple" && square.id > 41) {
            makePlayerTwoPiece(square)
        }

        board.appendChild(square)
        ++colorCounter
        if (colorCounter === 8) {
            evenColoredRow = !evenColoredRow
            colorCounter = 0
        }
    }
}

const makePlayerOnePiece = (square) => {
    const whitePiece = document.createElement("div")
    whitePiece.classList.add("white-piece")
    whitePiece.classList.add("checkers-piece")
    square.appendChild(whitePiece)
}

const makePlayerTwoPiece = (square) => {
    const blackPiece = document.createElement("div")
    blackPiece.classList.add("black-piece")
    blackPiece.classList.add("checkers-piece")
    square.appendChild(blackPiece)
}


//pieces of the board that will not be used are white (green)- dark ones (purple) are used in the game
//color = purple have player on it
//green never used



// const setBoardPlayerTop = () => {
//     for (let i = 1; i < 25; i++){
//         if (i % 2 !== 0){
//             const playerSquare = document.getElementById(`${i}`)
//             playerSquare.style.backgroundColor = "purple"
//         }
//     }
// }


// const setBoardPlayerBottom = () => {
//     for (let i = 41; i < 65; i++){
//         if (i % 2 === 0){
//             const playerSquare = document.getElementById(`${i}`)
//             playerSquare.style.backgroundColor = "blue"
//         }
//     }
// }


createBoard()

// setBoardPlayerTop()
// setBoardPlayerBottom()