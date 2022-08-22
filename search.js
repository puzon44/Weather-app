const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const city = document.querySelector(".city");
const cityTemp = document.querySelector(".temp");
const weatherIcon = document.getElementById("weatherIcon");
const weatherStatus = document.querySelector(".status");
const Humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind-Speed");


const apikey = "f2d06b7a960941702742599a5fd50c1e";

function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  city.innerText = name;
  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  let temprature = temp - 273.15;
  cityTemp.innerText = `${Math.floor(temprature)}° C`;
  weatherStatus.innerHTML = `Weather-Status: ${description}`;
  Humidity.innerText = `Humidity: ${humidity} %`;
  wind.innerText = `Wind-Speed: ${speed} km/h`;
}

function fetchWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apikey
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch(() => alert("No Data found" + " 404"));
}

// codes for serach button

searchButton.addEventListener("click", () => {
  fetchWeather(searchBar.value);
});

searchBar.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    fetchWeather(searchBar.value);
  }
});