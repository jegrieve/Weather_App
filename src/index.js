import './main.scss';
import getApiData from './getApi.js';
import {
  fillInputs,
  getCityInput,
  changeBackgroundImg,
} from './domHandlers.js';

getApiData('mexico city').then((d) => {
  fillInputs(d);
  changeBackgroundImg(d);
});
document.getElementById('get-city-input').focus();

const submitInputBtn = document.getElementById('submit-city-btn');
submitInputBtn.addEventListener('click', function (e) {
  e.preventDefault();
  getApiData(getCityInput()).then((d) => {
    fillInputs(d);
    changeBackgroundImg(d);
  });
});
