
document.getElementById('currentyear').innerHTML = new Date().getFullYear()
document.getElementById('lastmodified').innerHTML += new Date(document.lastModified).toLocaleString()



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const card4 = document.querySelector('.card4');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.88&lon=-93.29&units=imperial&appid=13f7fc98d357ffcefcf2e636e81e4583'

const url_forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.88&lon=-93.29&exclude=minutely,hourly,alert&units=imperial&appid=13f7fc98d357ffcefcf2e636e81e4583'



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        console.log(data);
        displayResults(data);
    } catch (error) {
        console.error('Error fetching chambers data:', error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `<strong>${data.main.temp}</strong>&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;


}



async function apiFetch_forecast() {
    try {
        const response = await fetch(url_forecast);
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        console.log(data);
        displayWeatherResults(data);
    } catch (error) {
        console.error('Error fetching chambers data:', error);
    }
}

function displayWeatherResults(data) {
    const forecasts = data.list.filter((item, index) => index % 8 == 0).slice(0, 3)
    const today = new Date().toDateString();

    forecasts.forEach(forecast => {
        const forecastDate = new Date(forecast.dt * 1000).toDateString();
        const dayLabel = forecastDate === today ? "Today" : new Date(forecast.dt * 1000).toLocaleDateString(undefined, { weekday: 'long' });
        const temp = forecast.main.temp;
        const description = forecast.weather[0].description;

        const forecastDiv = document.createElement('div');
       // forecastDiv.classList.add('forecast');
       
        forecastDiv.innerHTML = `<h3>${dayLabel}</h3>
        <p>Temperature: ${temp}&deg;F</p>
         <p>Description: ${description}</p>`;

        card4.appendChild(forecastDiv)}



    );

    
}




fetch('data/members.json') // Make sure the JSON is saved as `data.json`
    .then(response => response.json())
    .then(data => {
       // const container = document.querySelector('cards-co');

        // Shuffle the array and select the first three items
        const shuffledChambers = data.chambers.sort(() => Math.random() - 0.5);
        const selectedChambers = shuffledChambers.slice(0, 3);

        const cardClasses = ['card5', 'card6', 'card7'];
       
       
       
        // Create cards for the selected chambers
        selectedChambers.forEach((chamber, index) => {
            const container = document.querySelector(`.${ cardClasses[index]}`);
            
            container.innerHTML = "";

            
           

            
           
           
           
           
           
           
           
            const logo = document.createElement('img');
           
            logo.setAttribute('src', chamber.logo);
            logo.setAttribute('alt', `Logo of ${chamber.name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '100');
            logo.setAttribute('height', '100');

            
            const content = document.createElement('div');
            content.classList.add('card-content');

            const name = document.createElement('h3');
            name.textContent = chamber.name;

            const address = document.createElement('p');
            address.textContent = chamber.address;

            const phone = document.createElement('p');
            phone.textContent = chamber.phone;

            const membership = document.createElement('p');
            membership.textContent = `Membership: ${chamber.membership}`;

            const website = document.createElement('a');
            website.href = chamber.website;
            website.textContent = 'Visit Website';

            content.appendChild(name);
            content.appendChild(address);
            content.appendChild(phone);
            content.appendChild(membership);
            content.appendChild(website);

            container.appendChild(logo);
            container.appendChild(content);

            container.appendChild(content)

            
        });
    })
    .catch(error => console.error('Error fetching data:', error));




apiFetch()

apiFetch_forecast()