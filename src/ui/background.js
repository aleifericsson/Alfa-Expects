import map from '../images/map.svg';
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

    const map_box = document.createElement("div");
    map_box.classList.add("map-box");
    map_ele.appendChild(map_box);

    const the_pin = new Image();
    the_pin.src= pin;
    the_pin.classList.add("pin");
    map_box.appendChild(the_pin);

    
    const space = document.createElement("div");
    space.classList.add("space");
    frame.appendChild(space);

    return frame;
}

const updatePin = (lon,lat) => {
    console.log(lon,lat)
    const my_pin = document.querySelector(".pin");

    /*
    let nlon = (lon - 11.7);
    if (nlon<=-180){
        nlon = nlon + 180;
    }
    let nlat = (lat + 5.3);
    if (nlat>=90){
        nlat = nlat - 90;
    }
    */
    let nlon = (lon - 10.25);
    if (nlon<=-180){
        nlon = nlon + 180;
    }
    let nlat = (lat + 0.1);
    if (nlat>=90){
        nlat = nlat - 90;
    }

    nlon = ((nlon+180)/360)*100;
    nlat = 100-((nlat+90)/180)*100;

    console.log(nlon,nlat);
    my_pin.setAttribute("style", `position:absolute;top:${nlat}%;left:${nlon}%;transform:translate(-50%,-99%);`);
    
}

export {background,updatePin};
