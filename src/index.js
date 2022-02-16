import './style.css';
import Background from './cafe-background.gif';

const content = document.getElementById('content');

const myBackground = new Image();
myBackground.src = Background;

content.appendChild(myBackground);