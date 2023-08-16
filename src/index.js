import './style.css';
import {background,updatePin} from './ui/background.js';
import {api,crunchData} from './scripts/api.js';

document.body.appendChild(background());
updatePin(-2.2426,53.4808);

async function ha(){
    const data = await api();
    crunchData(data[0],data[1]);
}

ha();

