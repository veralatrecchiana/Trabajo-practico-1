// Recuperar localStorage
let recuperoStorage = localStorage.getItem('cartItems');

let lista = document.querySelector('.lista');
let elementosCarrito = '';

// Preguntar si hay algo en el storage
if (recuperoStorage == null) {
    let mensaje = 'Tu carrito esta vacio';
    let empty = document.querySelector('.empty');
    empty.innerText = mensaje;
} else {
    let carrito = JSON.parse(recuperoStorage);
    mostrarProductosEnCarrito(carrito);
}

// Función para mostrar los productos en el carrito
function mostrarProductosEnCarrito(carrito) {
    // Vaciar elementosCarrito para comenzar desde cero
    elementosCarrito = '';

    // Iterar sobre cada producto en el carrito y hacer fetch a la API
    for (let i = 0; i < carrito.length; i++) {
        let id = carrito[i];
        let url = 'https://fakestoreapi.com/products/${id}';

        // Fetch para obtener datos del producto
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                elementosCarrito += `<article>
                                <img src=${data.image}>
                                <p>${data.title}</p>
                                <p>${data.price}</p>
                            </article>`

                lista.innerHTML = elementosCarrito;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

// Evento para finalizar la compra
let finalizarCompraBtn = document.querySelector('.finalizar-compra');
finalizarCompraBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Limpiar localStorage
    localStorage.removeItem('cartItems');

    // Agradecer al usuario por su compra
    alert('¡Gracias por su compra!');

    // Redirigir al usuario a la página principal
    window.location.href = './index.html'; // <-- Aquí se redirige
});