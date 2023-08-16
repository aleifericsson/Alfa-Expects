import map from '../images/map.png';
import bg from '../images/background.png';
import './background.css';
import {box} from './box.js';
import pin from '../images/pin.svg';


const background = () => {
    const frame = document.createElement("div");
    frame.classList.add("background");
    frame.setAttribute("style", `background-image:url(${bg});`)
    const map_ele = document.createElement("div");
    map_ele.setAttribute("style", `background-image:url(${map});`)
    map_ele.classList.add("map");
    frame.appendChild(map_ele);
    frame.appendChild(box());
    const space = document.createElement("div");
    space.classList.add("space");
    frame.appendChild(space);

    const line = document.createElement("div");
    line.classList.add("line");
    frame.appendChild(line);

    const the_pin = new Image();
    the_pin.src= pin;
    the_pin.classList.add("pin");
    map_ele.appendChild(the_pin);

    return frame;
}

const updatePin = (lon,lat) => {
    const my_pin = document.querySelector(".pin");
    let nlon = (lon - 5.725);
    if (nlon<=-180){
        nlon = nlat + 180;
    }
    nlon = ((nlon+180)/360)*100;
    let nlat = 100-((lat+90)/180)*100;
    my_pin.setAttribute("style", `position:absolute;top:${nlat}%;left:${nlon}%;`);
}

export {background,updatePin};
