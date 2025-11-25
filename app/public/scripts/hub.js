let jsonFile = "data/Hub.json";

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    // UN Goal number 1
    if (document.querySelector("#peace")) {
      let peaceElement = document.querySelector("#peace");
      let peaceData = data[0].peace;

      peaceElement.innerHTML = `
                <h2>${peaceData.title}</h2>
                <p>${peaceData.p1}</p>
                <p>${peaceData.p2}</p>
            `;
    }

    // SLIDE 2 -------------------------
    if (document.querySelector("#justice")) {
      let justiceElement = document.querySelector("#justice");
      let justiceData = data[0].justice;

      justiceElement.innerHTML = `
                <h2>${justiceData.title}</h2>
                <p>${justiceData.p1}</p>
                <p>${justiceData.p2}</p>
                <p>${justiceData.p3}</p>
            `;
    }

    // SLIDE 3 -------------------------
    if (document.querySelector("#institutions")) {
      let instElement = document.querySelector("#institutions");
      let institutionsData = data[0].institutions;

      instElement.innerHTML = `
                <h2>${institutionsData.title}</h2>
                <p>${institutionsData.p1}</p>
                <p>${institutionsData.p2}</p>
                <p>${institutionsData.p3}</p>
            `;
    }
  })
  .catch((err) => console.error("Error loading JSON:", err));
