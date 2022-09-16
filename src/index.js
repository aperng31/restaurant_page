import './index.css';
import home from './home.js';
// import './menu.js';
import { contact, initMap } from './contact.js';
import menu from './menu.js';

//import Icon from './icon.png';


console.log('hello');

function component() {
        //const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    const header = document.createElement('header');

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    homeButton.innerHTML = 'Home';
    menuButton.innerHTML = 'Menu';
    contactButton.innerHTML = 'Contact';
    homeButton.classList.add('homeButton');

    const content = document.createElement('div');
    content.classList.add('content');
    const footer = document.createElement('footer');

    const foot1 = document.createElement('div');
    const foot1a = document.createElement('a');
    foot1a.href = "http://www.freepik.com";
    foot1a.innerHTML = 'macrovector / Freepik';
    foot1.innerHTML = 'Background artwork by ';
    foot1.appendChild(foot1a);

    const foot2 = document.createElement('div');
    const foot2a = document.createElement('a');
    foot2.classList.add('github');
    foot2a.href = 'https://github.com/aperng31'; //my github
    const gitImg = new Image();
    gitImg.src='/Users/aperng31/repos/restaurant_page/src/images/github.png';
    foot2a.appendChild(gitImg);
    foot2.innerHTML = 'Website designed by Alan Perng ';
    foot2.appendChild(foot2a);

    const foot3 = document.createElement('div');
    const foot3a = document.createElement('a');
    foot3a.href = "https://www.freepik.com/free-vector/wall-decoration-taco-sketch-vector-illustration_29457717.htm#page=2&query=tacos&position=8&from_view=search";
    foot3.innerHTML = 'Home image by ';
    foot3a.innerHTML = 'Rochak Shukla on Freepik';
    foot3.appendChild(foot3a);
    
    footer.appendChild(foot1);
    footer.appendChild(foot2);
    footer.appendChild(foot3);
 
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);

    homeButton.onclick = function () {
        content.innerHTML = '';
        content.appendChild(home());
    }

    menuButton.onclick = function () { //onclick, run function that runs menu.js
        content.innerHTML = '';
        content.appendChild(menu());
    }

    contactButton.onclick = function () {
        content.innerHTML = '';
        window.google = {};
        content.appendChild(contact());
    }

    const hrTag = document.createElement('hr');

    content.appendChild(home()); //start w/ homepage

    container.appendChild(header);
    container.appendChild(hrTag);
    container.appendChild(content);
    container.appendChild(footer);

    return container;
}

document.body.appendChild(component());
