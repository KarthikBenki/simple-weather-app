const API_KEY = `450cc008d295d59645ea6660e5183df0`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");


form.addEventListener('submit', (event)=>{
    getWeather(search.value);
    event.preventDefault();
})

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading... </h2>`
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
   showWeather(data);
};


const showWeather = (data) =>{
    if (data.cod == '404') {
        weather.innerHTML = `<h2>Oops Location not Found</h2>`
        return;
    }
    weather.innerHTML = ` <div>
    <img
      src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
      alt="image"
      style="margin-right: 10px"
    />
  </div>
  <div>
    <h2>${data.main.temp} ℃</h2>
    <h4>${data.weather[0].description}</h4>
  </div>`
}
