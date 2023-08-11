import decrypt from '../config.js';
import mystery from './mystery.js'

const api = async (city) => {
    const myst1 = await mystery();
    const myst = await decrypt(myst1);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myst}`);
    const city_info = await response.json()
    
    const city_lon = city_info.coord.lon;
    const city_lat = city_info.coord.lat;

    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city_lat}&lon=${city_lon}&exclude=minutely,alerts&units=metric&appid=${myst}`);
    const weather_info = await response2.json();

    return weather_info;
}

export default api;