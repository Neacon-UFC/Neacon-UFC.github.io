// Global Variables
var language ={
    "header":{
        "home": "Home",

        "research": "Research",
        "robotics": "Robotics",
        "control_theory": "Control Theory",
        "motor_driven_system_control": "Motor Driven System Control",
        "data_based_control": "Data Based Control",

        "publications": "Publications",
        "projects": "Projects",
        "project_1": "Project 1",
        "project_2": "Project 2",
        "project_3": "Project 3",

        "team": "Team",
        "contact": "Contact",

        "search": "Search",
        "search_placeholder": "Search..."
    },

    "footer": {
        "author": "Designed by Naicon @ Federal University of Ceará",
        "rights": "All Rights Reserved"
    }   
};

// Function to get the language
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({ 
        url:  '../site/src/language/' +  localStorage.getItem('language') + '.json', 
        dataType: 'json', async: false, dataType: 'json', 
        success: function (lang) { 
            language = lang 
        } 
    });
}

// Function to set the language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
}

// Function to add the html code of header and footer
function addHeaderFooter(){

    // Getting elements
    header = document.getElementById('header');
    footer = document.getElementById('footer');

    // Adding html code
    header.innerHTML = 
    `   <nav>
            <div class="logo">
                <img src="./src/img/logo_ufc.png" alt="Logo UFC">
                <img src="./src/img/logo_dee.png" alt="Logo DEE">
                <img src="./src/img/logo_naicon.png" alt="Logo NAICON">
            </div>
            <ul>
                <li><a href="./index.html">${language.header.home}</a></li>
                <li class="dropdown">
                    <button class="dropbtn">${language.header.research}</button>
                    <div class="dropdown-content">
                    <a href="#">${language.header.robotics}</a>
                    <a href="#">${language.header.control_theory}</a>
                    <a href="#">${language.header.motor_driven_system_control}</a>
                    <a href="#">${language.header.data_based_control}</a>
                    </div>
                </li>
                <li><a href="./publications.html">${language.header.publications}</a></li>
                <li class="dropdown">
                    <button class="dropbtn">${language.header.projects}</button>
                    <div class="dropdown-content">
                    <a href="#">${language.header.project_1}</a>
                    <a href="#">${language.header.project_2}</a>
                    <a href="#">${language.header.project_3}</a>
                    </div>
                </li>
                <li><a href="./team.html">${language.header.team}</a></li>
                <li><a href="./contact.html">${language.header.contact}</a></li>
                <li class="search">
                    <input type="text" placeholder="${language.header.search_placeholder}">
                    <button type="submit">${language.header.search}</button>
                </li>
                <li class="language">
                    <a href="#" onclick="setLanguage('en')"><img src="./src/img/brazil-flag.png" alt="Brazil"></a>
                    <a href="#" onclick="setLanguage('pt')"><img src="./src/img/usa-flag.png" alt="USA"></a>
                </li>
            </ul>
        </nav>
    `;

    footer.innerHTML = 
    `   <p>${language.footer.author}</p>
        <p>${language.footer.rights}</p>
    `;
}

// Getting language
getLanguage();
// Calling function
addHeaderFooter();