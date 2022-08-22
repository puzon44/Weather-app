// Setting api key value
const apikey = "f2d06b7a960941702742599a5fd50c1e";

const time = document.getElementById("time");
const am_pm = document.getElementById("am-or-pm");
const dayElement = document.getElementById("date");

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
  time.innerText = `${hourIn12HrFormat}:${minuteInDoubleDigit}:${secondInDoubleDigit}`;
  am_pm.innerHTML = `${amorpm}`;
  dayElement.innerText = `${days[day]}, ${date} ${months[month]}`;
}, 1000);

console.log("Hello world");

// API

getWeatherData();

function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);
    console.log("hehe");

    let { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apikey}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
}


function displayData(data){

}


console.log("GEo");
