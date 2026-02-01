// ===== Exercise 1
const select = document.getElementById('genres')
const result = document.getElementById('result')

result.textContent = "selected : " + select.value

const option = document.createElement('option')
option.value = "classic"
option.textContent = "classic"

select.appendChild(option)

option.selected = true

result.textContent = "selected : " + select.value
// ===== Exercise 2

const selectColors = document.getElementById('colorSelect')
const btn = document.getElementById('btn')

btn.addEventListener('click', removecolor)

function removecolor() {
    const selectedIndex = selectColors.selectedIndex

    if(selectedIndex !== -1){
        selectColors.remove(selectedIndex)
    }
}

// ===== Exercise 3
let shoppingList = []
const root = document.getElementById('root')
const form = document.createElement('form')

const input = document.createElement('input')
input.type = 'text'
const btn = document.createElement('button')
btn.innerText = "AddItem"

form.appendChild(input)
form.appendChild(btn)
root.appendChild(form)

btn.addEventListener('click', addItem)

function addItem(e) {
    e.preventDefault();

    const inputValue = input.value.trim()
    if(inputValue === ""){
        alert('please fill the input !!')
        return
    }

    shoppingList.push(inputValue)
    console.log(shoppingList)

    input.value = ""
}

const clear = document.createElement('button')
clear.innerText = "ClearAll"
form.appendChild(clear)

clear.addEventListener('click', ClearAll)

function ClearAll(e) {
    e.preventDefault()

    shoppingList = []

    console.log(shoppingList)
}
