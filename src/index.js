import './main.scss';
import getApiData from './getApi.js';
import fillInputs from './domHandlers.js';

let apiData = getApiData('vancouver');
apiData.then(function (data) {
  fillInputs(data);
  //   console.log(data);
});

//Want city and country
//want temperature (F)
//want weather ("clouds")
//want feels like temp
//want wind (5mph)
//want humidity (69%)

//So when I get in
//1.get each of these data into variables and log them out
//2.Work on the basic html portions
//3.The screen will show each of these properties
//4.Input search bar will work
//5.add styling and any extra things necessary
