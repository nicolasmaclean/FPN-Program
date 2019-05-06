var embedDiv = document.getElementById('embedDiv');
var embedFrame = document.getElementById('embed');
const bouncyDiv = document.getElementById('bouncy');
const rockDiv = document.getElementById('rock');

var selected = 0;

function updateEmbed() {
    var nEmbed = document.createElement('embed');
    switch(selected){
        case 0: nEmbed.src = "https://nicolasmaclean.github.io/rock-paper-scissors-lizard-spock/"; break;
        case 1: nEmbed.src = "https://nicolasmaclean.github.io/Bouncing-Circles/"; break;
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
