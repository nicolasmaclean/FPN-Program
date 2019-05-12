//html elements
var embedDiv = document.getElementById('embedDiv');
var embedFrame = document.getElementById('embed');
const descriptionTitle = document.getElementById('descriptionTitle');
const descriptionParagraph = document.getElementById('descriptionParagraph');
const buttonsDiv = document.getElementById('buttons');

var nEmbed = document.createElement('embed');

var data;
var active;

function init(){
    let url = 'https://nicolasmaclean.github.io/json/embed.json';
    let request = new XMLHttpRequest();

    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload() = function() {
        data = request.response;
        let pages = data.pages;
        active = data.active;
        for(let i = 0; i < pages.length; i++){
            addPage(pages[i]);
            updateEmbed();
        }
    }
}

function addPage(page){
    let nButton = document.createElement('div');
    nButton.id = page.title;
    nButton.classList.add('button');
    nButton.addEventListener('click', () => {
        active = page.number;
        clicked();
    });
    buttonsDiv.appendChild(nButton);
}

function clicked() {
    let divs = buttonsDiv.childNodes;
    for(let i = 0; i < divs.length; i++){
        if(i === active-1){
            divs[i].classList.add('active');
        } else {
            divs[i].classList.remove('active');
        }
    }

    descriptionTitle.innerHTML = pages[active].title;
    descriptionParagraph.innerHTML = pages[active].description;
 
    nEmbed = document.createElement('embed');
    nEmbed.src = pages.link;

    embedDiv.removeChild(embedFrame);
    embedDiv.appendChild(nEmbed);
    embedFrame = nEmbed;
}

init();