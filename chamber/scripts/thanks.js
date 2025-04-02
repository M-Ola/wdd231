


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');


const getString = window.location.search;
const myInfo = new URLSearchParams(getString);


const timestamp = myInfo.get("timestamp");
const formDate = timestamp ? new Date(timestamp).toLocaleString() : "Unknown time";

 





document.querySelector('#results').innerHTML = 
    `<p><strong>Name</strong>: ${myInfo.get('first')} ${myInfo.get('last')}</p>
     <p><strong>Organization Title</strong>: ${myInfo.get('organization')}</p>
     <p><strong>Email Address</strong>: ${myInfo.get('email')}</p>
     <p> <strong>phone</strong>:${myInfo.get('phone')}</p>
     <p> <strong>Orgasanization Name</strong>:${myInfo.get('organizationName')}</p>
     <p><strong>Membership Level</strong>:${myInfo.get('membershipLevel')}</p>
     <p><strong>Organization Description</strong>:${myInfo.get('organizationDescription')}</p>
    <p><strong>Submitted on:</strong> ${formDate}</p>;
` 





