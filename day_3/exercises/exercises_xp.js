// ===== Exercise 1
// html exercice 1
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         .fade {
//             animation: fadeOut 0.8s forwards;
//         }

//         @keyframes fadeOut {
//             from {
//                 opacity: 1;
//             }

//             to {
//                 opacity: 0;
//             }
//         }
//     </style>
// </head>

// <body>
//     <article style="cursor: pointer;">
//         <h1> Some Facts </h1>
//         <h2> The Chocolate </h2>
//         <h3> History of the chocolate </h3>
//         <p> Chocolate is made from tropical Theobroma cacao tree seeds.
//             Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//         <p> After the European discovery of the Americas, chocolate became
//             very popular in the wider world, and its demand exploded. </p>
//         <p> Chocolate has since become a popular food product that millions enjoy every day,
//             thanks to its unique, rich, and sweet taste.</p>
//         <p> But what effect does eating chocolate have on our health?</p>

//         <button>bold</button>
//     </article>

//     <script src="exercises_xp.js"></script>
// </body>

// </html>
const h1 = document.getElementsByTagName('h1')[0]
console.log(h1.innerHTML)


const p = document.getElementsByTagName('p')[3]
p.remove()


const h2 = document.getElementsByTagName('h2')[0]
h2.addEventListener('click', function () {
    h2.style.background = "red"
})


const h3 = document.getElementsByTagName('h3')[0]
h3.addEventListener('click', function () {
    h3.style.display = "none"
})

const btn = document.getElementsByTagName('button')[0]
const paragraphes = document.querySelectorAll('p')
btn.addEventListener('click', function () {
    paragraphes.forEach(p => {
        p.style.fontWeight = "bold"
    })
})


h1.addEventListener('mouseenter', function () {
    const randomSize = Math.floor(Math.random() * 101)
    h1.style.fontSize = randomSize + "px"
})

h1.addEventListener('mouseleave', function () {
    h1.style.fontSize = ""
})


const p2 = document.getElementsByTagName('p')[1]
p2.addEventListener('mouseenter', function () {
    p2.classList.add("fade")
})

p2.addEventListener('mouseleave', function () {
    p2.classList.remove('fade')
    p.style.opacity = '1'
})
// ===== Exercise 2

const form = document.querySelector('form')
console.log(form)

const fnameById = document.getElementById('fname')
const lnameById = document.getElementById('lname')
console.log(fnameById)
console.log(lnameById)


const fnameByName = document.getElementsByName('firstname')[0]
const lnameByName = document.getElementsByName('lastname')[0]
console.log(fnameByName)
console.log(lnameByName)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const fnameValue = fnameById.value.trim()
    const lnameValue = lnameById.value.trim()

    if(fnameValue === "" || lnameValue === ""){
        alert("please fill in both first name or last name")
        return;
    }

    const ul = document.getElementsByClassName('usersAnswer')[0]
    const liFirst = document.createElement('li')
    const liLast = document.createElement('li')

    liFirst.textContent = "first name is : " + fnameValue
    ul.appendChild(liFirst)

    liLast.textContent = "last name is : " + lnameValue
    ul.appendChild(liLast)

    fnameById.value = ""
    lnameById.value = ""
})

// ===== Exercise 3

var allBoldItems;

function getBoldItems() {
    let bold_items = document.getElementsByTagName('strong');
    allBoldItems = Array.from(bold_items)
    console.log(allBoldItems)
}

getBoldItems()

function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = "blue"
    });
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = "black"
    })
}

const p = document.querySelector("p")

p.addEventListener('mouseover', function () {
    highlight()
})

p.addEventListener('mouseout', function () {
    returnItemsToDefault()
})

// ===== Exercise 4

const form = document.getElementById("MyForm")
const radiusInput = document.getElementById("radius")
const volumeInput = document.getElementById("volume")

function calculeSphere(r) {
    let result = (4 / 3) * Math.PI * Math.pow(r, 3);
    return result.toFixed(2)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const radiusValue = parseFloat(radiusInput.value)

    if (isNaN(radiusValue) || radiusValue <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }
    
    const volume = calculeSphere(radiusValue)
    volumeInput.value = volume
})

console.log(calculeSphere(5))
