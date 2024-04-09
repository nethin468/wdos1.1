// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("login-form").addEventListener('submit', function(event){
//         event.preventDefault();

//         const email = document.getElementById("emailInput").value;
//         const password = document.getElementById("passwordInput").value;

//         fetch('users.json')
//         .then(response => response.json())
//         .then(userData => {
//             const user = userData.users.find(
//                 user => user.email === email && user.password === password
//             );

//             if(user) {
//                 localStorage.setItem("user", JSON.stringify(user));
//                 window.location.href = "./dashboard.html";
//             } else {
//                 alert("Invalid username or password");
//             }
//         })
//         .catch(error => console.error('Error fetching user data:', error));
//     });
// });
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("login-form").addEventListener('submit', function(event){
        event.preventDefault();

        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;

        fetch('users.json')
        .then(response => response.json())
        .then(userData => {
            const user = userData.users.find(
                user => user.email === email && user.password === password
            );

            if(user) {
                // Check if the user is an admin
                if(user.role === "admin") {
                    localStorage.setItem("user", JSON.stringify(user));
                    window.location.href = "./dashboard.html";
                } else {
                    alert("You are not authorized to access the dashboard.");
                }
            } else {
                alert("Invalid username or password");
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
    });
});
