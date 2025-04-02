
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});




// Open a specific modal by ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.showModal(); // Open the dialog modal
}

// Close a specific modal by ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.close(); // Close the dialog modal
}



 /* const getString = window.location.search;
//console.log(getString) 

const myInfo = new URLSearchParams(getString);
  */