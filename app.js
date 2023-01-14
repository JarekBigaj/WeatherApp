const apiUrlKrakow = 'https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&current_weather=true';
const apiUrlWarsaw ='https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&current_weather=true';
const apiUrlMarcowka ='https://api.open-meteo.com/v1/forecast?latitude=49.79&longitude=19.62&current_weather=true';

const krakowButton = document.querySelector('[data-id="krakow"]');
const marcowkaButton = document.querySelector('[data-id="marcowka"]');
const warsawButton = document.querySelector('[data-id="warsaw"]');

const initApiShowed = fetch(apiUrlKrakow).then(response => response.json())
.then(response => {
    const {current_weather} = response;
    displayWeatherData(current_weather);
});

krakowButton.addEventListener('click', () =>{
    fetch(apiUrlKrakow).then(response => response.json())
    .then(response => {
        const {current_weather} = response;
        displayWeatherData(current_weather);
    });
});

warsawButton.addEventListener('click', () =>{
    fetch(apiUrlWarsaw).then(response => response.json())
    .then(response => {
        const {current_weather} = response;
        displayWeatherData(current_weather);
    });
});

marcowkaButton.addEventListener('click', () =>{
    fetch(apiUrlMarcowka).then(response => response.json())
    .then(response => {
        const {current_weather} = response;
        displayWeatherData(current_weather);
    });
});

const displayWeatherData = (currentWeather) =>{
    const timeLabel = document.querySelector('[data-id="time"]')
    const tempLabel = document.querySelector('[data-id="temperature"]');
    const windSpeedLabel = document.querySelector('[data-id="windSpeed"]');
    const weatherCodeLabel = document.querySelector('[data-id="weatherCode"]');

    const {temperature,time,weathercode,winddirection,windspeed} = currentWeather;

    timeLabel.textContent = time;
    tempLabel.textContent = temperature+" °C";
    windSpeedLabel.textContent = windspeed + " km/h";
    const informationAboutCurrentWeather = Object.entries(weatherCodeList).find((weather,index) => {
        const [code,informationAboutWeather] = weather;
        if(parseInt(code) === weathercode){
            return informationAboutWeather
        }
    })
    weatherCodeLabel.textContent = informationAboutCurrentWeather;
    
}


const weatherCodeList = {
    0 : "Clear sky",
    1 : "Mainly clear, partly cloudy, and overcast",
    2 : "Mainly clear, partly cloudy, and overcast", 
    3 : "Mainly clear, partly cloudy, and overcast",
    45 : "Fog and depositing rime fog", 
    48 : "Fog and depositing rime fog",
    51 : "Drizzle: Light, moderate, and dense intensity",
    53 : "Drizzle: Light, moderate, and dense intensity", 
    55 : "Drizzle: Light, moderate, and dense intensity",
    56 : "Freezing Drizzle: Light and dense intensity",
    57 : "Freezing Drizzle: Light and dense intensity",
    61 : "Rain: Slight, moderate and heavy intensity",
    63 : "Rain: Slight, moderate and heavy intensity",
    65 : "Rain: Slight, moderate and heavy intensity",
    66 : "Freezing Rain: Light and heavy intensity",
    67 : "Freezing Rain: Light and heavy intensity",
    71 : "Snow fall: Slight, moderate, and heavy intensity",
    73 : "Snow fall: Slight, moderate, and heavy intensity",
    75 : "Snow fall: Slight, moderate, and heavy intensity",
    77 : "Snow grains",
    80 : "Rain showers: Slight, moderate, and violent",
    81 : "Rain showers: Slight, moderate, and violent", 
    82 : "Rain showers: Slight, moderate, and violent",
    85 : "Snow showers slight and heavy", 
    86 : "Snow showers slight and heavy",
    95 : "Thunderstorm: Slight or moderate",
    96 : "Thunderstorm with slight and heavy hail",
    99 : "Thunderstorm with slight and heavy hail"
}