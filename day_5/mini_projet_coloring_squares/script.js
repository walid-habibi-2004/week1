const board = document.getElementById('board')
const colorsDiv = document.getElementById('colors')
const clear = document.getElementById('clear')

let currentColor = "black"
let isDrawing = false

const colors = [
  "red","orangered","orange",
  "yellow","yellowgreen","lightgreen",
  "green","turquoise","cyan",
  "lightskyblue","dodgerblue","blue",
  "navy","purple","magenta",
  "pink","lightpink","lightgray",
  "gray","black","white"
];

colors.forEach(color => {
    const div = document.createElement('div')
    div.className = "color"
    div.style.background = color

    div.addEventListener('click', () => {
        currentColor = color
    })
    
    colorsDiv.appendChild(div)
})

for(let i = 0; i < 1000; i++) {
    const square = document.createElement('div')
    square.className = 'square'

    square.addEventListener('mousedown', () => {
        isDrawing = true
        square.style.background = currentColor
    })

    square.addEventListener('mouseover', () => {
        if(isDrawing) {
            square.style.background = currentColor
        }
    })

    board.appendChild(square)
}


document.addEventListener("mouseup", () => {
    isDrawing = false
})

clear.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(cl => {
        cl.style.background = 'white'
    })
})


