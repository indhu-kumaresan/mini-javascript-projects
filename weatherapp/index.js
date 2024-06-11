const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "4390da7c6ca9574359eff240f36cab60";

weatherform.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityinput.value.trim();
    if(city){
        try{
         const weatherdata = await getweatherdata(city);
         displayweatherinfo(weatherdata);
        }
    catch(error){
        console.error(error);
        displayerror(error);
    }
}
    else{
        displayerror("Please enter a city");
    }

});

async function getweatherdata(city){
    const apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    console.log(response);
    if(!response.ok){
        throw new Error("could not fetch weather data");  
    }
    return await response.json();

}

function displayweatherinfo(data){
   const {name: city, 
    main:{temp,humidity},
    weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";
    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const descdisplay = document.createElement("p");
    const emojidisplay = document.createElement("p");
    citydisplay.textContent = city;
    tempdisplay.textContent = `${((temp - 273.15)* 9/5 + 32).toFixed(1)}F`;
    humiditydisplay.textContent = `${humidity}`;
    descdisplay.textContent = `${description}`;
    emojidisplay.textContent = getweatheremoji(id);


    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("tempdisplay");
    humiditydisplay.classList.add("humiditydisplay");
    descdisplay.classList.add("descdisplay");
    emojidisplay.classList.add("emojidisplay");


    card.appendChild(citydisplay);
    card.appendChild(tempdisplay);
    card.appendChild(humiditydisplay);
    card.appendChild(descdisplay);
    card.appendChild(emojidisplay);

}

function getweatheremoji(weatherId){
    switch(true){
        case (weatherId >=200 && weatherId < 300):
            return "🌧️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "⛈️";
        case (weatherId >= 600 && weatherId < 700):
             return "❄️";
        case (weatherId >= 700 && weatherId < 800):
             return "🌫️";
        case (weatherId == 800):
             return "☀️";
        case (weatherId >= 801 && weatherId < 810):
             return "☁️";
        default:
            return "?";
    }


}

function displayerror(message){
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("errordisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay);

}