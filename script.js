// script.js
const API_KEY = '06bba629fa20cb6ecda05a946534f60a';

function loadWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("weather-result").innerHTML =
        `<h2>${data.name}</h2>
         <p>Temp: ${data.main.temp}°C</p>
         <p>Condition: ${data.weather[0].description}</p>`;
    })
    .catch(err => console.error('Error:', err));
}
