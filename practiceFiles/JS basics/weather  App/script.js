const apiKey = "69d81e0eb61acbd514bfd26242146510";

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const city = document.getElementById("city").value;
            if (city !== "") {
                // document.getElementById("WeatherReport").classList.add("WeatherReport");
                getWeatherByCity(city);
            }
        }
    });

    const searchBtn = document.getElementById("search");
    searchBtn.addEventListener("click", () => {
        const city = document.getElementById("city").value;
        if (city !== "") {
            // document.getElementById("WeatherReport").classList.add("WeatherReport");
            getWeatherByCity(city);
        }
    });

    

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            handelRadioChange(e);
        });
    });
});


document.getElementById("locationPermission").addEventListener("click", () => {
    getPermission();
});

function getPermission() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const longitude = position.coords.longitude;
            const latitude = position.coords.latitude;
            document.getElementById("locationDiv").classList.add("locationDiv");

            const userCoords = {
                longi: longitude,
                lati: latitude
            };
            sessionStorage.setItem('userCoords', JSON.stringify(userCoords));

            console.log(longitude);
            console.log(latitude);
            getWeatherByCoords(longitude, latitude);
        },
            (error) => {
                // Error callback
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.log("Location access denied.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.log("Position unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.log("Request timed out.");
                        break;
                    default:
                        console.log("Unknown error occurred.");
                }
            });
    } else {
        console.log("Geo Location not supported");
    }
}

// getPermission();

async function getWeatherByCity(city) {
    console.log(city);
    document.getElementById("city").value = "";
    document.getElementById("WeatherReport").classList.add("WeatherReport");
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    document.getElementById("noCity").classList.add("noCity");
    document.getElementById("loading-png").classList.remove("loading-png");

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        document.getElementById("loading-png").classList.add("loading-png");

        console.log(data.coord.lon);
        console.log(data.coord.lat);

        console.log(data.main.temp);
        document.getElementById("WeatherReport").classList.remove("WeatherReport");
        document.getElementById("temprature").innerText = data.main.temp;
        document.getElementById("cityContainer").innerText = city.charAt(0).toUpperCase() + city.slice(1);
        document.getElementById("countryFlag").src = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
        document.getElementById("description").innerText = data.weather[0].main;
        document.getElementById("windContainer").innerText = data.wind.speed + " m/s";
        document.getElementById("humidityContainer").innerText = data.main.humidity + "%";
        document.getElementById("cloudContainer").innerText = data.clouds.all + "%";

        const pngId = data.weather[0].icon;
        const png = `https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${pngId}.png`;
        const pngElement = document.getElementById("weather-png");
        pngElement.src = png;
    } catch (err) {
        document.getElementById("WeatherReport").classList.add("WeatherReport");
        document.getElementById("noCity").classList.remove("noCity");
        console.log("Error from city: " + err);
    }
}

async function getWeatherByCoords(longitude, latitude) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    document.getElementById("loading-png").classList.remove("loading-png");

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        document.getElementById("loading-png").classList.add("loading-png");

        console.log(data.main.temp);
        document.getElementById("WeatherReport").classList.remove("WeatherReport");
        document.getElementById("temprature").innerText = data.main.temp;
        document.getElementById("cityContainer").innerText = data.name;
        document.getElementById("countryFlag").src = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
        document.getElementById("description").innerText = data.weather[0].main;
        document.getElementById("windContainer").innerText = data.wind.speed + " m/s";
        document.getElementById("humidityContainer").innerText = data.main.humidity + "%";
        document.getElementById("cloudContainer").innerText = data.clouds.all + "%";

        const pngId = data.weather[0].icon;
        const png = `https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${pngId}.png`;
        const pngElement = document.getElementById("weather-png");
        pngElement.src = png;
    } catch (err) {
        console.log("Error from geo: " + err);
    }
}

function getCoordsFromLocal() {
    if (sessionStorage.getItem('userCoords')) {
        console.log('userCoords');
        document.getElementById("locationDiv").classList.add("locationDiv");
        const userCoords = JSON.parse(sessionStorage.getItem('userCoords'));
        getWeatherByCoords(userCoords.longi, userCoords.lati);
    }else{
        console.log("no user coords");
    }
}

getCoordsFromLocal();

function handelRadioChange(event) {
    if (event.target.id === "your-weather") {
        document.getElementById("locationDiv").classList.remove("locationDiv");
        document.getElementById("cityDiv").classList.add("cityDiv");
        document.getElementById("your-weather-label").classList.add("bg-white");
        document.getElementById("search-weather-label").classList.remove("bg-white");
        document.getElementById("noCity").classList.add("noCity");
        getCoordsFromLocal();
    } else if (event.target.id === "search-weather") {
        document.getElementById("cityDiv").classList.remove("cityDiv");
        document.getElementById("locationDiv").classList.add("locationDiv");
        document.getElementById("WeatherReport").classList.add("WeatherReport");
        document.getElementById("your-weather-label").classList.remove("bg-white");
        document.getElementById("search-weather-label").classList.add("bg-white");
    }
}
