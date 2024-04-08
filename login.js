document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("login-form").addEventListener('submit', function(event){
        event.preventDefault();

        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;

        // Fetch the user data from the server
        fetch('users.json')
        .then(response => response.json())
        .then(userData => {
            const user = userData.users.find(
                user => user.email === email && user.password === password
            );

            if(user) {
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "./index.html";
            } else {
                alert("Invalid username or password");
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
    });
});