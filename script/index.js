import { getWeather } from "./getWeather.js";
import {changeToCelsius, ChangeToFahren} from "./changeTemp.js";

getWeather('new york')

const citySearch = document.getElementById('city');
const weather_card = document.querySelector('.current-weather');
const card_container = document.querySelector('.weather-card-wrap');
const toggleTemp = document.getElementById('changeTemp');

card_container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 19;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 19;
    weather_card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)` 
})

card_container.addEventListener('mouseenter', e => {
    weather_card.style.transition = 'none';
})
card_container.addEventListener('mouseleave', e => {
    weather_card.style.transition = '500ms all ease';
    weather_card.style.transform = `rotateY(0deg) rotateX(0deg)` 
})

document.addEventListener("keyup", function(e) {
    if (e.key === 'Enter') {
        getWeather(citySearch.value.toLowerCase())
    }
  });

toggleTemp.addEventListener('change', function() {
    if (this.checked) {
        changeToCelsius();
    } else {
        ChangeToFahren();
    }
  });
