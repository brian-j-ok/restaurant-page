import loadHome from "./home.js";
import loadMenu from "./menu.js";

import './styles/style.css';
import loadContact from "./contact.js";

function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  // Create ul element for navbar
  const navlist = document.createElement('ul');

  // Create li elements with anchors for navbar
  let navlink1 = document.createElement('li');
  navlink1.innerHTML = "Home";
  navlink1.addEventListener('click', () => {
    if (content.firstChild.classList == 'home-section') return

    content.firstChild.remove();
    content.appendChild(loadHome());
  });

  let navlink2 = document.createElement('li');
  navlink2.innerHTML = "Menu";
  navlink2.addEventListener('click', () => {
    if (content.firstChild.classList == 'menu-section') return

    content.firstChild.remove();
    content.appendChild(loadMenu());
  });

  let navlink3 = document.createElement('li');
  navlink3.innerHTML = "Contact";
  navlink3.addEventListener('click', () => {
    if(content.firstChild.classList == 'contact-section') return

    content.firstChild.remove();
    content.appendChild(loadContact());
  });

  // Append navlinks to navlist
  navlist.appendChild(navlink1);
  navlist.appendChild(navlink2);
  navlist.appendChild(navlink3);
  
  navbar.appendChild(navlist);

  return navbar;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  footer.innerHTML = "No rights, just chill";

  return footer
};

document.body.appendChild(createNavbar());

const content = document.createElement('div');
content.setAttribute('id', 'content');

content.appendChild(loadHome());

document.body.appendChild(content);

document.body.appendChild(createFooter());

