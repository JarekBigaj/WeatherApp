const apiUrlKrakow = 'https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&hourly=temperature_2m,precipitation,rain,showers,snowfall';
const apiUrlWarsaw ='https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&hourly=temperature_2m,precipitation,rain,showers,snowfall';
const apiUrlMarcowka ='https://api.open-meteo.com/v1/forecast?latitude=49.79&longitude=19.62&hourly=temperature_2m,precipitation,rain,showers,snowfall';


fetch(apiUrlKrakow).then(response => response.json())
.then(response => {
    const city = document.querySelector("#city");
    const latitude = response.latitude;
    const longitude =response.longitude;
});