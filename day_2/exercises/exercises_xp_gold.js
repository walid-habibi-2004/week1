// ===== Exercise 1
function isBlanck(str) {
    if (str.length === 0)
        return true
    else
        return false
}

console.log(isBlanck(""))
// ===== Exercise 2

function abbrevName(name) {
    let result = ""
    for(let i = 0; i < name.length; i++){
        if(name[i] !== " ")
            result += name[i]
        else {
            result += " " + name[i + 1]+"."
            break
        }
    }

    return result
}

console.log(abbrevName("walid habibi"))

// ===== Exercise 3

function swapCase(str) {
    let result = ""
    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
        if( code >= 65 && code <= 90)
            result += String.fromCharCode(code + 32)
        else if(code >= 97 && code <= 122)
            result += String.fromCharCode(code - 32)
        else
            result += str[i]
    }

    return result
}

console.log(swapCase("waLID HaBiBi"))

// ===== Exercise 4

function isOmnipresent(arr, v) {
    for(let i = 0; i < arr.length; i++){
        if(!arr[i].includes(v))
            return false
    }

    return true
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) 
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3))

// ===== Exercise 5


let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++){
    let row = table.rows[i];
    let column = row.cells[i]
    column.style.backgroundColor = "red"
}
