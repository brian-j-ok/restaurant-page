import './styles/style.css';
import './styles/menu.css';

import Ramen from './imgs/ramen.gif';
import Steak from './imgs/steak.gif';

const menuImages = [Ramen, Steak];
const menuDescriptions = [
  "Ramen because ... Ramen",
  "Steak that looks way better than a steak should",
];

export default function loadMenu() {
  const menu = document.createElement('section');
  menu.classList.add('menu-section');

  // Header Code
  const header = document.createElement('h1');
  header.classList.add('hero');
  header.classList.add('glitch');
  header.classList.add('layers');

  const span = document.createElement('span');
  span.innerHTML = "Lo-Fi Menu";

  header.appendChild(span);
  menu.appendChild(header);

  // Menu Items Code
  for (let i=0; i<menuImages.length; i++) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let menuPicture = new Image();
    menuPicture.src = menuImages[i];
    menuPicture.classList.add('menu-picture');

    let menuDesc = document.createElement('p');
    menuDesc.classList.add('menu-desc');
    menuDesc.innerHTML = menuDescriptions[i];

    menuItem.appendChild(menuPicture);
    menuItem.appendChild(menuDesc);

    menu.appendChild(menuItem);
  };

  return menu;
}