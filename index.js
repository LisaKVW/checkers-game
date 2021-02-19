console.log("javascript index.js connected")

const body = document.querySelector("body")
const board = document.querySelector(".board")

for (let i = 0; i < 64; i++){
    const squareColor =  i % 2 === 0 ? "black" : "white"
    const textColor = squareColor === "white" ? "black" : "white"

    const square = document.createElement("div")
    const numberLabel = document.createElement("p")

    numberLabel.innerText = `${i + 1}`
    numberLabel.style.color = textColor
    square.id = i + 1
    square.appendChild(numberLabel)
    console.log('reached')

    square.style.backgroundColor = squareColor
    board.appendChild(square)
}


const square2 =  document.getElementById("2")
console.log(square2)
square2.style.backgroundColor = "yellow"

const setBoardPlayerTop = () => {
    for (let i = 1; i < 25; i++){
        if (i % 2 !== 0){
            const playerSquare = document.getElementById(`${i}`)
            playerSquare.style.backgroundColor = "purple"
        }

    }
}


const setBoardPlayerBottom = () => {
    for (let i = 41; i < 65; i++){
        if (i % 2 === 0){
            const playerSquare = document.getElementById(`${i}`)
            playerSquare.style.backgroundColor = "blue"
        }

    }
}



setBoardPlayerTop()
setBoardPlayerBottom()