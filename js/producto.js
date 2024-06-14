
let qs = location.search; 
let qsto = new URLSearchParams(qs); 
let id = qsto.get('id'); 

let url = `https://fakestoreapi.com/products/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let descripcion = document.querySelector('.descripciondetalle');
        let precio = document.querySelector('.preciodescrip');

        title.innerText = data.name;
        image.src=data.image;
        descripcion.innerText += data.descripcion;
        precio.innerText += data.precio;      

    })
    .catch(function(error){
        console.log(error);
    })

    let carrito = [];

    let recuperoStorage = localStorage.getItem('cartItems');

    if (recuperoStorage !== null) {
        
        carrito = JSON.parse(recuperoStorage);
       
    }
    
    let fav = document.querySelector('.fav')

    fav.addEventListener('click', function(e) {
        e.preventDefault();
        carrito.push(id);
        // lo convierto en string para guardarlo en storage
        let carStr = JSON.stringify(carrito); 
        localStorage.setItem('cartItems', carStr);

        console.log('carrito: ', carrito);
        console.log('localStorage', localStorage);
    })

    