// 
function formatDate(timestamp){
  let date = new Date(timestamp)
  let hours = date.getHours()
  if (hours < 10){
      hours = `0${hours}`;
  }
  let minutes = date.getMinutes()
  if (minutes < 10){
      minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`
}

let now = new Date()
let dateElement = now.getDate();
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

let yearElement = document.querySelector("#date");
yearElement.innerHTML = `${day} ${dateElement} ${month} ${year}`



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
    let timeElement = document.querySelector("#time")
    timeElement.innerHTML = formatDate(response.data.dt* 1000)
    
    celsiustemp = response.data.main.temp;
     
    let icon = document.querySelector("#pic");
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)

  }
  function search(city) {
    let apiKey = "e22adb13ecfe9db5af2e8b64dfc0ed33";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  function submitWeather(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    search(city);
  }

function displayFahrenheit(event){
  event.preventDefault();
  let temp = document.querySelector("#temp");
  let farTemp = (celsiustemp * 9/5) + 32;
  temp.innerHTML = Math.round(farTemp);
}

function displayCelsius (event){
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = Math.round(celsiustemp);
}


let celsiustemp = null;


  let form = document.querySelector("#search-form");
  form.addEventListener("submit", submitWeather);
  

  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.addEventListener("click", displayFahrenheit);

  let celsius= document.querySelector("#celsius");
  celsius.addEventListener("click", displayCelsius);

  search("New York");