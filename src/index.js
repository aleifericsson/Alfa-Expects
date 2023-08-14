import './style.css';
import background from './ui/background.js';
import {api,crunchData} from './scripts/api.js';

document.body.appendChild(background());

async function ha(){
    const data = await api();
    crunchData(data[0],data[1]);
}

ha();

