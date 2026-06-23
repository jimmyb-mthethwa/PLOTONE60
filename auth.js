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