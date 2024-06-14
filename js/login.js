let formulario = document.querySelector("form")
let campoEmail = document.querySelector("#email")
let campoContrasena = document.querySelector("#contraseña")

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    let todosOk = true
    if (campoEmail.value == ""){
        alert("Por favor complete el campo Email.")
        todosOk = false
    }

    if (campoContrasena. value == ""){
        alert("Por favor complete el campo contraseña.")
        todosOk = false
    }

    else if (campoContrasena.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres.")
        todosOk = false
    }

    if (todosOk == true){
        localStorage.setItem("email", campoEmail.value)
        localStorage.setItem("contraseña", campoContrasena.value)
        console.log(localStorage)
        this.submit()
    }
})