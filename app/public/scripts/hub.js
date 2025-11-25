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
                <img src="${goal2Data.img_url}"></p>
            `;
    }

    // UN Goal 7
    if (document.querySelector(".goal7")) {
      let goal7Element = document.querySelector(".goal7");
      let goal7Data = data[0].goal7;

      goal7Element.innerHTML = `
                <h1>${goal7Data.h1}</h1>
                <p>${goal7Data.p1}</p>
                <img src="${goal7Data.img_url}"></p>
            `;
    }

    // UN Goal 16
    if (document.querySelector(".goal16")) {
      let goal16Element = document.querySelector(".goal16");
      let goal16Data = data[0].goal16;

      goal16Element.innerHTML = `
                <h1>${goal16Data.h1}</h1>
                <p>${goal16Data.p1}</p>
                <img src="${goal16Data.img_url}"></p>
            `;
    }
  })
  .catch((err) => console.error("Error loading JSON:", err));
