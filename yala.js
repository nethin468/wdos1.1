fetch("yala.json")
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("yala",JSON.stringify(data))
                const mainSection = document.querySelector('.main');
                mainSection.innerHTML = `
                    <img class="yala" src="${data.image}" alt="Yala National Park">
                    <p>${data.description}</p>
                `;

              
                data.sections.forEach(section => {
                    const newSection = document.createElement('section');
                    newSection.innerHTML = `
                        <img src="${section.image}" alt="${section.alt}">
                        <p>${section.content}</p>
                    `;
                    document.body.insertBefore(newSection, document.querySelector('.footer'));
                });

             
                document.getElementById('about-us-content').innerText = data.aboutUs;

                document.getElementById('phone-number').innerText = data.contact.phoneNumber;
                document.getElementById('email').innerText = data.contact.email;
                document.getElementById('fax').innerText = data.contact.fax;
            })
            .catch(error => console.error("Error fetching data:", error));