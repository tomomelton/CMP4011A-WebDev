let jsonFile = "data/Hub.json";

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    // UN Goal number 1
    if (document.querySelector(".goal2")) {
      let goal2Element = document.querySelector(".goal2");
      let goal2Data = data[0].goal2;

      goal2Element.innerHTML = `
                <h1>${goal2Data.h1}</h1>
                <p>${goal2Data.p1}</p>
                <img src="${goal2Data.img_url}">
            `;
    }

    // UN Goal 7
    if (document.querySelector(".goal7")) {
      let goal7Element = document.querySelector(".goal7");
      let goal7Data = data[0].goal7;

      goal7Element.innerHTML = `
                <h1>${goal7Data.h1}</h1>
                <p>${goal7Data.p1}</p>
                <img src="${goal7Data.img_url}">
            `;
    }

    // UN Goal 16
    if (document.querySelector(".goal16")) {
      let goal16Element = document.querySelector(".goal16");
      let goal16Data = data[0].goal16;

      goal16Element.innerHTML = `
                <h1>${goal16Data.h1}</h1>
                <p>${goal16Data.p1}</p>
                <img src="${goal16Data.img_url}">
            `;
    }
  })
  .catch((err) => console.error("Error loading JSON:", err));

// Event listener for the clicking of hub elements
let goal2 = document.querySelector(".goal2");
goal2.addEventListener("click", () => {
  window.location.replace("/hunger.html");
});

let goal7 = document.querySelector(".goal7");
goal7.addEventListener("click", () => {
  window.location.replace("/energy.html");
});

let goal16 = document.querySelector(".goal16");
goal16.addEventListener("click", () => {
  window.location.replace("/peace.html");
});
