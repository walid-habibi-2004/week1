const pads = document.querySelectorAll(".pad");

function playSound(key) {
    const audio = document.getElementById(key);
    const pad = document.querySelector(`.pad[data-key="${key}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    pad.classList.add("active");
    setTimeout(() => pad.classList.remove("active"), 150);
}

pads.forEach(pad => {
    pad.addEventListener("click", () => {
        playSound(pad.dataset.key);
    });
});

document.addEventListener("keydown", e => {
    playSound(e.key.toLowerCase());
});
