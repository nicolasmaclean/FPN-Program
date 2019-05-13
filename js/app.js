//html elements
var embedDiv = document.getElementById('embedDiv');
var embedFrame = document.getElementById('embed');
const descriptionTitle = document.getElementById('descriptionTitle');
const descriptionParagraph = document.getElementById('descriptionParagraph');
const buttonsDiv = document.getElementById('buttons');

var nEmbed = document.createElement('embed');

var data = {
    active: 0,
    pages: [
        {
            title: "Rock, Paper, Scissors",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/rock-paper-scissors-lizard-spock/",
            number: 0
        }, {
            title: "Bouncing Circles",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Bouncing-Circles/",
            number: 1
        }, {
            title: "Circle Thing",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Circles/",
            number: 2
        }, {
            title: "Collision Detection",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Collision-Detection/",
            number: 3
        }, {
            title: "Ball Collision",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Collision-Sim/",
            number: 4
        }, {
            title: "Molecule Collision",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Molecules/",
            number: 5
        }, {
            title: "Circular Motion",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Circular-Motion/",
            number: 6
        }, {
            title: "Polar Graph",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Polar-Graph/",
            number: 7
        }, {
            title: "Snake",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Snake/",
            number: 8
        }, {
            title: "Spring Motion",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Spring-Motion/",
            number: 9
        }, {
            title: "Fractal Tree",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Fractal-Tree/",
            number: 10
        }, {
            title: "Fourier Series",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Fourier-Series/",
            number: 11
        }, {
            title: "Space Colonization Tree",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/Space-Colonization/",
            number: 12
        }, {
            title: "2d Ray Casting",
            description: "n/a",
            link: "https://nicolasmaclean.github.io/2d-Ray-Casting/",
            number: 13
        }
    ]
};

function init(){
    pages = data.pages
    for(let i = 0; i < pages.length; i++){
        addPage(pages[i]);
    }
    data.active = 1;
    clicked();
}

function addPage(page){
    let nButton = document.createElement('div');
    nButton.id = page.title;
    nButton.classList.add('button');

    let nHeader = document.createElement('h4');
    nHeader.innerHTML = page.title;
    nButton.appendChild(nHeader);
    nButton.addEventListener('click', () => {
        data.active = page.number;
        clicked();
    });
    buttonsDiv.appendChild(nButton);
}

function clicked() {
    let divs = buttonsDiv.childNodes;
    for(let i = 1; i < divs.length; i++){
        if(i === data.active+1){
            divs[i].style.color = "#0C75D6";
        } else {
            divs[i].style.color = "#333";
        }
    }

    //active doesn't change
    descriptionTitle.innerHTML = data.pages[data.active].title;
    descriptionParagraph.innerHTML = data.pages[data.active].description;
 
    nEmbed = document.createElement('embed');
    nEmbed.src = data.pages[data.active].link;

    embedDiv.removeChild(embedFrame);
    embedDiv.appendChild(nEmbed);
    embedFrame = nEmbed;
}

init();