async function getdata() {
    const response = await fetch("/api/getdata");
    const data = await response.json();

    const temp = document.getElementById("temp");
    const wind = document.getElementById("wind");
    const feels_like = document.getElementById("feels_like");
    const weather = document.getElementById("wheather");
    const weather_ico = document.getElementById("wheatherico");
    temp.innerHTML = `Temperature: ${data.main.temp}°C`;
    wind.innerHTML = `Wind speed: ${data.wind.speed}m/s`
    feels_like.innerHTML = `Feels Like: ${data.main.feels_like}°C`
    weather.innerHTML = `${data.weather[0].description}`;
    weather_ico.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
function changecity() {
    const city = document.getElementById("City").value;
    
    fetch("/api/changecity", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ city: city })
    });
    getdata()
}
changecity()