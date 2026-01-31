// ====== Daily Challenge 1
const btn = document.getElementById('lib-button')
const shuffleBtn = document.getElementById('shuffle-button')


btn.addEventListener('click', function (e) {
    e.preventDefault()

    const noun = document.getElementById('noun').value
    const adjective = document.getElementById('adjective').value
    const person = document.getElementById('person').value
    const verb = document.getElementById('verb').value
    const place = document.getElementById('place').value

    if (!noun.trim() || !adjective.trim() || !person.trim() || !verb.trim() || !place.trim()) {
        alert("khona 3amar kolchi")
        return
    }

    const stories = [
        `${person} msha l ${place} bach ${verb} wahed ${adjective} ${noun}.`,
        `Wahed nhar, ${person} shaf ${adjective} ${noun} f ${place} w qarrar y ${verb}.`,
        `F ${place}, ${person} lqa ${noun} w ${verb}h 7it kan ${adjective}.`
    ];

const randomStory = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById('story').textContent = randomStory
})

shuffleBtn.addEventListener('click', function () {
    const noun = document.getElementById('noun').value
    const adjective = document.getElementById('adjective').value
    const person = document.getElementById('person').value
    const verb = document.getElementById('verb').value
    const place = document.getElementById('place').value

    if (!noun.trim() || !adjective.trim() || !person.trim() || !verb.trim() || !place.trim()) {
        alert("khona 3amar kolchi")
        return
    }

    const stories = [
        `${person} msha l ${place} bach ${verb} wahed ${adjective} ${noun}.`,
        `Wahed nhar, ${person} shaf ${adjective} ${noun} f ${place} w qarrar y ${verb}.`,
        `F ${place}, ${person} lqa ${noun} w ${verb}h 7it kan ${adjective}.`
    ];
    const randomStory = stories[Math.floor(Math.random() * stories.length)];

    document.getElementById('story').textContent = randomStory;
})
// ====== Daily Challenge 2
// html challenge 2
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             padding: 20px;
//         }

//         input {
//             padding: 10px;
//             font-size: 16px;
//             width: 250px;
//         }
//     </style>
// </head>

// <body>
//     <h2>Input ghir l7rouf</h2>

//     <form id="letterForm">
//         <label for="letterInput">Ktb ghir l7rouf:</label><br><br>
//         <input type="text" id="letterInput" placeholder="Ktb hna">
//         <button type="submit">Submit</button>
//     </form>

//     <p id="output"></p>

//     <script src="challenges.js"></script>
// </body>

// </html>

const form = document.getElementById('letterForm');
const input = document.getElementById('letterInput');
const output = document.getElementById('output');

input.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    output.textContent = "You entered: " + input.value;
});
