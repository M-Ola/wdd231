
document.getElementById('currentyear').innerHTML = new Date().getFullYear()

document.getElementById('lastmodified').innerHTML += new Date(document.lastModified).toLocaleString()



const cards = document.querySelector('.grid');

async function getChambersData() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        displayChambers(data.chambers);
    } catch (error) {
        console.error('Error fetching chambers data:', error);
    }
}


const displayChambers = (chambers) => {
    if (!cards) {
        console.error("Element with ID 'cards' not found.");
        return;
    }

    chambers.forEach(chamber => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let website = document.createElement('p');
        let phone = document.createElement('p');
        let membership = document.createElement('p')

        let logo = document.createElement('img');

        name.textContent = chamber.name;
        phone.textContent = chamber.phone
        address.textContent = chamber.address;
        website.innerHTML = `<a href="${chamber.website}" target="_blank">${chamber.website}</a>`
        membership.textContent = chamber.membership

        logo.setAttribute('src', chamber.logo);
        logo.setAttribute('alt', `Logo of ${chamber.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone)
        card.appendChild(website);
        card.appendChild(membership)

        cards.appendChild(card);
    });
};

getChambersData();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");


gridbutton.addEventListener("click", () => {
   
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
