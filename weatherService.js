let apiKey = "282fa25ff7e477b0ff526c36cdcc0786";
function askCoordValue(){
    let city =$(".city").val();
    let askCoordUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    $.get(askCoordUrl, data => {
         let lat = data[0].lat.toFixed(2);
         let lon = data[0].lon.toFixed(2);
  askWeather(lat,lon);
    });
}
function askWeather(lat, lon) {
    let askWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    $.get(askWeatherUrl, data => {
       let city = data.name;
       let description = data.weather[0].description;
       let temp = data.main.temp + "°C";
       let feels_like = data.main.feels_like;
       let humidity = data.main.humidity + "%";
       let wind = data.wind.speed;
       renderApp(city, description,temp,feels_like,humidity,wind);
    })
}
