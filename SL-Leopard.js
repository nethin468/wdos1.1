// Function to fetch data from JSON file
// function fetchData() {
//     fetch('SL-Leopard.json')
//     .then(response => response.json())
//     .then(data => renderContent(data))
//     .catch(error => console.error('Error fetching data:', error));
// }

// // Function to render content into HTML
// function renderContent(data) {
//     // Render Yala National Park content
//     document.querySelector('.card:nth-of-type(1) h3').textContent = data[0].heading1;
//     document.querySelector('.card:nth-of-type(1) p').textContent = data[0].paragraphs1;
//     document.querySelector('.card:nth-of-type(1) img').src = data[0].images1;

//     // Render Wilpattu National Park content
//     document.querySelector('.card:nth-of-type(2) h3').textContent = data[1].heading2;
//     document.querySelector('.card:nth-of-type(2) p').textContent = data[1].paragraphs2;
//     document.querySelector('.card:nth-of-type(2) img').src = data[1].images2;

//     // Render Sinharaja Forest Reserve content
//     document.querySelector('.card:nth-of-type(3) h3').textContent = data[2].heading3;
//     document.querySelector('.card:nth-of-type(3) p').textContent = data[2].paragraphs3;
//     document.querySelector('.card:nth-of-type(3) img').src = data[2].images3;

//     // Render Threats to Leopards content
//     document.querySelector('.section h2').textContent = data[3].heading4;
//     document.querySelector('.content:nth-of-type(1) h3').textContent = data[3]['sub-heading'];
//     document.querySelector('.content:nth-of-type(1) p:nth-of-type(1)').textContent = data[3].paragraph4[0];
//     document.querySelector('.content:nth-of-type(1) p:nth-of-type(2)').textContent = data[3].paragraph4[1];
//     document.querySelector('.leopard-poaching').src = data[3].images4[0];

//     document.querySelector('.content:nth-of-type(2) h3').textContent = data[3]['sub-heading2'];
//     document.querySelector('.content:nth-of-type(2) p:nth-of-type(1)').textContent = data[3].paragraphs5[0];
//     document.querySelector('.content:nth-of-type(2) p:nth-of-type(2)').textContent = data[3].paragraphs5[1];
//     document.querySelector('.page4').src = data[3].images4[1];
// }

// // Call the fetchData function when the page loads
// window.onload = fetchData;
document.addEventListener("DOMContentLoaded", function() {
    // Fetching data from JSON file
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("department",JSON.stringify(data))
        const yalaSection = document.createElement('div');
        yalaSection.classList.add('section');

        const yalaHeading = document.createElement('h2');
        yalaHeading.textContent = data[0].heading1;
        yalaSection.appendChild(yalaHeading);

        const yalaContent = document.createElement('div');
        yalaContent.classList.add('content');

        const yalaImage = document.createElement('img');
        yalaImage.src = data[0].images1;
        yalaImage.alt = "Yala National Park";
        yalaContent.appendChild(yalaImage);

        const yalaText = document.createElement('div');
        const yalaParagraph = document.createElement('p');
        yalaParagraph.textContent = data[0].paragraphs1;
        yalaText.appendChild(yalaParagraph);
        yalaContent.appendChild(yalaText);

        yalaSection.appendChild(yalaContent);

        // Rendering Wilpattu National Park section
        const wilpattuSection = document.createElement('div');
        wilpattuSection.classList.add('section');

        const wilpattuHeading = document.createElement('h2');
        wilpattuHeading.textContent = data[1].heading2;
        wilpattuSection.appendChild(wilpattuHeading);

        const wilpattuContent = document.createElement('div');
        wilpattuContent.classList.add('content');

        const wilpattuImage = document.createElement('img');
        wilpattuImage.src = data[1].images2;
        wilpattuImage.alt = "Wilpattu National Park";
        wilpattuContent.appendChild(wilpattuImage);

        const wilpattuText = document.createElement('div');
        const wilpattuParagraph = document.createElement('p');
        wilpattuParagraph.textContent = data[1].paragraphs2;
        wilpattuText.appendChild(wilpattuParagraph);
        wilpattuContent.appendChild(wilpattuText);

        wilpattuSection.appendChild(wilpattuContent);

        // Rendering Sinharaja Forest Reserve section
        const sinharajaSection = document.createElement('div');
        sinharajaSection.classList.add('section');

        const sinharajaHeading = document.createElement('h2');
        sinharajaHeading.textContent = data[2].heading3;
        sinharajaSection.appendChild(sinharajaHeading);

        const sinharajaContent = document.createElement('div');
        sinharajaContent.classList.add('content');

        const sinharajaImage = document.createElement('img');
        sinharajaImage.src = data[2].images3;
        sinharajaImage.alt = "Sinharaja Forest Reserve";
        sinharajaContent.appendChild(sinharajaImage);

        const sinharajaText = document.createElement('div');
        const sinharajaParagraph = document.createElement('p');
        sinharajaParagraph.textContent = data[2].paragraphs3;
        sinharajaText.appendChild(sinharajaParagraph);
        sinharajaContent.appendChild(sinharajaText);

        sinharajaSection.appendChild(sinharajaContent);

        // Rendering Threats to Leopards section
        const threatsSection = document.createElement('div');
        threatsSection.classList.add('section');

        const threatsHeading = document.createElement('h2');
        threatsHeading.textContent = data[3].heading4;
        threatsSection.appendChild(threatsHeading);

        const threatsContent = document.createElement('div');
        threatsContent.classList.add('content');

        // Rendering Poaching sub-section
        const poachingDiv = document.createElement('div');
        poachingDiv.classList.add('content');

        const poachingImage = document.createElement('img');
        poachingImage.src = data[3].images4[0];
        poachingImage.alt = "Poaching";
        poachingDiv.appendChild(poachingImage);

        const poachingText = document.createElement('div');
        const poachingParagraphs = data[3].paragraph4;
        poachingParagraphs.forEach(paragraph => {
            const poachingParagraph = document.createElement('p');
            poachingParagraph.textContent = paragraph;
            poachingText.appendChild(poachingParagraph);
        });
        poachingDiv.appendChild(poachingText);

        threatsContent.appendChild(poachingDiv);

        // Rendering Habitat Loss sub-section
        const habitatLossDiv = document.createElement('div');
        habitatLossDiv.classList.add('content');

        const habitatLossImage = document.createElement('img');
        habitatLossImage.src = data[3].images4[1];
        habitatLossImage.alt = "Habitat Loss";
        habitatLossDiv.appendChild(habitatLossImage);

        const habitatLossText = document.createElement('div');
        const habitatLossParagraphs = data[3].paragraphs5;
        habitatLossParagraphs.forEach(paragraph => {
            const habitatLossParagraph = document.createElement('p');
            habitatLossParagraph.textContent = paragraph;
            habitatLossText.appendChild(habitatLossParagraph);
        });
        habitatLossDiv.appendChild(habitatLossText);

        threatsContent.appendChild(habitatLossDiv);

        threatsSection.appendChild(threatsContent);

        // Appending sections to the body
        document.body.appendChild(yalaSection);
        document.body.appendChild(wilpattuSection);
        document.body.appendChild(sinharajaSection);
        document.body.appendChild(threatsSection);
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
