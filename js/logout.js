

let logout = document.querySelector('#logout')

logout.addEventListener("click", function(){
    let login = document.querySelector(".login")
    let register =document.querySelector(".register")
    if (localStorage.getItem("dataLogin")){
        localStorage.removeItem("dataLogin")}
        if (register){
            register.style.display = "block";
        }
        if (login){
            login.style.display = "block";
        }
        window.location.href = "login.html"
    })