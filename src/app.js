function displayTemperature(response) {
  console.log(response);
  temperature = response.data.main.temp;
  humidity = response.data.main.humidity;
  wind = response.data.wind.speed;
  description = response.data.weather[0].main;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(temperature);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(wind);

  let descriptionElement = document.querySelector("#day-description");
  descriptionElement.innerHTML = description;
}

let apiKey = "c3b04aa14e86dfd85f0a148933f64476";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
