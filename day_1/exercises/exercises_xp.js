// ===== Exercise 1
// part 1
const people = ["Greg", "Mary", "Devon", "James"];

people.shift()

people.splice(2, 1, "Jason")

people.push("walid")

const maryIndex = people.indexOf("Mary")
console.log("mary index is : "+ maryIndex)

const copy = people.slice(1, people.length - 1)
console.log(copy)

const fooIndex = people.indexOf("Foo")
console.log(fooIndex)
// // When indexOf cannot find the element, it always returns -1, So -1 means "Foo" is not in the array

const last = people[people.length - 1]
console.log(last)
// // Arrays in JavaScript are zero-indexed, meaning the first element has index 0
// // If an array has length = n, the last element’s index is always n - 1

// // part 2
for (let person of people){
    console.log(person)
}

for (let person of people){
    console.log(person)
    if(person === "Devon")
        break
}
// ===== Exercise 2

const favColors = ["black", "white", "blue", "red", "orange"]
for (let i = 0; i <= favColors.length - 1; i++) {
    console.log(`My #${i + 1} choice is ${favColors[i]}`)
}

const suffixes = ["st", "nd", "rd", "th", "th"];
for (let p = 0; p <= favColors.length - 1; p++) {
    console.log(`My #${p + 1}${suffixes[p]} choice is ${favColors[p]}`)
}
// ===== Exercise 3

let number = Number(prompt("give me a number : "))
console.log(typeof number)

while (number < 10) {
    number = Number(prompt("number is too small, enter a new number : "))
}
console.log("You entered:", number);

// ===== Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log("number of floor : " + building.numberOfFloors)

console.log("Apartments on first floor : " + building.numberOfAptByFloor.firstFloor)
console.log("Apartments on third floor : " + building.numberOfAptByFloor.thirdFloor)

console.log(`name of the second tenant ${building.nameOfTenants[1]} and the number of rooms he has : ${building.numberOfRoomsAndRent.dan[0]}` )

const sarahRent = building.numberOfRoomsAndRent.sarah[1]
const danRent = building.numberOfRoomsAndRent.dan[1]
const davidRent = building.numberOfRoomsAndRent.david[1]

if (sarahRent + davidRent > danRent)
    building.numberOfRoomsAndRent.dan[1] = 1200
console.log("Dan's updated rent:", building.numberOfRoomsAndRent.dan[1]);

console.log(building)


// ===== Exercise 5

const family = {
    mother: "nora",
    father: "abderahman",
    brother1: "mohamed",
    brother2: "akram"
}

for (let key in family){
    console.log(key)
}

for (let value in family){
    console.log(value + " : " + family[value])
}

// ===== Exercise 6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let content = ""
for (let me in details) {
    content = content + me + " " + details[me] + " "
}
console.log(content)

// ===== Exercise 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let letters = []
let nameSociety = ""
for (let i = 0; i <= names.length - 1; i++) {
    letters.push(names[i][0]);
}
letters.sort();

for(let i = 0; i <= letters.length - 1; i++){
    nameSociety += letters[i]
}

console.log("the name of society is : ", nameSociety)
