const API_KEY = `f6e2b4295c9257cc3ee77082f853b0a8`
const searchTemperature = () => {
    const city = document.getElementById('city-name');
    const cityInput = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
    city.value = '';

}

const idInput = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemparature = tempareture => {

    idInput('city', tempareture.name);
    idInput('temperature', tempareture.main.temp);
    idInput('condition', tempareture.weather[0].main);
    const url = (`http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`);
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}