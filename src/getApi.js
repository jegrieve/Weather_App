async function getApiData(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9b3ce70c93afe0a18d531d803314b8d`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();

  if (weatherData.cod === '404')
    throw new Error(alert('Data could not be retrieved for this city'));
  return weatherData;
}

export default getApiData;
