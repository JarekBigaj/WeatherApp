const apiUrlKrakow = 'https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&current_weather=true';
const apiUrlWarsaw ='https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&current_weather=true';
const apiUrlMarcowka ='https://api.open-meteo.com/v1/forecast?latitude=49.79&longitude=19.62&current_weather=true';

const krakowButton = document.querySelector('[data-id="krakow"]');
const marcowkaButton = document.querySelector('[data-id="marcowka"]');
const warsawButton = document.querySelector('[data-id="warsaw"]');

krakowButton.addEventListener('click', () =>{
    fetch(apiUrlKrakow).then(response => response.json())
    .then(response => {
        const {current_weather} = response;
    });
});

warsawButton.addEventListener('click', () =>{
    fetch(apiUrlWarsaw).then(response => response.json())
    .then(response => {
        const {current_weather} = response;
    });
});

marcowkaButton.addEventListener('click', () =>{
    fetch(apiUrlMarcowka).then(response => response.json())
    .then(response => {
        const {current_weather} = response;
    });
});