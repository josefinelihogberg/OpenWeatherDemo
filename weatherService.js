let APIKey = "282fa25ff7e477b0ff526c36cdcc0786";

function fetchJson(url) {
 return fetch(url).then(resp=>resp.json());
}

function findCityCoord(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    return fetchJson(url);
}

function extractCoords(data) {
    return {
      lat: data.coord.lat,
      lon: data.coord.lon
    }
  }
function findWeather(coords) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${APIKey}`;
    return fetchJson(url);
}
function transformWeatherData(data) {
    return {
        location:data.name,
        description: data.weather[0].description,
        temp: data.main.temp.toFixed(0),
        feelTemp:data.main.feels_like.toFixed(0),
        cloud: data.clouds.all,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind:data.wind.speed
    }
}


async function searchWeather(city) { 
let coords = await findCityCoord(city).then(extractCoords); 
console.log(coords);
let weatherData = await findWeather(coords).then(transformWeatherData); 
console.log(weatherData);
    return weatherData;
}
