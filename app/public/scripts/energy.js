
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

                var articleElement = document.createElement("article");

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

                var h2Element = document.createElement("h2");
                h2Element.textContent = energyData.subheading1;
                sectionElement.appendChild(h2Element);
                
                // ******************* Load Subheading div *******************

                var divElement = document.createElement("div");

                var h3Element = document.createElement("h3");
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




                // ******************* Load Section 3 *******************

                var sectionElement = document.createElement("section");
                sectionElement.setAttribute("id","sec3");
                mainElement.appendChild(sectionElement);

                // ******************* Load Article *******************

                var articleElement = document.createElement("article");

                // ******************* Load Subheading *******************

                var h2Element = document.createElement("h2");
                h2Element.textContent = energyData.subheading2;
                articleElement.appendChild(h2Element);
                
                // ******************* Load Subheading div *******************

                var divElement = document.createElement("div");

                var h3Element = document.createElement("h3");
                h3Element.textContent = energyData.publication.name;
                divElement.appendChild(h3Element);

                var pElement = document.createElement("p");
                pElement.textContent = energyData.publication.date;
                divElement.appendChild(pElement);

                articleElement.appendChild(divElement);

                // ******************* Load Paragraph *******************

                var pElement = document.createElement("p")
                pElement.textContent = energyData.publication.description;
                articleElement.appendChild(pElement);

                sectionElement.appendChild(articleElement);

                // ******************* Load image *******************
                
                var imageElement = document.createElement("img")
                imageElement.src = energyData.publication.imageURL;
                imageElement.alt = energyData.publication.alt;
                sectionElement.appendChild(imageElement);
            }
        }
        )
    }
    )
}