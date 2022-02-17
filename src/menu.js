import './styles/style.css';
import './styles/menu.css';

import Ramen from './imgs/ramen.gif';
import Steak from './imgs/steak.gif';
import Spaget from './imgs/spaget.gif';
import FriedRice from './imgs/fried_rice.gif';
import Pizza from './imgs/pizza.gif';
import Child from './imgs/child.gif';

const menuImages = [Ramen, Steak, Spaget, FriedRice, Pizza, Child];
const menuTitles = ['Ramen', 'Steak', 'Spagetti', 'Fried Rice', 'Pizza', 'Child'];
const menuDescriptions = [
  "A basic dish for your basic weeb self",
  "Our best reviews ask 'Why is that steak orange?'",
  "Is spagetti japanese?",
  "Totally realistic egg physics",
  "Does this cafe even serve coffee?",
  "The dish is the child not the eggs and bacon",
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