// openweathermap API
const key = 'fea7d518190229011784764d73404219';


const form = document.querySelector('form');
const input = document.querySelector('input');
const weatherContainer = document.querySelector('.weather-container');

form.addEventListener('submit', function () {
  event.preventDefault();
  let city = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`
  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const convertWeatherData = await

      function () {

        let temp = Math.round(data.main.temp - 273);
        let weatherDescription = data.weather[0].description;
        let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let backgroundColor;

        // Pick color for the background
        if (temp > 40) {
          backgroundColor = 'red';
        } else if (temp > 35) {
          backgroundColor = 'orange';
        } else if (temp > 30) {
          backgroundColor = 'yellow';
        } else if (temp > 20) {
          backgroundColor = 'deepskyblue';
        } else if (temp > 10) {
          backgroundColor = 'purple';
        } else if (temp > 0) {
          backgroundColor = 'grey';
        } else {
          backgroundColor = 'white';
        }

        let weatherCard =
          ` 
    <div class="weather-card">     
    <p class="city-name">${city}</p>
    <p>${temp} &#176;C</p>
    <p>${weatherDescription}<img src="${icon}"></p>
    </div>
    `;

        weatherContainer.innerHTML = weatherCard;

        const weatherCardBackground = document.querySelector('.weather-card');
        weatherCardBackground.style.backgroundColor = backgroundColor;

      }
      convertWeatherData();
    } catch (error) {
      alert('Cant find city.Try again!');
    }
  }
  getData();
});