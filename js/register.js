let formulario = document.querySelector('#formulario');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let campoRePassword = document.querySelector('#rePassword');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let todosOK = true;

    document.querySelector('#error-email').innerHTML = '';
    document.querySelector('#error-password').innerHTML = '';
    document.querySelector('#error-rePassword').innerHTML = '';

    if (campoEmail.value === '') {
        document.querySelector('#error-email').innerHTML = 'Por favor complete el campo';
        todosOK = false;
    }

    if (campoPassword.value === '') {
        document.querySelector('#error-password').innerHTML = 'Por favor complete el campo';
        todosOK = false;
    } 
    else if (campoPassword.value.length < 6) {
        document.querySelector('#error-password').innerHTML = 'Debe ingresar al menos 6 caracteres';
        todosOK = false;
    }

    if (campoRePassword.value === '') {
        document.querySelector('#error-rePassword').innerHTML = 'Por favor complete el campo';
        todosOK = false;
    } 
    else if (campoPassword.value !== campoRePassword.value) {
        document.querySelector('#error-rePassword').innerHTML = 'Las contraseñas no coinciden';
        todosOK = false;
    }

    if (todosOK == true) {
        this.submit();  
    }
        });