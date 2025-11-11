document.addEventListener("DOMContentLoaded", () => {
    // Deletes class 'no-js' from the body if JS is active 
    document.body.classList.remove("no-js");

    link.addEventListener("click", (e) => {
        // Avoids reloading page
        e.preventDefault();
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
   
});


// ******************* Load Header *******************
if (document.querySelector("header"))
{
    let headerElement = document.querySelector("header");
    let jsonFile = "Header.json";

    document.addEventListener("DOMContentLoaded", () =>
    {
        fetch(jsonFile)
        .then(response => response.json())
        .then(responseData =>
            
        {
            for (headerData of responseData)
            {
                // Create Div element to hold image and title
                let divElement = document.createElement("div");
                let navElement = document.querySelector("nav");
                headerElement.insertBefore(divElement, navElement)

                // Create and add logo
                let imageElement = document.createElement("img");
                imageElement.src = headerData.imageURL;
                imageElement.alt = headerData.alt;
                imageElement.setAttribute("class", "logo")
                divElement.appendChild(imageElement);

                // Create and add title
                let h1Element = document.createElement("h1");
                h1Element.textContent = headerData.title;
                h1Element.setAttribute("class", "title");
                divElement.appendChild(h1Element);
            }
             
            
        }
        )
    }
    )
}