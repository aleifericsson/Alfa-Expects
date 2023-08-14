import handleIcons from "./iconHandling";

function Day(city,country,epoch,icon_code,day_temp){
    var utcSeconds = epoch;
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);

    this.city = city;
    this.country = country;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.day = days[d.getDay()];

    const icon_list = handleIcons();
    this.icon_code = icon_code.substring(0,2);

    const index = icon_list.findIndex((i) => i.code==this.icon_code);
    this.icon = icon_list[index].img;
    this.day_temp = Math.round(day_temp).toString() +" °C";

}

export default Day;