
if (document.querySelector("main"))
{
    let mainElement = document.querySelector("main");
    let jsonFile = "data/Energy.json";

    document.addEventListener("DOMContentLoaded", () =>
    {
        fetch(jsonFile)
        .then(response => response.json())
        .then(responseData =>
            
        {
            for (energyData of responseData)
            {
                // ******************* Load Heading *******************

                let h1Element = document.createElement("h1");
                h1Element.textContent = energyData.heading;
                mainElement.appendChild(h1Element);

                // ******************* Load Section *******************

                let sectionElement = document.createElement("section");
                sectionElement.setAttribute("id","sec1");
                mainElement.appendChild(sectionElement);

                // ******************* Load Image *******************

                let imageElement = document.createElement("img");
                imageElement.src = energyData.imageURL;
                imageElement.alt = energyData.alt;
                sectionElement.appendChild(imageElement);

                // ******************* Load Article *******************

                let articleElement = document.createElement("article");

                var pElement = document.createElement("p");
                let strongElement = document.createElement("strong");
                strongElement.textContent = energyData.description.goal;
                pElement.appendChild(strongElement);
                articleElement.appendChild(pElement);

                var pElement = document.createElement("p");
                pElement.textContent = energyData.description.p1;
                articleElement.appendChild(pElement);

                var pElement = document.createElement("p");
                pElement.textContent = energyData.description.p2;
                articleElement.appendChild(pElement);

                sectionElement.appendChild(articleElement);
            }
             
            
        }
        )
    }
    )
}