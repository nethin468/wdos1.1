fetch("animals.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("department",JSON.stringify(data))
    const introductionDivision = document.querySelector(".container");
    const introductionData = data[0];
    console.log(introductionData.paragraphs[0]);

    const intro = `
    <h1>${introductionData.heading}</h1>
    <p>${introductionData.paragraphs[0]}</p>
    <p>${introductionData.paragraphs[1]}</p>
    <p>${introductionData.paragraphs[2]}</p>
    <p>${introductionData.paragraphs[3]}</p>
    `;

    introductionDivision.innerHTML = intro;
  })
  .catch((error) => console.error("Error fetching data:", error));
