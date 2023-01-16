$(".search").on("click", askCoordValue);

function renderApp(city, des, temp, feels, humidity, wind) {
    let tableBody = $(".table-body");
    tableBody.append(`
    <tr>
    <td>${city}</th>
    <td>${des}</td>
    <td>${temp}</td>
    <td>${feels}</td>
    <td>${humidity}</td>
    <td>${wind}</td>
    </tr>
    `)
}