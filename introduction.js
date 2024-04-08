
                
//                 data.forEach(location => {
//                     console.log(location)
//                     const locationCard = document.createElement('div');
//                     locationCard.classList.add('location-card');
//                     locationCard.innerHTML = `
//                         <div class="image-content">
//                             <div class="second-image">
//                                 <img class="another-image" src="${location.images[0]}" />
//                             </div>
//                             <div class="second-image">
//                                 <img class="another-image" src="${location.images[1]}" />
//                             </div>
//                         </div>
//                         <div class="location-details">
//                             <h2>${location.heading}</h2>
//                             <p><strong>Location:</strong> ${location.paragraphs[0]}</p>
//                             <p><strong>Description:</strong> ${location.paragraphs[1]}</p>
//                             <iframe src="${location.frame}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//                         </div>
//                     `;
//                     document.querySelector('.container').appendChild(locationCard);
//                 });

               
//                 const summaryTableBody = document.querySelector('.summary-table tbody');
//                 data.forEach(location => {
//                     summaryTableBody.innerHTML += `
//                         <tr>
//                             <td>${location.heading}</td>
//                             <td>${location.tabledata1[1]}</td>
//                             <td>${location.tabledata1[2]}</td>
//                             <td><img src="${location.tabledata1[3]}" alt="${location.tabledata1[1]}"></td>
//                         </tr>
//                     `;
//                 });
//             })
//             .catch(error => console.error("Error fetching data:", error));

// introduction.js

const wildlifeDataUrl = './introduction.json'; // Replace with the path to your JSON file

async function fetchWildlifeData() {
  try {
    const response = await fetch(wildlifeDataUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const wildlifeData = await response.json();
    return wildlifeData;
  } catch (error) {
    console.error('Error fetching wildlife data:', error);
    return []; // Handle errors gracefully, like displaying an error message
  }
}

async function renderWildlifeData(data) {
  const container = document.querySelector('.container');

  for (const { heading, images, ...rest } of data) {
    const locationCard = document.createElement('div');
    locationCard.classList.add('location-card');

    if (heading) {
      const locationHeading = document.createElement('h2');
      locationHeading.textContent = heading;
      locationCard.appendChild(locationHeading);
    }

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-content');

    if (images) {
      for (const image of images) {
        const locationImage = document.createElement('img');
        locationImage.src = image;
        locationImage.alt = 'Sri Lankan Wildlife';
        imageContainer.appendChild(locationImage);
      }
    }

    locationCard.appendChild(imageContainer);

    if (rest.paragraphs) {
      const description = document.createElement('p');
      description.innerHTML = rest.paragraphs.join('<br>'); // Join paragraph elements
      locationCard.appendChild(description);
    }

    if (rest.frame) {
      const locationFrame = document.createElement('iframe');
      locationFrame.src = rest.frame;
      locationFrame.setAttribute('width', '100%');
      locationFrame.setAttribute('height', '450');
      locationFrame.setAttribute('allowfullscreen', '');
      locationFrame.setAttribute('loading', 'lazy');
      locationCard.appendChild(locationFrame);
    }

    container.appendChild(locationCard);
  }

  // Render summary table data (optional)
  const summaryTable = document.querySelector('.summary-table tbody');
  if (data[3] && data[3].tabledata1) {
    for (const rowData of [data[3].tabledata1, data[3].tabledata2]) {
      const tableRow = document.createElement('tr');
      for (const cellData of rowData) {
        const tableCell = document.createElement('td');
        if (typeof cellData === 'string') {
          tableCell.textContent = cellData;
        } else {
          const image = document.createElement('img');
          image.src = cellData;
          image.alt = 'Wildlife Image';
          tableCell.appendChild(image);
        }
        tableRow.appendChild(tableCell);
      }
      summaryTable.appendChild(tableRow);
    }
  }
}

fetchWildlifeData()
  .then(data => renderWildlifeData(data))
  .catch(error => console.error(error));
