let now = new Date();

let date = now.getDate();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let hour = now.getHours();
let min = now.getMinutes();

let time = document.querySelector("#time");
time.innerHTML =` ${hour}:${min}`;
let today = document.querySelector("#date");
today.innerHTML =`${day} ${date} ${month} ${year}`;


function displayWeather(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temp").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humid").innerHTML = Math.round(
      response.data.main.humidity
    );
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#describe").innerHTML = response.data.weather[0].main;
  }
  function search(city) {
    let apiKey = "e22adb13ecfe9db5af2e8b64dfc0ed33";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  function submitWeather(event) {
    event.preventDefault();
    // let searchInput = document.querySelector("#search-text-input");
    // let h1 = document.querySelector("h1");
    // h1.innerHTML = searchInput.value;
    let city = document.querySelector("#search-text-input").value;
    search(city);
  }
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", submitWeather);
  
  search("New York");