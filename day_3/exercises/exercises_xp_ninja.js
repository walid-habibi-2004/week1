// ===== Exercise 1
function sayHello() {
    alert('Hello world')
}
setTimeout(sayHello, 2000)

const div = document.getElementById('container')

function addParagraph1() {
    const paragraph = document.createElement('p')
    paragraph.innerText = 'Hello World'
    div.appendChild(paragraph)
}
setTimeout(addParagraph1, 2000)


function addParagraph2() {
    const p = document.createElement('p')
    p.innerText = 'Hello World';
    div.appendChild(p);

    if(div.children.length === 5){
        clearInterval(intervalId)
        console.log('stop')
    }
}

const intervalId = setInterval(addParagraph2, 2000)

const btn = document.getElementById('clear')
btn.addEventListener("click", () => {
    clearInterval(intervalId)
})

// ===== Exercise 2
function myMove() {
    const container = document.getElementById('container')
    const animate = document.getElementById('animate')

    let pos = 0
    let limit = container.offsetWidth - animate.offsetWidth

    let timer = setInterval(moveBox, 1)
    function moveBox() {
        if(pos >= limit)
            clearInterval(timer)
        else{
            pos += 1
            animate.style.left = pos + "px"
        }
    }
}
