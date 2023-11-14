// Function to add the html code content for publications page
function addHomeContent(){
    // Getting elements
    content = document.getElementById('content');

    // Adding html code
    content.innerHTML = 
    `
    <h1> ${language.publications.title} </h1>
    <h3> ${language.publications.subtitle} </h3>
    `;

    // Getting year
    year = parseInt(new Date().getFullYear());
    // Size of publications
    size = language.publications.publications.length;
    // 
    label = false;
    counter = 0;
    index_publication = 1;

    while(counter < size){
        for(i in language.publications.publications){

            if (language.publications.publications[i].year == year){

                if (label == false){
                    content.innerHTML += `
                        <h2> ${year} </h2>
                    `;
                    label=true;
                };

                // Adding html code
                content.innerHTML += `  
                    <p>${index_publication}. ${language.publications.publications[i].authors} <a href="${language.publications.publications[i].link}" >${language.publications.publications[i].title}</a> ${language.publications.publications[i].location}</p>
                `;
                index_publication ++;
                counter++
            }
        }
        // Reset index
        index_publication = 1;
        // Decreasing year
        year--;
        // Reset label
        label=false;
    }

    
}


addHomeContent();