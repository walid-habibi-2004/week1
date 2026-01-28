// ===== Exercise 1

function displayNumbersDivisible() {
    let sum = 0
    for (let i = 0; i <= 500; i++){
        if(i % 23 === 0) {
            console.log(i)
            sum += i
        }
    }

    console.log("sum : "+ sum)
}
displayNumbersDivisible()


// // Bonus
function displayNumbersDivisible(divsor) {
    let sum = 0
    for (let i = 0; i <= 500; i++){
        if(i % divsor === 0) {
            console.log(i)
            sum += i
        }
    }

    console.log("sum : "+ sum)
}

displayNumbersDivisible(12)

// ===== Exercise 2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

const shoppingList = ["banana", "orange", "apple"]


function myBill() {
    let sum = 0
    for (let i of shoppingList){
        if (i in stock && stock[i] > 0){
            sum += prices[i]
            stock[i]--
        }
    }
    return sum
}

console.log(myBill())
console.log("this the stock after shopping", stock)

// ===== Exercise 3

function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    let amountSum = 0
    for(let i = 0; i < amountOfChange.length; i++){
        amountSum += amountOfChange[i] * coinValues[i]
    }
    if(amountSum >= itemPrice)
        return true
    else
        return false

}

console.log(changeEnough(4.25, [25, 20, 5, 0]))

// ===== Exercise 4

function hotelCost() {
    let numberNihgts
    while (true) {
        numberNihgts = Number(prompt("what the number of nights stay in hotel"))
        if (!isNaN(numberNihgts) && numberNihgts > 0)
            break;
        else
            alert("please enter valid number of nights")
    }

    const pricesNights = 140
    const totalPrices = numberNihgts * pricesNights
    return totalPrices
}

function planeRideCost() {
    let destination
    while(true){
        destination = String(prompt("Where do you want to go?").trim())
        if (destination && isNaN(destination))
            break
        else
            alert("please enter valid destination : ")
    }

    const dest = destination.toLowerCase()

    switch (dest) {
        case "london":
            return 183
        case "paris":
            return 220
        default:
            return 300
    }
}

function rentalCarCost() {
    let rentCar
    while(true) {
        rentCar = Number(prompt("how many day you rent the car : "))
        if(!isNaN(rentCar) && rentCar > 0)
            break
        else
            alert("please enter the valid number of rent car days : ")
    }

    const carCost = 40
    if (rentCar > 10)
        return carCost * rentCar * 0.95
    else
        return carCost*rentCar

}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    console.log(`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car cost: $${car}`);
    return hotel + plane + car;
}

console.log("The total cost of your vacation is: $" + total);

// ===== Exercise 5

const containerDiv = document.getElementById("container");
console.log(containerDiv);

const peteLi = document.querySelector('.list li:nth-child(2)');
peteLi.textContent = "Richard";

const secondUl = document.querySelectorAll(".list")[1];
const secondLi = secondUl.querySelectorAll("li")[1]
secondUl.removeChild(secondLi)

const myName = "walid"
const firstLis = document.querySelectorAll('.list li:first-child')
firstLis.forEach(li => li.textContent = myName)

const addClass = document.querySelectorAll('.list')
addClass.forEach(ul => {
    ul.classList.add("student_list")
})

addClass[0].classList.add("university", "attendance")
console.log(addClass);

containerDiv.style.background = "lightblue"
containerDiv.style.padding = "15px"

const allList = document.querySelectorAll("li")
allList.forEach(li => {
    if (li.textContent === "Dan")
        li.style.display = "none"
})

allList.forEach(li => {
    if (li.textContent === "Richard") {
        li.style.border = "2px solid red"

    }
})

const getBody = document.getElementsByTagName("body")[0]
getBody.style.fontSize = "25px"

// // Bonus
if(containerDiv.style.background === "lightblue") {
    const users = document.querySelectorAll('.list li')
    const userName = []

    users.forEach(li => userName.push(li.textContent));
    alert("Hello " + userName.join(" and "))
}

// ===== Exercise 6

const navBar  = document.getElementById("navBar")
navBar.setAttribute("id", "socialNetworkNavigation")

const ul = document.querySelector("#socialNetworkNavigation ul")
const addLi = document.createElement("li")
const text = document.createTextNode("Logout")
addLi.appendChild(text)
ul.appendChild(addLi)
console.log(ul);


const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);


// ===== Exercise 7

const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
        alreadyRead: true
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        image: "https://covers.openlibrary.org/b/id/8278326-L.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks")

for (let book of allBooks) {
    const div = document.createElement("div")

    const p = document.createElement("p")
    p.textContent = `${book.title}  written by ${book.author}`

    const img = document.createElement("img")
    img.src = book.image
    img.style.width = "100px"


    if(book.alreadyRead === true)
        p.style.color = "red"

    div.appendChild(p)
    div.appendChild(img)
    section.appendChild(div)
}



