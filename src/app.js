function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

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

  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formatDate(response.data.dt * 1000);
}

let city = "Austin";
let apiKey = "c3b04aa14e86dfd85f0a148933f64476";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
