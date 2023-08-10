import './style.css';
import background from './ui/background.js';
import api from './scripts/api.js';

document.body.appendChild(background());

console.log(api("london"));
