

document.addEventListener("DOMContentLoaded", function () {
  fetch("SL-Leopard.json")
    .then((response) => response.json())
    .then((data) => { localStorage.setItem("leopard",JSON.stringify(data))
       renderHTML(data)})
    .catch((error) => console.error("Error fetching data:", error));
});

function renderHTML(data) {
  console.log(data);
  var content = document.getElementById("content");

  
  data.headings.forEach((heading) => {
    var headingHTML = `<h2>${heading.title}</h2>`;
    if (Array.isArray(heading.content)) {
      heading.content.forEach((subHeading) => {
        headingHTML += `<h3>${subHeading.title}</h3>`;
        headingHTML += `<p>${subHeading.content}</p>`;
      });
    } else {
      headingHTML += `<p>${heading.content}</p>`;
    }
    content.insertAdjacentHTML("beforeend", headingHTML);
  });


  data.images.forEach((image) => {
    var imageHTML = `<img src="${image.src}" alt="${image.alt}">`;
    content.insertAdjacentHTML("beforeend", imageHTML);
  });
}
