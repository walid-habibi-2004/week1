// ===== Exercise 1
const person1 = {
    fullName: "walid habibi",
    mass: 77,
    height: 1.8,
    calculateBMI: function () {
        return this.mass / (this.height ** 2)
    }
}

const person2 = {
    fullName: "anas el mahi",
    mass: 62,
    height: 1.6,
    calculateBMI: function () {
        return this.mass / (this.height ** 2)
    }
}

function compareBMI(personA, personB) {
    const bmiA = personA.calculateBMI()
    const bmiB = personB.calculateBMI()

    if (bmiA > bmiB)
        return `${personA.fullName} has the higher BMI: ${bmiA.toFixed(2)}`
    else if (bmiB > bmiA)
        return `${personB.fullName} has the higher BMI: ${bmiB.toFixed(2)}`
    else
        return `${personA.fullName} and ${personB.fullName} have the same BMI: ${bmiA.toFixed(2)}`;

}

console.log("Person 1 BMI:", person1.calculateBMI().toFixed(2));
console.log("Person 2 BMI:", person2.calculateBMI().toFixed(2));
console.log(compareBMI(person1, person2));
// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4


// ===== Exercise ...
