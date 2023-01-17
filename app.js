$(".weather-table thead").append(`
<tr>
<th>Location</th>
<th>Description</th>
<th>Temperature</th>
<th>Feels like temp</th>
<th>Cloud</th>
<th>Humidity</th>
<th>Air pressure</th>
<th>Wind speed</th>
</tr>
`
);

function renderWeather (data) {
    $(".weather-table tbody").append(`
    <tr>
     <td>${data.location}</td>
     <td>${data.description}</td>
     <td>${data.temp}°C</td>
     <td>${data.feelTemp}°C</td>
     <td>${data.cloud}</td>
     <td>${data.humidity}</td>
     <td>${data.pressure}</td>
     <td>${data.wind}</td>
    </tr>
    `)
}

$(".location-field").on("keydown", event=> {
    if(event.key == "Enter") {
        cityName = $(".location-field").val();
        console.log(cityName);
        searchWeather(cityName)//调用searchWeather函数，传入用户输入的城市名称。 因为是async异步函数，所以返回一个Promise对象。
        .then(renderWeather)//能用then()方法说明searchWeather函数返回一个Promise对象，即weatherData  ！拿到weatherdata以后，调用回调函数renderWeather，以处理weatherData。
        .catch(err => $("body").text("Something went wrong!")); //如果拿不到weatherdata，返回了错误信息时的处理方法
}})
