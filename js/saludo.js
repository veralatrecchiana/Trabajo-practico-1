let email = localStorage.getItem("email");
let contraseña = localStorage.getItem("contraseña");

if (tomoStorage1 != null){
    let saludo = `Bienvenido: ${email}`
    let mostrarSaludo = document.querySelector(".head")
    mostrarSaludo.innerText = saludo
    let logout = document.querySelector(".logout")
    logout.innerHTML += `<a class="logout" href="#">Log Out<a/>`
    let desaparecer1 = document.querySelector(".login")
    let desaparecer2 = document.querySelector(".registero")
    desaparecer1.style.display = "none"
    desaparecer2.style.display = "none"
    console.log(tomoStorage1)
}