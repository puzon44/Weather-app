// Setting api key value
const apikey = "97e5e636b95c5765ab5623471587c81b";

const time = document.getElementById("time");
const amPm = document.getElementById("am-or-pm");
const dayElement = document.getElementById("date");
const tempData = document.getElementById("tempData");
const humidityData = document.getElementById("humidityData");
const PressureData = document.getElementById("PressureData");
const speedData = document.getElementById("speedData");

// Assigning days
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// Assigning Months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
setInterval(() => {
  // Time portion
  const timeData = new Date();
  const hour = timeData.getHours();
  const minute = timeData.getMinutes();
  const minuteInDoubleDigit = minute <= 10 ? "0" + minute : minute;
  const second = timeData.getSeconds();
  const secondInDoubleDigit = second <= 10 ? "0" + second : second;
  const amorpm = hour >= 13 ? "Pm" : "Am";
  const hourIn12HrFormat = hour >= 13 ? hour % 12 : hour;

  // Date and Day portion
  const day = timeData.getDay();
  const date = timeData.getDate();
  const month = timeData.getMonth();

  // Dom manipulation
  amPm.innerText = amorpm;
  time.innerText = `${hourIn12HrFormat}:${minuteInDoubleDigit}:${secondInDoubleDigit}`;
  time.appendChild(amPm);
  dayElement.innerText = `${days[day]}, ${date} ${months[month]}`;
}, 1000);

// API

getWeatherData();

function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=${apikey}`
    )
      .then((response) => response.json())
      .then((data) => displayData(data));
  });
}

function displayData(data) {
  let { temp, humidity, pressure } = data.main;
  let { speed } = data.wind;
  let { sunrise, sunset } = data.sys;

  // Manipulation
  tempData.innerText = `${temp} °C`;
  humidityData.innerText = `${humidity} %`;
  PressureData.innerText = `${pressure} pa`;
  speedData.innerText = `${speed} km/h`;
}
