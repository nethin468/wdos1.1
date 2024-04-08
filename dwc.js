fetch("dwc.json")
.then(response => response.json())
.then(data => {
    localStorage.setItem("department",JSON.stringify(data))
    // Extract relevant information from the JSON data
    const heading = data[0].heading;
    const heading2 = data[1].heading2;
    const heading3 = data[2].heading3;
    const heading4 = data[3].heading4;

    const paragraphs1 = data[0].paragraphs;
    const paragraphs2 = data[1].paragraphs;
    const paragraphs3 = data[2].paragraphs;
    const paragraphs4 = data[3].paragraphs;

    const images = data[2].images;

    const frame = data[3].frame;

    // Populate the HTML elements with the fetched data
    const container = document.querySelector(".container");

    // Add content for Department of Wildlife Conservation
    container.innerHTML += `
        <div class="header">
            <h1>${heading}</h1>
            <p>${paragraphs1}</p>
        </div>
    `;

    // Add content for About Us
    container.innerHTML += `
        <hr>
        <div class="intro">
            <h2>${heading2}</h2>
            <p>${paragraphs2}</p>
        </div>
    `;

    // Add content for Our Protected Areas
    container.innerHTML += `
        <hr>
        <div class="gallery">
            <h2>${heading3}</h2>
            <p>${paragraphs3}</p>
            <div class="DWC-gallery">
                ${images.map(image => `<div class="gallery-item"><img src="${image}"></div>`).join('')}
            </div>
        </div>
    `;

    // Add content for Their Location
    container.innerHTML += `
        <hr>
        <div class="map">
            <h2>${heading4}</h2>
            <p>${paragraphs4}</p>
            <iframe src="${frame}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    `;
})
.catch(error => console.error("Error fetching data:", error));