import './main.scss';

async function getApiData(city) {
  const reponse = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9b3ce70c93afe0a18d531d803314b8d`,
    { mode: 'cors' }
  );
  const weatherData = await reponse.json();
  console.log(weatherData);
}

getApiData('vancouver');
