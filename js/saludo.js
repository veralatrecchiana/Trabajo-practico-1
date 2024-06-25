let email = localStorage.getItem("email")

if (email){
    let guardarEmail = json.parse(email);
    let nombre = guardarEmail.email;

    let saludo = document.querySelector(".saludo");
    saludo.innerText += `Bienvenido: ${email}`
    let login = document.querySelector(".login")
    let registrar = document.querySelector(".registrar")
    registrar.style.display = "none"
    register.style.display = "none"
}else{
    let saludo = document.querySelector(".saludo");
    saludo.innerText = "Inicia secion para guardar tus datos";
}