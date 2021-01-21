function fillInputs(data) {
  const city = document.getElementById('city');
  city.innerHTML = data.name;
  const country = document.getElementById('country');
  country.innerHTML = data.sys.country;
  const temperature = document.getElementById('temperature');
  temperature.innerHTML = data.main.temp;
  const weather = document.getElementById('weather');
  weather.innerHTML = data.weather.main;
  const feelTemp = document.getElementById('feel-temp');
  feelTemp.innerHTML = data.main.feels_like;
  const humidity = document.getElementById('humidity');
  humidity.innerHTML = data.main.humidity;
}

export default fillInputs;
