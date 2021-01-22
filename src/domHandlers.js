function fillInputs(data) {
  const city = document.getElementById('city');
  city.innerHTML = data.name + ',';
  const country = document.getElementById('country');
  country.innerHTML = data.sys.country;
  const temperature = document.getElementById('temperature');
  temperature.innerHTML = data.main.temp + '°F';
  const weather = document.getElementById('weather');
  weather.innerHTML = data.weather[0].main;
  const feelTemp = document.getElementById('feel-temp');
  feelTemp.innerHTML = 'feels like ' + data.main.feels_like + '°F';
  const wind = document.getElementById('wind');
  wind.innerHTML = 'wind speed is ' + data.wind.speed + 'mph';
}

function getCityInput() {
  const cityInput = document.getElementById('get-city-input');
  let value = cityInput.value;
  cityInput.value = '';
  return value;
}

function changeBackgroundImg(data) {
  data = data.weather[0].main.toLowerCase();
  switch (data) {
    case 'thunderstorm':
      document.body.style.backgroundImage = "url('./assets/thunderstorm.jpg')";
      break;
    case 'drizzle':
      document.body.style.backgroundImage = "url('./assets/drizzle.jpg')";
      break;
    case 'rain':
      document.body.style.backgroundImage = "url('./assets/rain.jpg')";
      break;
    case 'snow':
      document.body.style.backgroundImage = "url('./assets/snow.jpg')";
      break;
    case 'clear':
      document.body.style.backgroundImage = "url('./assets/clear.jpg')";
      break;
    case 'clouds':
      document.body.style.backgroundImage = "url('./assets/cloudy.jpg')";
      break;
    default:
      document.body.style.backgroundImage = "url('./assets/extra.jpg')";
  }
}

export { fillInputs, getCityInput, changeBackgroundImg };
