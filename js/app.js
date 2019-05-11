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
const rayDiv = document.getElementById('ray');

const descriptionTitle = document.getElementById('descriptionTitle');
const descriptionParagraph = document.getElementById('descriptionParagraph');

var nEmbed = document.createElement('embed');
var active = 7;

const c1 = "#333";
const c2 = "#0C75D6";

function updateEmbed() {
    embedDiv.appendChild(nEmbed);
    embedDiv.removeChild(embedFrame);
    embedFrame = nEmbed;
    switch(active){
        case 0: rockDiv.childNodes[1].style.color = c1; break;
        case 1: bouncyDiv.childNodes[1].style.color = c1; break;
        case 2: circlesDiv.childNodes[1].style.color = c1; break;
        case 3: collisionDiv.childNodes[1].style.color = c1; break;
        case 4: colBallsDiv.childNodes[1].style.color = c1; break;
        case 5: moleculesDiv.childNodes[1].style.color = c1; break;
        case 6: circularDiv.childNodes[1].style.color = c1; break;
        case 7: polarDiv.childNodes[1].style.color = c1; break;
        case 8: snakeDiv.childNodes[1].style.color = c1; break;
        case 9: springDiv.childNodes[1].style.color = c1; break;
        case 10: fractalDiv.childNodes[1].style.color = c1; break;
        case 11: fourierDiv.childNodes[1].style.color = c1; break;
        case 12: colonizationDiv.childNodes[1].style.color = c1; break;
        case 13: rayDiv.childNodes[1].style.color = c1; break;
    }
}

rockDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/rock-paper-scissors-lizard-spock/"
    updateEmbed();
    rockDiv.childNodes[1].style.color = c2;
    active = 0;
    descriptionTitle.innerHTML = "Rock, Paper, Scissors, Lizard, Spock";
});

bouncyDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Bouncing-Circles/"
    updateEmbed();
    bouncyDiv.childNodes[1].style.color = c2;
    active = 1;
    descriptionTitle.innerHTML = "Bouncing Circles";
});

circlesDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Circles/"
    updateEmbed();
    circlesDiv.childNodes[1].style.color = c2;
    active = 2;
    descriptionTitle.innerHTML = "Circle Thing";
});

collisionDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Collision-Detection/"
    updateEmbed();
    collisionDiv.childNodes[1].style.color = c2;
    active = 3;
    descriptionTitle.innerHTML = "Collision Detection";
});

colBallsDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Collision-Sim/";
    updateEmbed();
    colBallsDiv.childNodes[1].style.color = c2;
    active = 4;
    descriptionTitle.innerHTML = "Ball Collision";
});

moleculesDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Molecules/";
    updateEmbed();
    moleculesDiv.childNodes[1].style.color = c2;
    active = 5;
    descriptionTitle.innerHTML = "Molecule Collision";
});

circularDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Circular-Motion/";
    updateEmbed();
    circularDiv.childNodes[1].style.color = c2;
    active = 6;
    descriptionTitle.innerHTML = "Circular Motion";
});

polarDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Polar-Graph/";
    updateEmbed();
    polarDiv.childNodes[1].style.color = c2;
    active = 7;
    descriptionTitle.innerHTML = "Polar Graph";
});

snakeDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Snake/";
    updateEmbed();
    snakeDiv.childNodes[1].style.color = c2;
    active = 8;
    descriptionTitle.innerHTML = "Snake";
});

springDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Spring-Motion/";
    updateEmbed();
    springDiv.childNodes[1].style.color = c2;
    active = 9;
    descriptionTitle.innerHTML = "Spring Motion";
});

fractalDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Fractal-Tree/";
    updateEmbed();
    fractalDiv.childNodes[1].style.color = c2;
    active = 10;
    descriptionTitle.innerHTML = "Fractal Tree";
});

fourierDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Fourier-Series/";
    updateEmbed();
    fourierDiv.childNodes[1].style.color = c2;
    active = 11;
    descriptionTitle.innerHTML = "Fourier Series"
});

colonizationDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/Space-Colonization/";
    updateEmbed();
    colonizationDiv.childNodes[1].style.color = c2;
    active = 12;
    descriptionTitle.innerHTML = "Space Colonization Tree"
});

rayDiv.addEventListener('click', () => {
    nEmbed = document.createElement('embed');
    nEmbed.src = "https://nicolasmaclean.github.io/2d-Ray-Casting/";
    updateEmbed();
    rayDiv.childNodes[1].style.color = c2;
    active = 12;
    descriptionTitle.innerHTML = "2d Ray Casting"
});