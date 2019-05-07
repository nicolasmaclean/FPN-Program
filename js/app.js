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

var selected = 0;

function updateEmbed() {
    var nEmbed = document.createElement('embed');
    switch(selected){
        case 0: nEmbed.src = "https://nicolasmaclean.github.io/rock-paper-scissors-lizard-spock/"; break;
        case 1: nEmbed.src = "https://nicolasmaclean.github.io/Bouncing-Circles/"; break;
        case 2: nEmbed.src = "https://nicolasmaclean.github.io/Circles/"; break;
        case 3: nEmbed.src = "https://nicolasmaclean.github.io/Collision-Detection/"; break;
        case 4: nEmbed.src = "https://nicolasmaclean.github.io/Collision-Sim/"; break;
        case 5: nEmbed.src = "https://nicolasmaclean.github.io/Molecules/"; break;
        case 6: nEmbed.src = "https://nicolasmaclean.github.io/Circular-Motion/"; break;
        case 7: nEmbed.src = "https://nicolasmaclean.github.io/Polar-Graph/"; break;
        case 8: nEmbed.src = "https://nicolasmaclean.github.io/Snake/"; break;
        case 9: nEmbed.src = "https://nicolasmaclean.github.io/Spring-Motion/"; break;
        case 10: nEmbed.src = "https://nicolasmaclean.github.io/Fractal-Tree/"; break;
        case 11: nEmbed.src = "https://nicolasmaclean.github.io/Fourier-Series/"; break;
        case 12: nEmbed.src = "https://nicolasmaclean.github.io/Space-Colonization/"; break;
    }
    embedDiv.appendChild(nEmbed);
    embedDiv.removeChild(embedFrame);
    embedFrame = nEmbed;
}

rockDiv.addEventListener('click', () => {
    selected = 0;
    updateEmbed();
});

bouncyDiv.addEventListener('click', () => {
    selected = 1;
    updateEmbed();
});

circlesDiv.addEventListener('click', () => {
    selected = 2;
    updateEmbed();
});

collisionDiv.addEventListener('click', () => {
    selected = 3;
    updateEmbed();
});

colBallsDiv.addEventListener('click', () => {
    selected = 4;
    updateEmbed();
});

moleculesDiv.addEventListener('click', () => {
    selected = 5;
    updateEmbed();
});

circularDiv.addEventListener('click', () => {
    selected = 6;
    updateEmbed();
});

polarDiv.addEventListener('click', () => {
    selected = 7;
    updateEmbed();
});

snakeDiv.addEventListener('click', () => {
    selected = 8;
    updateEmbed();
});

springDiv.addEventListener('click', () => {
    selected = 9;
    updateEmbed();
});

fractalDiv.addEventListener('click', () => {
    selected = 10;
    updateEmbed();
});

fourierDiv.addEventListener('click', () => {
    selected = 11;
    updateEmbed();
});

colonizationDiv.addEventListener('click', () => {
    selected = 12;
    updateEmbed();
});