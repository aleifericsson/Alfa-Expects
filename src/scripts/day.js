function Day(city,country,epoch,wea_desc,day_temp){
    var utcSeconds = epoch;
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);

    this.city = city;
    this.country = country;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.day = days[d.getDay()];

    this.wea_desc = wea_desc;
    this.day_temp = Math.round(day_temp).toString() +" °C";

}

export default Day;