import './weatherDisp.css';


const weatherDisp = () => {
    const frame = document.createElement("div");
    frame.classList.add("weatherDisp");

    const city = document.createElement("div");
    city.classList.add("city");
    city.textContent = "London, UK";
    frame.appendChild(city);

    const stack = document.createElement("div");
    stack.classList.add("weatherStack");

    stack.appendChild(weatherDay("Mon","☁️","25°C"));
    stack.appendChild(weatherDay("Tue","☁️","25°C"));
    stack.appendChild(weatherDay("Wed","☁️","25°C"));

    frame.appendChild(stack);
    
    return frame;
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

export default weatherDisp;