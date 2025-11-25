let jsonFile = "data/Hunger.json";

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    // Heading
    if (document.querySelector(".goal_title")) {
      let goalTitleElement = document.querySelector(".goal_title");
      let goalTitleData = data[0].goalTitle;

      goalTitleElement.innerHTML = `
                <h1>${goalTitleData.h1}</h1>
            `;
    }

    // Image carousel
    if (document.querySelector(".img_carousel")) {
      let imageCarouselElement = document.querySelector(".img_carousel");
      let imageCarouselData = data[0].imageCarousel;

      imageCarouselElement.innerHTML = `
                <img src="${imageCarouselData.img1}" />
                <img src="${imageCarouselData.img2}" />
                <img src="${imageCarouselData.img3}" />
            `;
    }

    // Overview text
    if (document.querySelector(".text1")) {
      let text1Element = document.querySelector(".text1");
      let text1Data = data[0].text1;

      text1Element.innerHTML = `
                <h1>${text1Data.h1}</h1>
                <p>${text1Data.p1}</p>
                <p>${text1Data.p2}</p>
            `;
    }

    // Guidelines text
    if (document.querySelector(".text2")) {
      let text2Element = document.querySelector(".text2");
      let text2Data = data[0].text2;

      text2Element.innerHTML = `
                <h1>${text2Data.h1}</h1>
                <p>${text2Data.p1}</p>
                <p>${text2Data.p2}</p>
                <p>${text2Data.p3}</p>
            `;
    }

    // Key facts text
    if (document.querySelector(".text2")) {
      let text3Element = document.querySelector(".text3");
      let text3Data = data[0].text3;

      text3Element.innerHTML = `
                <h1>${text3Data.h1}</h1>
                <p>${text3Data.p1}</p>
                <p>${text3Data.p2}</p>
            `;
    }
  })
  .catch((err) => console.error("Error loading JSON:", err));
