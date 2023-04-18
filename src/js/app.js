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

//('http://api.openweathermap.org/geo/1.0/direct?q=briansk&appid=7340242db9652e40755295b11bdeb316');

window.addEventListener('DOMContentLoaded', () => {
  const apiKey = '44c3bbf68550b329c105715ce4cc6b02';

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  const searchBox = document.querySelector('.search__box');
  const searchInput = searchBox.querySelector('.input');
  const searchBtn = searchBox.querySelector('.search__btn');
  const weatherIcon = document.querySelector('.weather__image i');

  async function getWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await res.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451';
    document.querySelector('.humadity__info').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if (data.weather[0].main == 'Clear') {
      weatherIcon.className = 'fa-solid fa-sun';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.className = 'fa-solid fa-cloud-rain';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.className = 'fa-solid fa-cloud-mist';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.className = 'fa-solid fa-cloud-drizzle';
    }
  }

  searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
    searchInput.value = '';
  });
  getWeather();
});
