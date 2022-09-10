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
