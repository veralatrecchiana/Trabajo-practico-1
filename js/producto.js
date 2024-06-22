let qs = location.search; 
let qsto = new URLSearchParams(qs); 
let id = qsto.get('id'); 

let url = `https://fakestoreapi.com/products/${id}`;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data); 

        let nombreProducto = document.querySelector('.nombreart');
        let categoriaProducto = document.querySelector('.categoria');
        let precioProducto = document.querySelector('.preciodescrip');
        let imagenProducto = document.querySelector('.im1');
        let descripcionProducto = document.querySelector('.descripciondetalle');

        nombreProducto.textContent = data.title;
        categoriaProducto.textContent = `Categoría: ${data.category}`;
        precioProducto.textContent = `Precio: $${data.price}`;
        imagenProducto.src = data.image;
        descripcionProducto.textContent = data.description;

    })
    .catch(function(error) {
        console.error('Error fetching product details:', error);
    });

let carrito = [];

let recuperoStorage = localStorage.getItem('cartItems');
if (recuperoStorage !== null) {
    carrito = JSON.parse(recuperoStorage);
}

let botonAgregar = document.querySelector('.agregar');
botonAgregar.addEventListener('click', function(e) {
    e.preventDefault();
    carrito.push(id);
    localStorage.setItem('cartItems', JSON.stringify(carrito));

    console.log('Producto agregado al carrito:', id);
    console.log('Carrito:', carrito);
});