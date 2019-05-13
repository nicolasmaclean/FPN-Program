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
            description: "After selecting one of the five options, the computer will randomly pick one of the five options. The two selections are then compared with a series of if statements and the outcome is shown above. While creating this webpage, I learned how to manipulate HTML elements with JavaScript and about event listeners to make the page interactive.",
            link: "https://nicolasmaclean.github.io/rock-paper-scissors-lizard-spock/",
            number: 0
        }, {
            title: "Bouncing Circles",
            description: "For this page and the others underneath, I use the HTML canvas to draw pictures. I refresh the canvas at 60 times per second to animate it. On this page, each circle has a velocity that will move it after each frame. I also created a circle object that stores the position and velocity and has functions to update the position and draw it.",
            link: "https://nicolasmaclean.github.io/Bouncing-Circles/",
            number: 1
        }, {
            title: "Circle Thing",
            description: "I built off of the Bouncing Circles for this page, but there are some major differences. All the circles near the mouse grow, and the circles away from the mouse shrink till they disappear.",
            link: "https://nicolasmaclean.github.io/Circles/",
            number: 2
        }, {
            title: "Collision Detection",
            description: "Any kind of physics simulation requires collision detection. This detection only works for two circles. It relies on the pythagorean theorem to calculate the distance between the centers of each circles. If the distance is less than the sum of the radii, they are colliding. This page has the circle in the middle change colors, if the two circles are colliding.",
            link: "https://nicolasmaclean.github.io/Collision-Detection/",
            number: 3
        }, {
            title: "Ball Collision",
            description: "I used the collision detection from before to create a realistic physic simulation of circles colliding and bouncing off of each other. As you can probably see, the simulation didn’t really turn out that well. The collision detection that I used is a little flawed for this application, because the circles will sometimes still be overlapping after a collision. Thousands of collisions are detected after only one because of this.",
            link: "https://nicolasmaclean.github.io/Collision-Sim/",
            number: 4
        }, {
            title: "Molecule Collision",
            description: "I just added this page to the program for fun; this was created by complete accident while creating the previous project. As an attempt to fix the collision detection, the circles would move again within the same frame as the collision to help prevent multiple collisions from detected. This leads the circles to jump across the screen when there are a lot of them close together. The way velocity is detected also tend to make them clump together.",
            link: "https://nicolasmaclean.github.io/Molecules/",
            number: 5
        }, {
            title: "Circular Motion",
            description: "Rotation and revolutions are very common in animations and simulations. This page has circles revolving around the mouse. The circular path can be modelled with polar equations, but a computer uses a cartesian plane. I translate a circular path into x and y components using sine and cosine. Then, to animate it, there is a global variable, theta, that increments after each frame causing the circles to rotate.",
            link: "https://nicolasmaclean.github.io/Circular-Motion/",
            number: 6
        }, {
            title: "Polar Graph",
            description: "While learning and playing around with circular motion, I was learning about polar graphs in calculus. I noticed how similar they were and I decided to try modelling some graphs that we went over in class. The web page can take in a polar equation and has a circle follow the equations path.",
            link: "https://nicolasmaclean.github.io/Polar-Graph/",
            number: 7
        }, {
            title: "Snake",
            description: "I had a attempted to create Snake last year, while I was learning Java, but I gave up rather quickly. I had no idea how to even start making it and the little Java I knew wasn’t very applicable. After learning how to created images and animations in JavaScript, though, I thought it would be a very easy application that I could. I got it to work, but there is one major bug. Sometimes the fruit will not respawn after eating it.",
            link: "https://nicolasmaclean.github.io/Snake/",
            number: 8
        }, {
            title: "Spring Motion",
            description: "This page was created while following a video tutorial by Val Head. She simulated a springiness with some fake physics that look realistic. A force is calculated each frame by how far away it is from the target position and the force pulls the circle to the target position. The sliders above allow you to change some of the variables used in the simulation creating a varying effects.",
            link: "https://nicolasmaclean.github.io/Spring-Motion/",
            number: 9
        }, {
            title: "Fractal Tree",
            description: "Before creating this tree, I did extensive research on fractals. I learned about the Mandelbrot and Julia set, the von koch curve, and sierpinski triangle. I just found the math of them absolutely fascinating and I landed on the fractal tree as an easy implementation that I could understand. The tree begins with one branch, or the trunk, and after an iteration it splits into more branches of slightly shorter length. This process theoretically goes on forever, but for this simulation it goes until the branches are shorter than a specific length, which you can change above. The angle of which they split by can be changed and there are a couple different variations to look at. ",
            link: "https://nicolasmaclean.github.io/Fractal-Tree/",
            number: 10
        }, {
            title: "Fourier Series",
            description: "The above page is an interactive demo of a Fourier series. The series approximate specific waves, in this case the square and sawtooth waves, and the more circles that are used, the closer the approximation is. This concept is very similar to Fourier transforms, which are used in many fields like signal analysis. The wave shown on the right is the sum of each the waves generated by each of the circles used.",
            link: "https://nicolasmaclean.github.io/Fourier-Series/",
            number: 11
        }, {
            title: "Space Colonization Tree",
            description: "This tree is “grown” using the space colonization. It takes a very different approach then something like a fractal tree. A space is defined for the tree to go to and leaves are placed inside of it. The tree grows from the bottom and goes upward till it gets closer to the leaves. When it gets close to leaves a branch splits off and it is pulled toward the leaf. This process is repeated until branches reach every leaf nearby.",
            link: "https://nicolasmaclean.github.io/Space-Colonization/",
            number: 12
        }, {
            title: "2d Ray Casting",
            description: "Ray casting is common method used in 3d rendering. The circle at the place of the mouse can be a camera or person. There are lines shooting out from it in all directions. The lines will go until they intersect with another surface. A 3d render would use the distance the line travels to apply an effect to the environment that imitates a realistic perspective. The further the line has to go, the smaller the surface would be. In the above simulation, the person or light follows the mouse and will rotate with the scroll of your mouse.",
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