
let categorias = {
      'accesorios': 'jewelery',
      'mens-clothing': "men's clothing",
      'womens-clothing': "women's clothing",
      'electronics': 'electronics'
  };
  
  for (let categoria in categorias) {
      let url = `https://fakestoreapi.com/products/category/${categorias[categoria]}`;
  
      fetch(url)
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {
              console.log(data);
              let products = data;
  
              let lista = document.querySelector(`#${categoria}.lista`);
              let elementosLista = '';
  
              for (let i = 0; i < products.length; i++) {
                  let product = products[i];
                  elementosLista += `<article>
                                      <img src="${product.image}" alt="${product.title}">
                                      <h2>${product.title}</h2>
                                      <p>Precio: $${product.price}</p>
                                      <a href="producto.html?id=${product.id}">Ver más</a>
                                    </article>`;
              }
  
              console.log(elementosLista);
              lista.innerHTML = elementosLista;
          })
          .catch(function(error) {
              console.log(error);
          });
  }
  