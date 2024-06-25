let email = localStorage.getItem ('email');
if (email){
let saludo = document.querySelector('#bienvenida');
let login = document.querySelector('#login');
let registro = document.querySelector ('#registro');
saludoSpan.innerHTML = 'Bienvenido/a: ${email}';

login.style.display = 'none';
registro.style.display = 'none';
};