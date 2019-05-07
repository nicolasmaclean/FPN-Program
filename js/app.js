//embed frame
var embedDiv = document.getElementById('embedDiv');
var embedFrame = document.getElementById('embed');

//divs to change the embed src
const rockDiv = document.getElementById('rock');
const bouncyDiv = document.getElementById('bouncy');
const circlesDiv = document.getElementById('circles');
const collisionDiv = document.getElementById('collision');
const colBallsDiv = document.getElementById('colBalls');
const moleculesDiv = document.getElementById('molecules');
const circularDiv = document.getElementById('circular');
const polarDiv = document.getElementById('polar');
const snakeDiv = document.getElementById('snake');
const springDiv = document.getElementById('spring');
const fractalDiv = document.getElementById('fractal');
const fourierDiv = document.getElementById('fourier');
const colonizationDiv = document.getElementById('colonization');

var nEmbed = document.createElement('embed');

function updateEmbed() {
    embedDiv.appendChild(nEmbed);
    embedDiv.removeChild(embedFrame);
    embedFrame = nEmbed;
}

rockDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/rock-paper-scissors-lizard-spock/"
    updateEmbed();
});

bouncyDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Bouncing-Circles/"
    updateEmbed();
});

circlesDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Circles/"
    updateEmbed();
});

collisionDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Collision-Detection/"
    updateEmbed();
});

colBallsDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Collision-Sim/";
    updateEmbed();
});

moleculesDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Molecules/";
    updateEmbed();
});

circularDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Circular-Motion/";
    updateEmbed();
});

polarDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Polar-Graph/";
    updateEmbed();
});

snakeDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Snake/";
    updateEmbed();
});

springDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Spring-Motion/";
    updateEmbed();
});

fractalDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Fractal-Tree/";
    updateEmbed();
});

fourierDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Fourier-Series/";
    updateEmbed();
});

colonizationDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Space-Colonization/";
    updateEmbed();
});