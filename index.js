fetch("index.json")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("index",JSON.stringify(data))
            const introParagraph = data[0].paragraphs;
            const introImage = data[0].images;

            const sec1Heading = data[1].heading;
            const sec1Paragraph = data[1].paragraphs;
            const sec1List = data[1].lists;

            const sec2Heading = data[3].heading2;
            const sec2Paragraph = data[3].paragraphs;
            const sec2List = data[3].lists;

            const sec3Heading = data[4].heading3;
            const sec3Paragraph = data[4].paragraphs;
            const sec3Images = data[4].images;

            const introduction = document.querySelector(".introduction");
            introduction.innerHTML = `
                <p class="introduction-para1">${introParagraph}</p>
                <div class="intro-img">
                    <img class="intro-img1" src="${introImage}">
                </div>
            `;

            const mainsec = document.querySelector(".mainsec");
            mainsec.innerHTML = `
                <div class="section1">
                    <h2>${sec1Heading}</h2>
                    <p class="sec1">${sec1Paragraph}</p>
                    <ul class="sec1">
                        ${sec1List.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <div class="section1-img">
                        <img class="section1-img1" src="${data[2].imagesec1[0]}">
                    </div>
                    <div class="section1-img2">
                        <img class="section1-img3" src="${data[2].imagesec1[1]}">
                    </div>
                </div>
            `;

            const mainsec2 = document.querySelector(".mainsec2");
            mainsec2.innerHTML = `
                <div>
                    <div class="subsec2">
                        <img class="subsec2-img" src="${data[2].imagesec2[0]}">
                    </div>
                    <div>
                        <img class="subsec2-img2" src="${data[2].imagesec2[1]}">
                    </div>
                </div>
                <div class="section2">
                    <h2 class="heading2">${sec2Heading}</h2>
                    <p>${sec2Paragraph}</p>
                    <ol>
                        ${sec2List.map(item => `<li>${item}</li>`).join('')}
                    </ol>
                </div>
            `;

            const mainsec3 = document.querySelector(".mainsec3");
            mainsec3.innerHTML = `
                <div class="section3">
                    <h2>${sec3Heading}</h2>
                    <p class="subsec3-para">${sec3Paragraph}</p>
                </div>
                <div>
                    <div class="subsec3">
                        <img class="subsec3-img" src="${sec3Images[0]}">
                    </div>
                    <div class="subsec3-2">
                        <img class="subsec3-img2" src="${sec3Images[1]}">
                    </div>
                </div>
            `;
        })
        .catch(error => console.error("Error fetching data:", error))