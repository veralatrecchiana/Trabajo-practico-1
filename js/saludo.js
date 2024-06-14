let usuario = localStorage.getItem("email");

if (usuario){
    let header = document.querySelector("header");
    if (header) {
        header.innerHTML += bienvenidaHTML;

        document.querySelector("#logout").addEventListener("click", function(event){
            event.preventDefault();
            localStorage.removeItem("email");
            localStorage.removeItem("contrasena");
            document.location.href = "login.html"; 
        });
    }
    let menuItems = document.querySelectorAll("nav a");
    for (let i = 0; i < menuItems.length; i++){
        if (menuItems[i].textContent === "Login" || menuItems[i].textContent === "Registro") {
            menuItems[i].style.display = "none";
        }
    }
   
}