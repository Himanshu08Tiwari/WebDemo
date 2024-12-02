const API_KEY = "3ec1ff4da3e9c788f1bbcdca1d52b24b";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const cityName = document.querySelector(".input-area");
const searchBtn = document.querySelector(".search-btn");
const cloudIcon = document.querySelector("#cloud-img");

async function checkWeather(city) {
    const res = await fetch(`${url}${city}&units=metric&appid=${API_KEY}`);
    const data = await res.json();
    console.log(data);


    document.querySelector(".temp-detail").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
    document.querySelector("#wind-speed").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main === "Fog") {
        cloudIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main === "Smoke") {
        cloudIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main === "Clear") {
        cloudIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main === "Clouds") {
        cloudIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main === "Rain") {
        cloudIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main === "Snow") {
        cloudIcon.src = "images/snow.png";
    }


}

searchBtn.addEventListener('click', () => {
    checkWeather(cityName.value);
})
