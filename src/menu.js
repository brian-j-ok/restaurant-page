import './styles/style.css';
import './styles/menu.css';

import Ramen from './imgs/ramen.gif';
import Steak from './imgs/steak.gif';
import Spaget from './imgs/spaget.gif';
import FriedRice from './imgs/fried_rice.gif';

const menuImages = [Ramen, Steak, Spaget, FriedRice];
const menuTitles = ['Ramen', 'Steak', 'Spagetti', 'Fried Rice'];
const menuDescriptions = [
  "Ramen because ... Ramen",
  "Steak that looks way better than a steak should",
  "Is spagetti japanese?",
  "Totally realistic egg physics",
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
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');

  for (let i=0; i<menuImages.length; i++) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let menuPicture = new Image();
    menuPicture.src = menuImages[i];
    menuPicture.classList.add('menu-picture');

    let menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = menuTitles[i];

    let menuDesc = document.createElement('p');
    menuDesc.classList.add('menu-desc');
    menuDesc.innerHTML = menuDescriptions[i];

    menuItem.appendChild(menuPicture);
    menuItem.appendChild(menuTitle);
    menuItem.appendChild(menuDesc);

    menuItems.appendChild(menuItem);
  };

  menu.appendChild(menuItems);

  return menu;
}