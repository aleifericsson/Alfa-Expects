import './box.css';


const box = () => {
    const frame = document.createElement("div");
    frame.classList.add("box");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Alfa Expects";
    frame.appendChild(title);

    
    return frame;
}

export default box;