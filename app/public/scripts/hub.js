let jsonFile = "data/Hub.json";

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    //
    if (document.querySelector(".hub-main")) {
      let hubMain = document.querySelector(".hub-main");
      let goal2Data = data[0].goal2;
      let goal7Data = data[0].goal7;
      let goal16Data = data[0].goal16;

      hubMain.innerHTML = `
              <article class="goal2">
                <h1>${goal2Data.h1}</h1>
                <p>${goal2Data.p1}</p>
                <img src="${goal2Data.img_url}">
              </article>

              <article class="active-goal goal7">
                <h1>${goal7Data.h1}</h1>
                <p>${goal7Data.p1}</p>
                <img src="${goal7Data.img_url}">
              </article>

              <article class="goal16">
                <h1>${goal16Data.h1}</h1>
                <p>${goal16Data.p1}</p>
                <img src="${goal16Data.img_url}">
              </article>
            `;
    }
  })
  .then(() => {
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
  })
  .catch((err) => console.error("Error loading JSON:", err));
