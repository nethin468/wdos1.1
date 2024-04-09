// fetch("animals.json")
//   .then((response) => response.json())
//   .then((data) => {
//     localStorage.setItem("department",JSON.stringify(data))
//     const introductionDivision = document.querySelector(".container");
//     const introductionData = data[0];
//     console.log(introductionData.paragraphs[0]);

//     const intro = `
//     <h1>${introductionData.heading}</h1>
//     <p>${introductionData.paragraphs[0]}</p>
//     <p>${introductionData.paragraphs[1]}</p>
//     <p>${introductionData.paragraphs[2]}</p>
//     <p>${introductionData.paragraphs[3]}</p>
//     `;

//     introductionDivision.innerHTML = intro;
//   })
//   .catch((error) => console.error("Error fetching data:", error));

fetch("animals.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("animals", JSON.stringify(data));
    const introductionDivision = document.querySelector(".container");
    const introductionData = data[0];

    const intro = `
    <h1>${introductionData.heading}</h1>
    <p>${introductionData.paragraphs[0]}</p>
    <p>${introductionData.paragraphs[1]}</p>
    <p>${introductionData.paragraphs[2]}</p>
    <p>${introductionData.paragraphs[3]}</p>
    `;

    introductionDivision.innerHTML = intro;

    const endemicHeading = document.querySelector(".endemic-heading");
    const endemicData = data[1];

    const endemic = `
    <h2>${endemicData.heading2}</h2>
    <div class="endemic">
        <p>${endemicData.paragraphs[0]}</p>
        <img class="endemic-animals" src="${endemicData.images[0]}" alt="Sri Lankan junglefowl">
    </div>
    <div class="endemic">
        <p>${endemicData.paragraphs[1]}</p>
        <img class="endemic-animals" src="${endemicData.images[1]}" alt="Sri Lankan sloth bear">
    </div>
    `;

    endemicHeading.innerHTML = endemic;

    const parksLinks = document.querySelector(".footer");
    const parksData = data[2];

    const parks = `
    <h3>${parksData.heading3}</h3>
    <p><a href="${parksData.references[0]}">Yala National Park</a></p>
    <p><a href="${parksData.references[1]}">Wilpattu National Park</a></p>
    `;

    parksLinks.innerHTML += parks;
  })
  .catch((error) => console.error("Error fetching data:", error));
