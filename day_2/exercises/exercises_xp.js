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


// ===== Exercise ...
