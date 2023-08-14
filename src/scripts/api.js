import decrypt from '../config.js';
import mystery from './mystery.js';
import Day from './day.js';
import {updateDays} from '../ui/weatherDisp.js';

const api = async () => {
    let city;
    let url=document.URL;
    const index = url.lastIndexOf('=');
    if (index == -1){
        city = "manchester"
    }
    else{
        city = url.substring(index+1);
    }

    const myst1 = await mystery();
    const myst = await decrypt(myst1);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myst}`);
    let city_info = await response.json()
    
    if (city_info.cod === "404"){
        city = "manchester";
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myst}`);
        city_info = await response2.json()
    }

    const city_lon = city_info.coord.lon;
    const city_lat = city_info.coord.lat;

    const response3 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city_lat}&lon=${city_lon}&exclude=minutely,alerts&units=metric&appid=${myst}`);
    const weather_info = await response3.json();

    return [city_info,weather_info];
}

let day_list = []

const crunchData = (city_dat,wea_dat) => {
    day_list = [];
    wea_dat.daily.forEach(dail => day_list.push(new Day(city_dat.name,city_dat.sys.country,dail.dt,dail.weather[0].icon,dail.temp.day)));
    updateDays();
}

export {api,crunchData,day_list};