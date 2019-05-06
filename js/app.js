var embedDiv = document.getElementById('embedDiv');
var embedFrame = document.getElementById('embed');
const zeDiv = document.getElementById('ze');
const rockDiv = document.getElementById('rock');

var selected = 0;

function updateEmbed() {
    var nEmbed = document.createElement('embed');
    switch(selected){
        case 0: nEmbed.src = "http://www.zefrank.com/invite/swfs/index2.html"; break;
        case 1: nEmbed.src = "https://nicolasmaclean.github.io/rock-paper-scissors-lizard-spock/"; break;
    }
    embedDiv.appendChild(nEmbed);
    embedDiv.removeChild(embedFrame);
    embedFrame = nEmbed;
}

zeDiv.addEventListener('click', () => {
    selected = 0;
    updateEmbed();
});

rockDiv.addEventListener('click', () => {
    selected = 1;
    updateEmbed();
});