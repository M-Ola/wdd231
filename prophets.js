const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets);


}

getProphetData()


const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
       
        let portrait = document.createElement('img');
        

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `${prophet.birthdate}`;
        birthplace.textContent = `${prophet.birthplace}`;


        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '100');
        portrait.setAttribute('height', '100');

        card.appendChild(fullName); 
        card.appendChild(birthdate)
        card.appendChild(birthplace)
        card.appendChild(portrait);
        
        cards.appendChild(card);



    });
    



}