
// function fetchData() {
    
//     fetch('willpattu.json')
//     .then(response => response.json())
//     .then(data => renderContent(data))
//     .catch(error => console.error('Error fetching data:', error));
// }

// function renderContent(data) {
//     document.querySelector('.willpattu-heading h1').textContent = 'Willpattu National Park';
//     document.querySelector('.main img').value = data[0].images[0];
//     document.querySelector('.main p').textContent = data[0].paragraphs[0];

//     document.querySelector('section img').value = data[0].images[1];
//     document.querySelector('section p').textContent = data[0].paragraphs[1];

//     const factsList = document.createElement('ul');
//     data[1].lists.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = item;
//         factsList.appendChild(listItem);
//     });
//     document.querySelector('section h2').textContent = data[1].heading;
//     document.querySelector('section').appendChild(factsList);
// }

// window.onload = fetchData;

// function renderContent(data) {
//     document.querySelector('.willpattu-heading h1').textContent = 'Willpattu National Park';

//     // Update the first image and paragraph
//     document.querySelector('.main img').src = data[0].images[0]; // Use src instead of value for image elements
//     document.querySelector('.main p').textContent = data[0].paragraphs[0];

//     // Update the second image and paragraph
//     document.querySelector('.section img').src = data[0].images[1];
//     document.querySelector('.section p').textContent = data[0].paragraphs[1];

//     // Update the facts section
//     const factsList = document.createElement('ul');
//     data[1].lists.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = item;
//         factsList.appendChild(listItem);
//     });
//     document.querySelector('.section h2').textContent = data[1].heading; // Use .section instead of 'section'
//     document.querySelector('.section').appendChild(factsList); // Use .section instead of 'section'
// }

function fetchData() {
    fetch('willpattu.json')
    .then(response => response.json())
    .then(data => renderContent(data))
    localStorage.setItem("department",JSON.stringify(data))
    .catch(error => console.error('Error fetching data:', error));
}

function renderContent(data) {
    const mainImg = document.querySelector('.main img');
    const sectionImg = document.querySelector('.section img');
    
    if (!mainImg || !sectionImg) {
        console.error('Error: Could not find image elements');
        return;
    }

    document.querySelector('.willpattu-heading h1').textContent = 'Willpattu National Park';

    if (data[0].images && data[0].images.length >= 2) {
        mainImg.src = data[0].images[0];
        sectionImg.src = data[0].images[1];
    } else {
        console.error('Error: Insufficient image data');
    }

    if (data[0].paragraphs && data[0].paragraphs.length >= 2) {
        document.querySelector('.main p').textContent = data[0].paragraphs[0];
        document.querySelector('.section p').textContent = data[0].paragraphs[1];
    } else {
        console.error('Error: Insufficient paragraph data');
    }

    if (data[1] && data[1].heading && data[1].lists && data[1].lists.length > 0) {
        const factsList = document.createElement('ul');
        data[1].lists.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            factsList.appendChild(listItem);
        });
        document.querySelector('.section h2').textContent = data[1].heading;
        document.querySelector('.section').appendChild(factsList);
    } else {
        console.error('Error: Insufficient facts data');
    }
}

window.onload = fetchData;

