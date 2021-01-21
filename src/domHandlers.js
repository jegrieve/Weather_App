function fillInputs(data) {
  const city = document.getElementById('city');
  city.innerHTML = data.name;
  const country = document.getElementById('country');
  country.innerHTML = data.sys.country;
  const temperature = document.getElementById('temperature');
  temperature.innerHTML = data.main.temp;
  const weather = document.getElementById('weather');
  weather.innerHTML = data.weather[0].main;
  const feelTemp = document.getElementById('feel-temp');
  feelTemp.innerHTML = data.main.feels_like;
  const humidity = document.getElementById('humidity');
  humidity.innerHTML = data.main.humidity;
}

function getCityInput() {
  const cityInput = document.getElementById('get-city-input');
  let value = cityInput.value;
  cityInput.value = '';
  return value;
}

export { fillInputs, getCityInput };
