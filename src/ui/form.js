import './form.css';


const form = () => {
    const frame = document.createElement("form");
    frame.classList.add("form");

    const city_inp = document.createElement("input");
    city_inp.setAttribute("type", "text");
    city_inp.setAttribute("id","city");
    city_inp.setAttribute("name","city");
    city_inp.setAttribute("autocomplete","off");
    frame.appendChild(city_inp);

    const submit = document.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("id","submit");
    submit.textContent = "Submit";
    frame.appendChild(submit);

    
    return frame;
}

export default form;