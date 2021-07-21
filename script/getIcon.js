//map weather icons from https://erikflowers.github.io/weather-icons/ to openweather data
//https://erikflowers.github.io/weather-icons/api-list.html
let icon = {
    "thunderstorm": "wi-owm-232",
    "lightning": "wi-owm-221",
    "sprinkle": "wi-owm-500",
    "light rain": "wi-owm-500",
    "rain": "wi-owm-504",
    "rain-mix": "wi-owm-620",
    "showers": "wi-owm-701",
    "storm-showers": "wi-owm-901",
    "snow": "wi-owm-622",
    "sleet": "wi-owm-602",
    "smoke": "wi-owm-night-711",
    "day-haze": "wi-owm-night-721",
    "dust": "wi-owm-night-762",
    "fog": "wi-owm-741",
    "haze": "wi-owm-741",
    "mist": "wi-owm-741",
    "cloudy-gusts": "wi-owm-803",
    "tornado": "wi-owm-night-900",
    "day-sunny": "wi-owm-day-800",
    "clear": "wi-owm-day-800",
    "squalls": "wi-owm-741",
    "cloudy": "wi-owm-804",
    "clouds": "wi-owm-804",
    "hurricane": "wi-owm-night-902",
    "snowflake-cold": "wi-owm-night-903",
    "hot": "wi-owm-night-904",
    "windy": "wi-owm-905",
    "hail": "wi-owm-906",
    "strong-wind": "wi-owm-night-957",
    "day-thunderstorm": "wi-owm-day-232",
    "day-lightning": "wi-owm-day-221",
    "day-sprinkle": "wi-owm-day-500",
    "day-rain": "wi-owm-day-504",
    "day-rain-mix": "wi-owm-day-620",
    "day-showers": "wi-owm-day-701",
    "day-storm-showers": "wi-owm-day-531",
    "day-snow": "wi-owm-day-622",
    "day-sleet": "wi-owm-day-601",
    "day-fog": "wi-owm-day-741",
    "day-cloudy-gusts": "wi-owm-day-803",
    "day-sunny-overcast": "wi-owm-day-804",
    "day-hail": "wi-owm-day-906",
    "night-alt-thunderstorm": "wi-owm-night-232",
    "night-alt-lightning": "wi-owm-night-221",
    "night-alt-sprinkle": "wi-owm-night-500",
    "night-alt-rain": "wi-owm-night-504",
    "night-alt-rain-mix": "wi-owm-night-620",
    "night-alt-showers": "wi-owm-night-701",
    "night-alt-storm-showers": "wi-owm-night-531",
    "night-alt-snow": "wi-owm-night-622",
    "night-alt-sleet": "wi-owm-night-601",
    "night-fog": "wi-owm-night-741",
    "night-clear": "wi-owm-night-800",
    "night-alt-cloudy-gusts": "wi-owm-night-803",
    "night-alt-cloudy": "wi-owm-night-804",
    "night-alt-hail": "wi-owm-night-906"
  }

export function getIcon(condition) {
    return `<i class="wi ${icon[condition]}" id="iconStyle"></i>`;
}

export function getForecastIcon(condition) {
    return `<i class="wi ${icon[condition]}" id="forecast-iconStyle"></i>`;
}

 
