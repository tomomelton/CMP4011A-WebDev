//----------Checking for main element of index.html as conditional trigger----------

if (document.querySelector('#indexMain'))
{
    let mainElement = document.querySelector('#indexMain');
    let jsonFile = "data/Index.json";

    document.addEventListener("DOMContentLoaded", () =>
    {
        fetch(jsonFile)
        .then(response => response.json())
        .then(responseData =>

            {
                for (indexData of responseData)
                {
                    //-------------LOADING HEADING---------------
                    let h1Element = document.createElement("h1");
                    h1Element.textContent = indexData.heading;
                    h1Element.setAttribute("id", "title");
                    mainElement.appendChild(h1Element);

                    var divElement = document.createElement("div");
                    mainElement.appendChild(divElement);

                    //------------LOADING FIRST IMAGE-------------
                    var imgElement = document.createElement("IMG");
                    imgElement.src = indexData.URL1;
                    imgElement.alt = indexData.alt;
                    imgElement.setAttribute("id", "homeImage");
                    divElement.appendChild(imgElement);

                    //----------LOADING SECTION CONTAINER----------
                    var divElement = document.createElement("div");
                    divElement.setAttribute("id", "sectionContainer");
                    mainElement.appendChild(divElement);

                    //-------------LOADING TEXTBOX 1---------------
                    let sectionParent = document.createElement("section");
                    sectionParent.setAttribute("id", "textBox");
                    divElement.appendChild(sectionParent);

                    //-------------LOADING SUBHEADING 1------------
                    var subElement = document.createElement("h3");
                    subElement.textContent = indexData.subheading;
                    subElement.setAttribute("id", "subheading");
                    sectionParent.appendChild(subElement);

                    //-------------LOADING FIRST P-----------------
                    var pElement = document.createElement("p");
                    pElement.textContent = indexData.p1;
                    sectionParent.appendChild(pElement);

                    //-----------LOADING SECOND IMAGE--------------
                    var imgElement = document.createElement("IMG");
                    imgElement.src = indexData.URL2;
                    imgElement.setAttribute("id", "indexImage");
                    sectionParent.appendChild(imgElement);

                    //-----------LOADING FIRST CHILD SECTION--------
                    var sectionChild = document.createElement("section");
                    sectionParent.appendChild(sectionChild);

                    //-----------LOADING THIRD IMAGE----------------
                    var imgElement = document.createElement("IMG");
                    imgElement.src = indexData.URL3;
                    imgElement.alt = indexData.alt3;
                    imgElement.setAttribute("id", "indexImage");
                    sectionChild.appendChild(imgElement);

                    //-----------LOADING SECOND CHILD SECTION---------
                    var sectionChild = document.createElement("section");
                    sectionParent.appendChild(sectionChild);

                    //----------LOADING FOURTH IMAGE------------------
                    var imgElement = document.createElement("IMG");
                    imgElement.src = indexData.URL4;
                    imgElement.alt = indexData.alt4;
                    imgElement.setAttribute("id", "indexImage");
                    sectionChild.appendChild(imgElement);

                    //-----------LOADING TEXT BOX 2--------------------
                    var sectionElement = document.createElement("section");
                    sectionElement.setAttribute("id", "textBox");
                    mainElement.appendChild(sectionElement);

                    //------------LOADING 2nd SUBHEADING---------------
                    var subElement = document.createElement("h3");
                    subElement.textContent = indexData.subheading;
                    subElement.setAttribute("id", "subheading");
                    sectionElement.appendChild(subElement);


                    

                }
            }
        )
    }
    )
}