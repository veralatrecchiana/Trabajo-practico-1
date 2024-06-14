 
                    fetch('https://fakestoreapi.com/products/category/jewelry')
                    .then(function(response){
                           return response.json()
                       })
                    .then(function(data){
                       let lista = document.querySelector(`section.${jewelry}`);
                       let producto = '';                
                       for(let i=0; i < info.length; i++){
                       let producto = data[i];
                       producto +=`<article>
                                   <img src="${product.image}" alt="${product.title}">
                                   <p class="nombre">${product.title}</p>
                                   <p class="descripcion">${product.description}</p>
                                   <p class="precio">${product.price} USD </p>
                                   <a href="./producto.html?id=${producto.id}" class="btn-detalle">VER MÁS</a>
                                   </article> `;
                       }
                       lista.innerHTML = productos;
                    })
                   .catch(function(error){
                       console.log(error)
                   })
