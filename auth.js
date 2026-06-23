const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        alert('Login Successful');

        window.location.href = 'dashboard.html';
    });
}

if(registerForm){
    registerForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        alert('Account Created');

        window.location.href = 'index.html';
    });
}
function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    /* SIMPLE LOGIN */

    if(email === "sales@nurdrip.co.za" && password === "nurd2273"){

        window.location.href = "index.html";

    }

    else if(email === "sales@nurdrip.co.za" && password === "nurd2273"){

        window.location.href = "index.html";

    }

    else{

        alert("Invalid Login");

    }

}
