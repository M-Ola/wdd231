import {places} from "../data/discover.mjs"

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const sidebar = document.getElementById("sidebar-message");

// Get the current date
const currentDate = new Date();

// Retrieve the last visit date from localStorage
const lastVisit = localStorage.getItem("lastVisitDate");

if (!lastVisit) {
    // First visit: Show welcome message
    sidebar.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the difference in days between visits
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = currentDate - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (timeDifference < 24 * 60 * 60 * 1000) {
        // Less than a day since last visit
        sidebar.textContent = "Back so soon! Awesome!";
    } else {
        // Display the number of days since the last visit
        sidebar.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
    }
}

localStorage.setItem("lastVisitDate", currentDate);



 const   container = document.getElementById('cards-container');

function displayPlaces(place) {
    places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card'
        
        const img = document.createElement('img');
        img.src = place.photo;
        img.alt = `${place.name}`;
        img.loading = 'lazy';
        img.width = '200'
        img.height='200'
       
       
        card.appendChild(img);


        // Add card body
        //const cardBody = document.createElement('div');
        //cardBody.className = 'card-body';

        const name = document.createElement('h2');
        name.textContent = `${place.name}`;
        card.appendChild(name);
        
        const address = document.createElement('address');
        address.textContent = `${place.address}`;
        card.appendChild(address);
        
        const desc  = document.createElement('p');
        desc.textContent = `${place.description}`;
        card.appendChild(desc);

       // card.appendChild(cardBody)
        container.appendChild(card);
    
    }

    )
    }

displayPlaces(places)