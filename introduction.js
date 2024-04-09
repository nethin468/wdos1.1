fetch("introduction.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("introduction",JSON.stringify(data))
    renderIntroduction(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

function renderIntroduction(data) {
  if (!Array.isArray(data) || data.length < 4) {
    console.error("Data structure is invalid.");
    return;
  }

  const heading = document.createElement("h1");
  heading.textContent = data[0].heading || "";
  document.querySelector(".container").prepend(heading);

  const imageContainer = document.querySelector(
    ".location-card .image-content"
  );
  if (data[0].images && Array.isArray(data[0].images)) {
    data[0].images.forEach((imageUrl) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      imageContainer.appendChild(img);
    });
  } else {
    console.error("Images data is missing or invalid.");
  }

  if (data[1]) {
    renderLocationDetails(data[1]);
  } else {
    console.error("Horton Plains National Park data is missing.");
  }

  if (data[2]) {
    renderLocationDetails(data[2]);
  } else {
    console.error("Sinharaja Forest Reserve data is missing.");
  }

  if (data[3]) {
    renderSummaryTable(data[3]);
  } else {
    console.error("Summary table data is missing.");
  }
}

function renderLocationDetails(locationData) {
  const locationCard = document.createElement("div");
  locationCard.classList.add("location-card");

  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("image-content");

  if (
    locationData.images2 &&
    Array.isArray(locationData.images2) &&
    locationData.images2.length > 0
  ) {
    locationData.images2.forEach((imageUrl) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      imagesContainer.appendChild(img);
    });
  } else {
    console.error("Images data is missing or invalid.");
  }

  locationCard.appendChild(imagesContainer);

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("location-details");

  const heading = document.createElement("h2");
  heading.textContent = locationData.heading3 || locationData.heading2;
  detailsContainer.appendChild(heading);

  if (Array.isArray(locationData.paragraph)) {
    locationData.paragraph.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      detailsContainer.appendChild(p);
    });
  } else {
    const p = document.createElement("p");
    p.textContent = locationData.paragraphs;
    detailsContainer.appendChild(p);
  }

  const iframe = document.createElement("iframe");
  iframe.src = locationData.frame2 || locationData.frame;
  iframe.width = "100%";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowFullscreen = "";
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  detailsContainer.appendChild(iframe);

  locationCard.appendChild(detailsContainer);

  document.querySelector(".container").appendChild(locationCard);
}

function renderSummaryTable(tableData) {
  const table = document.createElement("table");
  table.classList.add("summary-table");

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  ["Location", "Wildlife", "Interesting Facts", "Image"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  [tableData.tabledata1, tableData.tabledata2].forEach((data) => {
    const row = document.createElement("tr");
    data.forEach((text, index) => {
      const cell =
        index === data.length - 1
          ? document.createElement("td")
          : document.createElement("td");
      if (index === data.length - 1) {
        const img = document.createElement("img");
        img.src = text;
        img.alt = "Image";
        cell.appendChild(img);
      } else {
        cell.textContent = text;
      }
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  const tfoot = document.createElement("tfoot");
  const footRow = document.createElement("tr");
  const footCell = document.createElement("td");
  footCell.colSpan = "4";
  footCell.textContent =
    "Explore the diverse landscapes of Sri Lanka and witness the fascinating wildlife that thrives beyond the well-trodden paths of Yala and Wilpattu. Each location offers a unique glimpse into the rich natural heritage of this tropical jewel.";
  footRow.appendChild(footCell);
  tfoot.appendChild(footRow);
  table.appendChild(tfoot);

  document.querySelector(".container").appendChild(table);
}
