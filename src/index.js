import './style.css';
import {background,updatePin} from './ui/background.js';
import {initForm} from './ui/box';
import {api,crunchData} from './scripts/api.js';

async function commence(){
    document.body.appendChild(background());
    console.log("hi");
    initForm();
    updatePin(-2.2426,53.4808);
    const data = await api("manchester");
    crunchData(data[0],data[1]);
}

commence();

