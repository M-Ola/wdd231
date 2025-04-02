




const getString = window.location.search;
const myInfo = new URLSearchParams(getString);

 //const timestamp = urlParams.get("timestamp") || new Date().toLocaleString();
//document.getElementById("timestamp").textContent = timestamp;

function getQueryParam(name) {
    const myInf = new URLSearchParams(getString);
    return myInf.get(name);

}
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');


const user = myInfo.get('timestamp');
const timestamp = myInfo.get('timestamp')


const formDate = timestamp ? new Date(timestamp).toLocaleString() : 'unknown time';
 

//document.getElementById("result").innerHTML = `${formDate}`

console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('organization'));
console.log(myInfo.get('email'));

console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));

document.querySelector('#results').innerHTML = 
    `<p><strong>Name</strong>: ${myInfo.get('first')} ${myInfo.get('last')}</p>
     <p><strong>Organization Title</strong>: ${myInfo.get('organization')}</p>
     <p><strong>Email Address</strong>: ${myInfo.get('email')}</p>
     <p> <strong>phone</strong>:${myInfo.get('phone')}</p>
     <p> <strong>Orgasanization Name</strong>:${myInfo.get('organizationName')}</p>
     <p><strong>Membership Level</strong>:${myInfo.get('membershipLevel')}</p>
     <p><strong>Organization Description</strong>:${myInfo.get('organizationDescription')}</p>
     <p><strong>Submitted on:</strong>${myInfo.get('timestamp')} ${formDate} </p>
      
` 





/* n the ${myInfo.get('loce <p>Your Phone: $(myInfo-get('phone')}</p>
<p>Your email is $(myInfo get('email')}</p>` */