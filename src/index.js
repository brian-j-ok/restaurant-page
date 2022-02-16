import loadHome from "./home.js";
import './style.css';
import Background from './cafe-background.gif';

const myBackground = new Image();
myBackground.src = Background;
myBackground.classList.add('background-img');

document.body.appendChild(myBackground);

function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  // Create ul element for navbar
  const navlist = document.createElement('ul');

  // Create li elements with anchors for navbar
  let navlink1 = document.createElement('li');
  navlink1.innerHTML = "Home";

  let navlink2 = document.createElement('li');
  navlink2.innerHTML = "Menu";

  let navlink3 = document.createElement('li');
  navlink3.innerHTML = "Contact";

  // Append navlinks to navlist
  navlist.appendChild(navlink1);
  navlist.appendChild(navlink2);
  navlist.appendChild(navlink3);
  
  navbar.appendChild(navlist);

  return navbar;
}

document.body.appendChild(createNavbar());

loadHome();