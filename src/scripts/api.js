import config from '../config.js';

const api = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.MY_KEY}`);
    const city_info = await response.json()
    
    const city_lon = city_info.coord.lon;
    const city_lat = city_info.coord.lat;

    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city_lat}&lon=${city_lon}&exclude=minutely,alerts&units=metric&appid=${config.MY_KEY}`)
    const weather_info = await response2.json();

    return weather_info;
}

export default api;