
if (document.querySelector("#energyMain"))
{
    let mainElement = document.querySelector("#energyMain");
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

                // ******************* Load Section 1 *******************

                var sectionElement = document.createElement("section");
                sectionElement.setAttribute("id","sec1");
                mainElement.appendChild(sectionElement);

                // ******************* Load Image *******************

                var imageElement = document.createElement("img");
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

                // ******************* Load Section 2 *******************

                var sectionElement = document.createElement("section");
                sectionElement.setAttribute("id","sec2");
                mainElement.appendChild(sectionElement);

                // ******************* Load Subheading *******************

                let h2Element = document.createElement("h2");
                h2Element.textContent = energyData.subheading;
                sectionElement.appendChild(h2Element);
                
                // ******************* Load Subheading div *******************

                let divElement = document.createElement("div");

                let h3Element = document.createElement("h3");
                h3Element.textContent = energyData.event.heading;
                divElement.appendChild(h3Element);

                var pElement = document.createElement("p");
                pElement.textContent = energyData.event.date;
                divElement.appendChild(pElement)

                sectionElement.appendChild(divElement)

                // ******************* Load image *******************
                
                var imageElement = document.createElement("img")
                imageElement.src = energyData.event.imageURL;
                imageElement.alt = energyData.event.alt;
                sectionElement.appendChild(imageElement);

                // ******************* Load Paragraph *******************

                var pElement = document.createElement("p")
                pElement.textContent = energyData.event.description;
                sectionElement.appendChild(pElement);
            }
        }
        )
    }
    )
}