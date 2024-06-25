let querys = new URLSearchParams(location.search);
let categoria = querys.get("category");

fetch (`https://fakestoreapi.com/products/category/${categoria}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let todoCategory = document.querySelector("section.productosCategory");
        let productosCategory ="";
        for(let i=0; i<data.length; i++){
            let productosCategory = data[i];
            productoscategory += `<article class="productos">
                                <img class="imagenes" src="${productosCategory.image}"/>
                                <h2 class ="titulo">${productosCategory.title}</h2>
                                <p class="descripcion">${productosCategory.description}</p>
                                <p class="precio">${productosCategory.price}</p>
                                <a class="boton" href="producto.html?id=${productoCategory.id}">Ver mas</a>
                            </article>`;
            }
        todoCategpry.innerHTML = productosCategory;
    })
    .catch(function(error){
        console.log("Error: "+ error);
    })