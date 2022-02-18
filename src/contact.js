import './styles/style.css';
import './styles/contact.css';

export default function loadContact() {
  const contact = document.createElement('section');
  contact.classList.add('contact-section');

  // Header Code
  const header = document.createElement('h1');
  header.classList.add('hero');
  header.classList.add('glitch');
  header.classList.add('layers');

  const span = document.createElement('span');
  span.innerHTML = "Contact Us";

  // Contact Form
  const form = document.createElement('form');

  const fieldset = document.createElement('fieldset');

  const legend = document.createElement('legend');
  legend.classList.add('glitch');
  legend.classList.add('layers');

  const legendSpan = document.createElement('span');
  legendSpan.innerHTML = "ありがとうございます";

  legend.appendChild(legendSpan);

  fieldset.appendChild(legend);
  
  // First Name
  const fnameDiv = document.createElement('div');
  const fnameLabel = document.createElement('label');
  fnameLabel.setAttribute('for', "fname");
  fnameLabel.innerHTML = "ファーストネーム： ";

  const fnameInput = document.createElement('input');
  fnameInput.setAttribute('type', 'text');
  fnameInput.setAttribute('id', 'fname');
  fnameInput.setAttribute('name', 'firstname');
  fnameInput.setAttribute('placeholder', 'Your First Name');

  fnameDiv.appendChild(fnameLabel);
  fnameDiv.appendChild(fnameInput);

  // Last Name
  const lnameDiv = document.createElement('div');
  const lnameLabel = document.createElement('label');
  lnameLabel.setAttribute('for', "lname");
  lnameLabel.innerHTML = "苗字：";

  const lnameInput = document.createElement('input');
  lnameInput.setAttribute('type', 'text');
  lnameInput.setAttribute('id', 'lname');
  lnameInput.setAttribute('name', 'lastname');
  lnameInput.setAttribute('placeholder', 'Your last name...');

  lnameDiv.appendChild(lnameLabel);
  lnameDiv.appendChild(lnameInput);

  // Comment Box
  const commentDiv = document.createElement('commentDiv');
  commentDiv.classList.add('comment-container');
  const commentLabel = document.createElement('label');
  commentLabel.setAttribute('for', 'comment');
  commentLabel.innerHTML = "ご意見をお聞かせください:";

  const commentBox = document.createElement('textarea');
  commentBox.setAttribute('rows', "5");
  commentBox.setAttribute('columns', "33");

  commentDiv.appendChild(commentLabel);
  commentDiv.appendChild(commentBox);


  // Submit Button
  const button = document.createElement('button');
  button.innerHTML = "送信！"

  // Final Appending

  fieldset.appendChild(fnameDiv);
  fieldset.appendChild(lnameDiv);
  fieldset.appendChild(commentDiv);
  fieldset.appendChild(button);

  form.appendChild(fieldset);

  header.appendChild(span);
  contact.appendChild(header);
  contact.appendChild(form);

  return contact;
}