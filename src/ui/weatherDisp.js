import './weatherDisp.css';
import {day_list} from '../scripts/api';

let day_disp_list = [];
const weatherDisp = () => {
    const frame = document.createElement("div");
    frame.classList.add("weatherDisp");

    const city = document.createElement("div");
    city.classList.add("city");
    city.textContent = "Manchester, GB";
    frame.appendChild(city);

    const stack = document.createElement("div");
    stack.classList.add("weatherStack");

    for (let i = 0; i < 5; i++){
        day_disp_list.push(weatherDay("Mon","☁️","25 °C"))
    }

    day_disp_list.forEach(day => stack.appendChild(day));

    frame.appendChild(stack);
    
    return frame;
}

const updateDays = () => {
    const stack = document.querySelector(".weatherStack");
    stack.innerHTML = "";
    day_disp_list = [];
    for (let i = 0; i < 5; i++){
        const cur = day_list[i];
        day_disp_list.push(weatherDay(cur.day,"☁️",cur.day_temp))
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

    const icon_div = document.createElement("div");
    icon_div.textContent = icon;
    frame.appendChild(icon_div);

    const hot_div = document.createElement("div");
    hot_div.textContent = hotness;
    frame.appendChild(hot_div);

    return frame;
}

export {weatherDisp,updateDays};