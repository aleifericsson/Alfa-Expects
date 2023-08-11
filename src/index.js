import './style.css';
import background from './ui/background.js';
import api from './scripts/api.js';

document.body.appendChild(background());

async function ha(){
    const huh = await api("london");
    console.log(huh);
}

ha();

