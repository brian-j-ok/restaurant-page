import './styles/home.css';
import './styles/glitch.css';

export default function loadHome() {
  const home = document.createElement('section');
  home.classList.add('home-section');

  const header = document.createElement('h1');
  header.classList.add('hero');
  header.classList.add('glitch');
  header.classList.add('layers');

  const span = document.createElement('span');
  span.innerHTML = "Lo-Fi Cafe";

  header.appendChild(span);
  home.appendChild(header);

  return home;
}