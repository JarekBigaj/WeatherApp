const apiUrlKrakow = 'https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&current_weather=true';
const apiUrlWarsaw ='https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&current_weather=true';
const apiUrlMarcowka ='https://api.open-meteo.com/v1/forecast?latitude=49.79&longitude=19.62&current_weather=true';


fetch(apiUrlKrakow).then(response => response.json())
.then(response => {
    console.log(response);
});