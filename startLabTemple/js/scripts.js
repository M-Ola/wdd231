import { temples } from "../data/temples.js";
//console.log(url);

import { url } from "../data/temples.js";
//console.log(url);


const showhere = document.querySelector("#showHere")
//GET A REFERENCE TO THE HTML DIALOG ELEMENT
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myinfo = document.querySelector('#mydialog p')
const myclose = document.querySelector('#mydialog button')

myclose.addEventListener("click", () => mydialog.close())

function displayItems(data) {
    console.log(data)

    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
            photo.alt=x.name

        photo.addEventListener('click', () => showStuff(x));

        showhere.appendChild(photo)
})
    


}

displayItems(temples)



//populate the dialog with info
function showStuff(x) {
    mytitle.innerHTML = x;
    mydialog.showModal();
}