// ====== Daily Challenge 1

const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturn", color: "goldenrod", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector("section")

planets.forEach((planet) => {
    const planetDiv = document.createElement("div")
    planetDiv.classList.add("planet")

    planetDiv.style.backgroundColor = planet.color

    for (let i = 0; i < planet.moons; i++){
        const moon = document.createElement("div")
        moon.classList.add("moon")

        moon.style.backgroundColor = "white"

        planetDiv.appendChild(moon)
    }

    section.appendChild(planetDiv)
})

console.log(section)

// ====== Daily Challenge 2

function frame() {
    let words = prompt("Enter words separated by commas");
    let arr = words.split(",");

    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }

    let width = max + 4;

    console.log("*".repeat(width));

    for (let i = 0; i < arr.length; i++) {
        let spaces = max - arr[i].length;
        console.log("* " + arr[i] + " ".repeat(spaces) + " *");
    }

    console.log("*".repeat(width));
}

frame();


// ====== Daily Challenge 3


