import './form.css';


const form = () => {
    const frame = document.createElement("div");
    frame.classList.add("form");

    const text = document.createElement("div");
    text.classList.add("form-text");
    text.textContent = "Enter a city:";
    frame.appendChild(text);

    const city_inp = document.createElement("input");
    city_inp.setAttribute("type", "text");
    city_inp.classList.add("input-city");
    frame.appendChild(city_inp);

    
    return frame;
}

export default form;