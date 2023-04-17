// loader

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

//apiKey = 35643dc27caa13f2fa8b3d71c39f6499
//api = 'http://api.weatherstack.com/current?access_key=';

('http://api.openweathermap.org/geo/1.0/direct?q=briansk&appid=7340242db9652e40755295b11bdeb316');

window.addEventListener('DOMContentLoaded', () => {
  const apiKey = '44c3bbf68550b329c105715ce4cc6b02';

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=bryansk&appid=${apiKey}&units=metric`;

  const searchBox = document.querySelector('.search__box');
  const searchInput = searchBox.querySelector('input');
  const searchBtn = searchBox.querySelector('.search__btn');

  async function getWeather(city) {
    const city = (document.querySelector('.city').innerHTML = data.name);
    const temp = (document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '&#8451');
    const humadity = (document.querySelector('.humadity__info').innerHTML =
      data.main.humadity + '%');
    const wind = (document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h');

    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
  }

  searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
  });
  getWeather();
});
