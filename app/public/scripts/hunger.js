let jsonFile = "data/Hunger.json";

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    // Heading
    if (document.querySelector(".hunger-main")) {
      let hungerMain = document.querySelector(".hunger-main");
      let goalTitleData = data[0].goalTitle;
      let imageCarouselData = data[0].imageCarousel;
      let text1Data = data[0].text1;
      let text2Data = data[0].text2;
      let text3Data = data[0].text3;
      let downloadButtonData = data[0].downloadButton;

      goalTitleElement.innerHTML = `
      <section class="goal_title">
        <h1>${goalTitleData.h1}</h1>
      </section>

      <article class="img_carousel">
        <section class="mySlides">
          <img src="${imageCarouselData.img1}" style="width:100%">
        </section>

        <section class="mySlides">
          <img src="${imageCarouselData.img2}" style="width:100%">
        </section>

        <section class="mySlides">
          <img src="${imageCarouselData.img3}" style="width:100%">
        </section>

        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>
      </article>

      <article class="goal_texts">
        <article class="text1">
          <h1>${text1Data.h1}</h1>
          <p>${text1Data.p1}</p>
          <p>${text1Data.p2}</p>
        </article>

        <article class="center-text text2">
          <h1>${text2Data.h1}</h1>
          <p>${text2Data.p1}</p>
          <p>${text2Data.p2}</p>
          <p>${text2Data.p3}</p>
        </article>

        <article class="text3">
          <h1>${text3Data.h1}</h1>
          <p>${text3Data.p1}</p>
          <p>${text3Data.p2}</p>
        </article>
      </article>

      <article class="download_button">
        <form action="${downloadButtonData.url}" method="GET"">
          <input type="submit" value="Download" />
        </form>
      </article>
                
            `;
    }

    // Image carousel
    if (document.querySelector(".img_carousel")) {
      let imageCarouselElement = document.querySelector(".img_carousel");

      imageCarouselElement.innerHTML = `
      
    `;

      slideIndex = 1;
      showSlides(slideIndex);
    }

    // Overview text
    if (document.querySelector(".text1")) {
      let text1Element = document.querySelector(".text1");

      text1Element.innerHTML = `
                
            `;
    }

    // Guidelines text
    if (document.querySelector(".text2")) {
      let text2Element = document.querySelector(".text2");

      text2Element.innerHTML = `
                
            `;
    }

    // Key facts text
    if (document.querySelector(".text2")) {
      let text3Element = document.querySelector(".text3");

      text3Element.innerHTML = `
                
            `;
    }

    // Download button
    if (document.querySelector(".download_button")) {
      let downloadButton = document.querySelector(".download_button");

      downloadButton.innerHTML = `
                
            `;
    }
  })
  .catch((err) => console.error("Error loading JSON:", err));

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
