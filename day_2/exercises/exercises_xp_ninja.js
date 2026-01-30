// ===== Exercise 1
function getRndomNumber() {
    let number = Math.floor(Math.random() * 100) + 1
    console.log("the random number is : " + number)
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

getRndomNumber()
// ===== Exercise 2

function capitalize(str) {
    let code1 = str.toLowerCase()
    let result = ""
    for (let i = 0; i < code1.length; i++) {
        if (i % 2 === 0)
            result += code1[i].toUpperCase()
        else
            result += code1[i]
    }

    result += " | "

    for (let i = 0; i < code1.length; i++) {
        if (i % 2 !== 0)
            result += code1[i].toUpperCase()
        else
            result += code1[i]
    }

    return result
}

console.log(capitalize("walid habibi"))
// ===== Exercise 3

function palindrome(str) {
    let reversed = str.split("").reverse().join("");

    if (str === reversed)
        return true
    else
        return false
}

console.log(palindrome("madam"))

// ===== Exercise 4

function biggestNumberInArray(arrayNumber) {
    if (arrayNumber.length === 0)
        return 0

    let max = -Infinity

    for (let i = 0; i < arrayNumber.length; i++) {
        if (typeof arrayNumber[i] !== "number")
            continue

        if (max < arrayNumber[i])
            max = arrayNumber[i]

    }
    return max === Infinity ? 0 : max;
}


const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array2))

// ===== Exercise 5

function UniqueArry(arr) {
    let newList = []

    for (let i = 0; i < arr.length; i++) {
        let isDuplicat = false;
        for (let j = 0; j < newList.length; j++) {
            if (arr[i] === newList[j]) {
                isDuplicat = true;
                break
            }
        }

        if (!isDuplicat) {
            newList.push(arr[i])
        }
    }
    return newList;
}


console.log(UniqueArry([1, 2, 3, 3, 3, 3, 4, 5]))



// ===== Exercise 6

const dayOfWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']

const body = document.body
const table = document.createElement('table')
body.appendChild(table)
const tr = document.createElement('tr')

for (let i = 0; i < dayOfWeek.length; i++) {
    const th = document.createElement('th')
    th.textContent = dayOfWeek[i]
    tr.appendChild(th)

    th.style.background = "gray"
}

table.appendChild(tr)

function createCalendar(year, month) {




    const firstday = new Date(year, month - 1, 1)
    const day = firstday.getDay()
    const startDAy = (day + 6) % 7;
    const numberDaysOfMonth = new Date(year, month, 0).getDate()

    let tr = document.createElement('tr')
    for (let i = 0; i < startDAy; i++) {
        const td = document.createElement('td')
        td.textContent = "."
        tr.appendChild(td)

        td.style.border = "2px solid black"
    }


    for (let d = 1; d <= numberDaysOfMonth; d++) {
        const td = document.createElement('td')
        td.textContent = d
        tr.appendChild(td)

        if ((startDAy + d) % 7 === 0) {
            table.appendChild(tr)
            tr = document.createElement("tr")
        }
        td.style.border = "2px solid black"

    }
    table.appendChild(tr)

    table.style.width = "750px"
    table.style.height = "500px"
    table.style.textAlign = "center"
    table.style.margin = "20px auto"

}

createCalendar(2026, 1)
