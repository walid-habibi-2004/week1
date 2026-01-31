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

// ====== Daily Challenge 3

