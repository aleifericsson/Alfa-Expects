import './box.css';
import form from './form.js';
import weatherDisp from './weatherDisp';



const box = () => {
    const frame = document.createElement("div");
    frame.classList.add("box");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Alfa Expects";
    frame.appendChild(title);
    frame.appendChild(weatherDisp());
    frame.appendChild(form());
    
    return frame;
}

export default box;