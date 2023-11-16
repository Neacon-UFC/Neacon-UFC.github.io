// Function to add the html code content for contact page
function addContactContent(){
    // Getting elements
    content = document.getElementById('content');

    // Adding html code
    content.innerHTML = 
    `
    <h1> ${language.contact.title} </h1>

    <h2>${language.contact.office_phone.title}</h2>
    <p>${language.contact.office_phone.phone}</p>
    <br>

    <h2>${language.contact.email.title}</h2>
    <p><a href="mailto:${language.contact.email.email}">${language.contact.email.email}</a></p>
    <br>

    <h2>${language.contact.mailing_address.title}</h2>
    <p>${language.contact.mailing_address.responsable}</p>
    <p>${language.contact.mailing_address.place}</p>
    <p>${language.contact.mailing_address.city}, ${language.contact.mailing_address.cep}</p>
    <br>

    <h2>${language.contact.office_location.title}</h2>
    <p>${language.contact.office_location.laboratory}<a href="${language.contact.office_location.map}">[Google Maps]</a></p>
    <p>${language.contact.office_location.place}</p>
    <p>${language.contact.office_location.city}, ${language.contact.office_location.cep}</p>
    <br> 

    <div id="map"></div>
    <br>

    <small>${language.contact.last_update}</small>
  `;
}

addContactContent();

// Initialize the map -> setView([latitude, longitude], zoom)
var map = L.map('map').setView([-3.74544911119979, -38.57916624923715], 20);
      
// Add a tile layer (you can use other tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);