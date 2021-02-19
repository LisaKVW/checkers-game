console.log("javascript index.js connected")

const body = document.querySelector("body")
const board = document.querySelector(".board")


const createBoard = () => {
    const textColor = "white"
    let evenColoredRow = true
    let colorCounter = 0
    for (let i = 0; i < 64; i++){
        const evenColoredSquare = i % 2 !== 0
        const squareColor =  evenColoredRow  ? 
            (evenColoredSquare ? "green" : "purple") : 
            (evenColoredSquare ? "purple" : "green")

        const square = document.createElement("div")
        const numberLabel = document.createElement("p")
    
        numberLabel.innerText = `${i + 1}`
        numberLabel.style.color = textColor
        square.id = i + 1
        square.appendChild(numberLabel)
    
        square.style.backgroundColor = squareColor
        board.appendChild(square)
        ++colorCounter 
        if (colorCounter === 8) {
            evenColoredRow = !evenColoredRow
            colorCounter = 0
        }
    }
}



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