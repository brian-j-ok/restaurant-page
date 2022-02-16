import './style.css';
import Background from './cafe-background.gif';

const content = document.createElement('div');
content.setAttribute('id', 'content');

const myBackground = new Image();
myBackground.src = Background;

content.appendChild(myBackground);

document.body.appendChild(content);