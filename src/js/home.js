// Function to add the html code content for home page
function addHomeContent(){
    // Getting elements
    content = document.getElementById('content');

    // Adding html code
    content.innerHTML = 
    `
    <h1>${language.home.title}</h1>
    <p>${language.home.introduction}</p>
    `;
}


addHomeContent();