import './style.css';
import Background from './cafe-background.gif';

export default function loadHome() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  
  const myBackground = new Image();
  myBackground.src = Background;
  myBackground.classList.add('background-img');
  
  content.appendChild(myBackground);
  
  document.body.appendChild(content);
}