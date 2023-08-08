import map from '../images/map.png';
import bg from '../images/background.png';

const background = () => {
    const frame = document.createElement("div");
    const map_ele = new Image();
    const bg_ele = new Image();
    map_ele.src = map;
    bg_ele.src = bg;
    frame.appendChild(bg_ele);
    frame.appendChild(map_ele);
    return frame;
}

export default background;