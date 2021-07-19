import {getIcon, getForecastIcon} from "./getIcon.js"

const API_KEY = '4a6d2d483139e42a50951ced61305539';
// Example API call to get current weather of a city
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// One API Call to get forecast, requires latitude and longitude
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=imperial&exclude={part}&appid={API key}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = `${month} ${date}`
    return time;
  }

function updateWeatherCard(location, conditionIcon, temp, conditionDescription, date) {
    const loc = document.getElementById('weatherLocation');
    const icon = document.querySelector('.weather-icon');
    const deg = document.getElementById('degrees-amount');
    const weatherCondition = document.querySelector('.weather-condition');
    const currDate =  document.querySelector('.current-date');

    loc.innerText = location;
    icon.innerHTML = getIcon(conditionIcon);
    deg.innerText = Math.round(temp);
    weatherCondition.innerText = conditionDescription;
    currDate.innerText = date;
} 

function updateForecast(forcastObj) {
    for (let i = 1; i < 8; i++) {
        let day = document.getElementById(`forecast-day${i}`);
        let temp = document.getElementById(`forecast-day${i}-temp`);
        let icon = document.getElementById(`forecast-day${i}-icon`);

        let forcastTemp = forcastObj.daily[i].temp.day;
        let forcastDay = forcastObj.daily[i].dt;
        let forIcon = forcastObj.daily[i].weather[0].main.toLowerCase();

        day.innerText = timeConverter(forcastDay);
        temp.innerText = Math.round(forcastTemp);     
        icon.innerHTML = getForecastIcon(forIcon);
         
    }
}

const errorClose = document.querySelector('.close-btn');
const alert = document.querySelector('.alert');
errorClose.addEventListener('click', e => {
    hideAlert();
})

function alertMSG() {
    alert.className = 'alert show';
    alert.style.visibility = 'visible';
}

function hideAlert() {
    alert.className = 'alert hide';
    setTimeout(() => {
        alert.style.visibility = 'hidden';
    }, 1000);
}

const toggleTemp = document.getElementById('changeTemp');
async function getWeather(city) {

    try {
        let unit = 'imperial';
        if (toggleTemp.checked) {
            unit = 'metric';
        }
        else {
            unit = 'imperial';
        }
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`, {mode: 'cors'});
        let data = await response.json();
        let temp = data.main.temp;
        let coord = data.coord;
        let date = data.dt;
        let weatherType = data.weather[0].main.toLowerCase();
        let weatherDescription = data.weather[0].description;
        let forecast = await getForecast(coord.lon, coord.lat, unit);
        hideAlert();
        updateWeatherCard(city, weatherType , temp,weatherDescription,  timeConverter(date));
        updateForecast(forecast);
    }
    catch(err) {
        alertMSG();
    }  
}

async function getForecast(lon, lat, unit){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly&appid=${API_KEY}`, {mode: 'cors'});
    return response.json();

}

export {getWeather};


