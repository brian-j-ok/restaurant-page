import './style.css';
import './glitch.css';

export default function loadHome() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  const header = document.createElement('h1');

  const glitchSpan1 = document.createElement('span');
  glitchSpan1.innerHTML = "Lo-Fi Cafe";
  const glitchSpan2 = document.createElement('span');
  glitchSpan2.innerHTML = "Lo-Fi Cafe";
  glitchSpan2.setAttribute('aria-hidden', 'true');
  const glitchSpan3 = document.createElement('span');
  glitchSpan3.innerHTML = "Lo-Fi Cafe";
  glitchSpan3.setAttribute('aria-hidden', 'true');

  header.appendChild(glitchSpan1);
  header.appendChild(glitchSpan2);
  header.appendChild(glitchSpan3);

  content.appendChild(header);
  
  document.body.appendChild(content);
}