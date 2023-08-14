import './weatherDisp.css';
import {day_list} from '../scripts/api';
import loading from '../images/loading.svg'

let day_disp_list = [];
const weatherDisp = () => {
    const frame = document.createElement("div");
    frame.classList.add("weatherDisp");

    const city = document.createElement("div");
    city.classList.add("city");
    city.textContent = "";
    frame.appendChild(city);

    const stack = document.createElement("div");
    stack.classList.add("weatherStack");
    
    const l = document.createElement("div");
    l.classList.add("loading");
    l.textContent = "Loading...";
    stack.appendChild(l);
    const load = new Image();
    load.src = loading;
    load.classList.add("load-image");
    stack.appendChild(load);

    /*
    for (let i = 0; i < 5; i++){
        day_disp_list.push(weatherDay("Mon","01","25 °C"))
    }

    day_disp_list.forEach(day => stack.appendChild(day));
    */

    frame.appendChild(stack);
    
    return frame;
}

const updateDays = () => {
    const stack = document.querySelector(".weatherStack");
    stack.innerHTML = "";
    day_disp_list = [];
    for (let i = 0; i < 5; i++){
        const cur = day_list[i];
        day_disp_list.push(weatherDay(cur.day,cur.icon,cur.day_temp))
    }
    day_disp_list.forEach(day => stack.appendChild(day));

    const city = document.querySelector(".city");
    city.textContent = `${day_list[0].city}, ${day_list[0].country}`
}

const weatherDay = (day,icon,hotness) => {
    const frame = document.createElement("div");
    frame.classList.add("weatherDay");
    
    const day_div = document.createElement("div");
    day_div.textContent = day;
    frame.appendChild(day_div);

    const img = new Image();
    img.src = icon;
    img.classList.add("icon");
    frame.appendChild(img);

    const hot_div = document.createElement("div");
    hot_div.textContent = hotness;
    frame.appendChild(hot_div);

    return frame;
}

export {weatherDisp,updateDays};