let formulario = document.querySelector('#formulario');
let checkboxRecupero = document.querySelector('#recupero');
let campoEmail = document.querySelector('#email');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let todosOK = true;

    document.querySelector('#error-email').innerHTML = '';
    document.querySelector('#error-checkbox').innerHTML = '';
    document.querySelector('#cumplevalidaciones').innerHTML = '';
    document.querySelector('#iralogin').innerHTML = '';

    if (campoEmail.value === '') {
        document.querySelector('#error-email').innerHTML = 'Por favor escriba su email';
        todosOK = false;
    }

    if (checkboxRecupero.checked === false) {
        document.querySelector('#error-checkbox').innerHTML = 'Por favor acepte el campo Quiero recuperar mi contraseña';
        todosOK = false;
    }
    
    if (todosOK == true) {
        
        document.querySelector('#cumplevalidaciones').innerHTML = 'Recibirás un email con las instrucciones para recuperar tu contraseña';
        document.querySelector('#iralogin').innerHTML = '<a href= "login.html">IR A LOGIN</a>';
    }
    
});
