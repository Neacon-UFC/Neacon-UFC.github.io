// Function to add the html code content for team page
function addTeamContent(){
    // Getting elements
    content = document.getElementById('content');

    content.innerHTML = `
    `;
    for(i in language.team){
        // Adding html code
        content.innerHTML += 
        `   <div class="person-box">
                <div class="person-img">
                    <img src="./src/img/team/${language.team[i].img_name}.png" alt="Person 1">
                </div>
                <div class="person-info">
                    <h2>${language.team[i].name}</h2>
                    <h3>${language.team[i].domain}</h3>
                    <p>${language.team[i].level}</p>
                    <p>${language.team[i].course}</p>
                    <p>${language.team[i].email} | 
                        <a href="${language.team[i].linkedin}" target="_blank"><img src="./src/img/logo_linkedin.png" alt="LinkedIn Profile"></a>
                        <a href="${language.team[i].github}" target="_blank"><img src="./src/img/logo_github.png" alt="GitHub Profile"></a>
                    </p>
                </div>
            </div>
        `;
    }
}

addTeamContent();