const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // ONLY ONE LOGIN ACCOUNT
    const correctEmail = "sales@nurdrip.co.za";
    const correctPassword = "nurd2273";

    if (email === correctEmail && password === correctPassword) {

        alert("Login Successful!");

        // Save login status
        localStorage.setItem("loggedIn", "true");

        // Redirect to dashboard
        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password!");

    }
});
