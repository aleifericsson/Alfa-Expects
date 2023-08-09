import map from '../images/map.png';
import bg from '../images/background.png';
import './background.css';
import box from './box.js';



const background = () => {
    const frame = document.createElement("div");
    frame.classList.add("background");
    frame.setAttribute("style", `background-image:url(${bg});`)
    const map_ele = new Image();
    map_ele.src = map;
    map_ele.classList.add("map");
    frame.appendChild(map_ele);
    frame.appendChild(box());
    const space = document.createElement("div");
    space.classList.add("space");
    frame.appendChild(space);
    return frame;
}

export default background;
