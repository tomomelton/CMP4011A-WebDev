if (document.querySelector('#teamMain'))
{
    let mainElement = document.querySelector('#teamMain');
    let jsonFile = "data/Team.json";

    document.addEventListener("DOMContentLoaded", () =>
    {
        fetch(jsonFile)
        .then(response => response.json())
        .then(responseData =>

            {
                for (teamData of responseData)
                {
                    //------------LOADING HEADING------------

                    //------------H1 ELEMENT------------------
                    var h1Element = document.createElement("h1");
                    h1Element.setAttribute("id", "heading");
                    h1Element.textContent = teamData.h1;
                    mainElement.appendChild(h1Element);

                    //------------DIV LEVEL CONTAINER----------
                    var divElement = document.createElement("div");
                    divElement.setAttribute("id", "level");
                    mainElement.appendChild(divElement);

                    //-----------------MONI CARD---------------------
                    var sectionElement = document.createElement("section");
                    sectionElement.setAttribute("id", "card");
                    divElement.appendChild(sectionElement);

                    var h2Element = document.createElement("h2");
                    h2Element.textContent = teamData.name;
                    sectionElement.appendChild(h2Element);

                    var imgElement = document.createElement("IMG");
                    imgElement.src = teamData.src;
                    imgElement.alt = teamData.alt;
                    imgElement.setAttribute("id", "profile");
                    sectionElement.appendChild(imgElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.role;
                    sectionElement.appendChild(pElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.pages;
                    sectionElement.appendChild(pElement);

                    //-----------------TOM CARD---------------------
                    var sectionElement = document.createElement("section");
                    sectionElement.setAttribute("id", "card");
                    divElement.appendChild(sectionElement);

                    var h2Element = document.createElement("h2");
                    h2Element.textContent = teamData.name2;
                    sectionElement.appendChild(h2Element);

                    var imgElement = document.createElement("IMG");
                    imgElement.src = teamData.src2;
                    imgElement.alt = teamData.alt2;
                    imgElement.setAttribute("id", "profile");
                    sectionElement.appendChild(imgElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.role2;
                    sectionElement.appendChild(pElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.pages2;
                    sectionElement.appendChild(pElement);

                    //-----------------HENRY CARD---------------------
                    var sectionElement = document.createElement("section");
                    sectionElement.setAttribute("id", "card");
                    divElement.appendChild(sectionElement);

                    var h2Element = document.createElement("h2");
                    h2Element.textContent = teamData.name3;
                    sectionElement.appendChild(h2Element);

                    var imgElement = document.createElement("IMG");
                    imgElement.src = teamData.src3;
                    imgElement.alt = teamData.alt3;
                    imgElement.setAttribute("id", "profile");
                    sectionElement.appendChild(imgElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.role3;
                    sectionElement.appendChild(pElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.pages3;
                    sectionElement.appendChild(pElement);

                    //------------DIV LEVEL CONTAINER----------
                    var divElement = document.createElement("div");
                    divElement.setAttribute("id", "level");
                    divElement.setAttribute("class", "level2")
                    mainElement.appendChild(divElement);

                    //-----------------CHRIS CARD---------------------
                    var sectionElement = document.createElement("section");
                    sectionElement.setAttribute("id", "card");
                    divElement.appendChild(sectionElement);

                    var h2Element = document.createElement("h2");
                    h2Element.textContent = teamData.name4;
                    sectionElement.appendChild(h2Element);

                    var imgElement = document.createElement("IMG");
                    imgElement.src = teamData.src4;
                    imgElement.alt = teamData.alt4;
                    imgElement.setAttribute("id", "profile");
                    sectionElement.appendChild(imgElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.role4;
                    sectionElement.appendChild(pElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.pages4;
                    sectionElement.appendChild(pElement);

                    //-----------------JOSH CARD---------------------
                    var sectionElement = document.createElement("section");
                    sectionElement.setAttribute("id", "card");
                    divElement.appendChild(sectionElement);

                    var h2Element = document.createElement("h2");
                    h2Element.textContent = teamData.name5;
                    sectionElement.appendChild(h2Element);

                    var imgElement = document.createElement("IMG");
                    imgElement.src = teamData.src5;
                    imgElement.alt = teamData.alt5;
                    imgElement.setAttribute("id", "profile");
                    sectionElement.appendChild(imgElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.role5;
                    sectionElement.appendChild(pElement);

                    var pElement = document.createElement("p");
                    pElement.textContent = teamData.pages5;
                    sectionElement.appendChild(pElement);
                    

                    






                    
                }
            }
        )
    }
    )
}