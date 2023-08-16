import './box.css';
import form from './form.js';
import {weatherDisp} from './weatherDisp';



const box = () => {
    const frame = document.createElement("div");
    frame.classList.add("box");
    frame.classList.remove("right-side");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Alfa Expects";
    frame.appendChild(title);
    frame.appendChild(weatherDisp());

    const frame2 = document.createElement("div");
    frame2.classList.add("frame-deux");

    const text = document.createElement("div");
    text.classList.add("form-text");
    text.textContent = "Enter a city:";
    frame2.appendChild(text);
    frame2.appendChild(form());
    
    frame.appendChild(frame2);

    return frame;
}

const updateBox = (lon) => {
    const the_box = document.querySelector(".box");
    if (lon <= 5.725){
        the_box.classList.add("right-side");
        the_box.classList.remove("left-side");
    }
    else{
        the_box.classList.remove("right-side");
        the_box.classList.add("left-side");
    }
}

export {box,updateBox};