let APIKey = "282fa25ff7e477b0ff526c36cdcc0786";

function fetchJson(url) {
 return fetch(url).then(resp=>resp.json());//返回的是Promise对象
}
//创建findCityCoord函数，输入城市名，返回jSon格式的城市坐标
function findCityCoord(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    return fetchJson(url);
}
//创建extractCoord函数，把fetch Promise对象里的值带出来处理
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

//创建异步函数seachWeather，返回一个Promise对象，即weatherData
async function searchWeather(city) { //异步函数searchWeather用来返回Promise结果weatherData
let coords = await findCityCoord(city).then(extractCoords); // await返回异步函数findCityCoord的返回值，即一个Promise对象。then()方法用来处理该Promise对象的返回值--能用的jSON格式的response,将坐标提取出来
console.log(coords);
let weatherData = await findWeather(coords).then(transformWeatherData); // await返回一个Promise,即所有天气信息数据。调用函数transformWeatherData以提取出需要的天气属性
console.log(weatherData);
    return weatherData;
}