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

    let day_list = [];
    for (let i = 0; i < 5; i++){
        day_list.push(weatherDay("Mon","☁️","25°C"))
    }

    day_list.forEach(day => stack.appendChild(day));

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

function Day(city,country,epoch,wea_desc,day_temp){
    var utcSeconds = epoch;
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);

    this.city = city;
    this.country = country;
    this.day = d.getDay();
    this.wea_desc = wea_desc;
    this.day_temp = Math.round(day_temp);

}

export default weatherDisp;