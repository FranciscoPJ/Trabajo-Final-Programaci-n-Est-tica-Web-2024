// /*ARRAY DE PRODUCTOS*/
// const productos = [
//     {
//         id: 1,
//         nombre: "Fiordo Comau, Chile",
//         precio: 5000,
//         img: "media/home/4.Fiordo Comau (1).jpg",
//         cantidad: 1,
//     },
//     {
//         id: 2,
//         nombre: "Glaciar Bernardo, Chile",
//         precio: 8000,
//         img: "media/home/1.Expedicion Chile Kayak Travesia 2023-2.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 3,
//         nombre: "Rio Truful Truful",
//         precio: 150,
//         img:"media/home/2.Araucaria-14.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 4,
//         nombre: "Cascada Blanco Sur",
//         precio: 2000,
//         img:"media/home/2.DSC01118.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 5,
//         nombre: "Lago Espejo Estrellado",
//         precio: 2000,
//         img:"media/home/13.Stars-2.jpg",
//         cantidad: 1,
//     },
//     {
//         id: 6,
//         nombre: "Lago Espejo Estrellado",  
//         precio: 2000,
//         img:"media/home/1.Expedicion Chile Kayak Travesia 2023-14.jpg",
//         cantidad: 1,
//     },
// ];
// /*ARRAY DE PRODUCTOS----------------------------------------------------------------*/

// /* APP -----------------------------------------------------------------------------*/
// const shopContent = document.getElementById("shopContent");
// const verCarrito = document.getElementById("verCarrito");
// const modalContainer = document.getElementById("modal-container");
// const showAlert = document.getElementById("showAlert");
// const cantidadCarrito = document.getElementById("cantidadCarrito");

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// productos.forEach((product) => {
//     let content = document.createElement("div");
//     content.className = "card";
//     content.innerHTML = `
//     <img src="${product.img}">
//     <h3>${product.nombre}</h3>
//     <p class="price">${product.precio} $</p>
//   `;

//     shopContent.append(content);

//     let comprar = document.createElement("button");
//     comprar.innerText = "comprar";
//     comprar.className = "comprar";

//     content.append(comprar);

//     comprar.addEventListener("click", () => {
//         const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

//         if (repeat) {
//             carrito.map((prod) => {
//                 if (prod.id === product.id) {
//                     prod.cantidad++;
//                 }
//             });
//         } else {
//             carrito.push({
//                 id: product.id,
//                 img: product.img,
//                 nombre: product.nombre,
//                 precio: product.precio,
//                 cantidad: product.cantidad,
//             });
//             console.log(carrito);
//             console.log(carrito.length);
//             carritoCounter();
//             saveLocal();
//         }
//     });
// });

// //set item
// const saveLocal = () => {
//     localStorage.setItem("carrito", JSON.stringify(carrito));
// };

// //get item
// /* APP --------------------------------------------------------------------------*/

// /*CARRITO------------------------------------------------------------------------*/
// const pintarCarrito = () => {
//     modalContainer.innerHTML = "";
//     modalContainer.style.display = "flex";
//     const modalHeader = document.createElement("div");
//     modalHeader.className = "modal-header";
//     modalHeader.innerHTML = `
//         <h1 class="modal-header-title">Carrito.</h1>
//     `;
//     modalContainer.append(modalHeader);

//     const modalbutton = document.createElement("h1");
//     modalbutton.innerText = "x";
//     modalbutton.className = "modal-header-button";

//     modalbutton.addEventListener("click", () => {
//         modalContainer.style.display = "none";
//     });

//     modalHeader.append(modalbutton);

//     carrito.forEach((product) => {
//         let carritoContent = document.createElement("div");
//         carritoContent.className = "modal-content";
//         carritoContent.innerHTML = `
//           <img src="${product.img}">
//           <h3>${product.nombre}</h3>
//           <p>${product.precio} $</p>
//           <span class="restar"> - </span>
//           <!--recomiendo no escribir la palabra cantidad para que no quede tan largo :)-->
//           <p>${product.cantidad}</p>
//           <span class="sumar"> + </span>
//           <p>Total: ${product.cantidad * product.precio} $</p>
//           <span class="delete-product"> ❌ </span>
//         `;

//         modalContainer.append(carritoContent);

//         let restar = carritoContent.querySelector(".restar");

//         restar.addEventListener("click", () => {
//             if (product.cantidad !== 1) {
//                 product.cantidad--;
//             }
//             saveLocal();
//             pintarCarrito();
//         });

//         let sumar = carritoContent.querySelector(".sumar");
//         sumar.addEventListener("click", () => {
//             product.cantidad++;
//             saveLocal();
//             pintarCarrito();
//         });

//         let eliminar = carritoContent.querySelector(".delete-product");

//         eliminar.addEventListener("click", () => {
//             eliminarProducto(product.id);
//         });

//         // let eliminar = document.createElement("span");
//         // eliminar.innerText = "❌";
//         // eliminar.classList = "delete-product";
//         // carritoContent.append(eliminar);

//         // eliminar.addEventListener("click", eliminarProducto);
//     });

//     const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

//     const totalBuying = document.createElement("div");
//     totalBuying.className = "total-content";
//     totalBuying.innerHTML = `Total a pagar: ${total} $`;
//     modalContainer.append(totalBuying);
// };

// verCarrito.addEventListener("click", pintarCarrito);

// const eliminarProducto = (id) => {
//     const foundId = carrito.find((element) => element.id === id);

//     console.log(foundId);

//     carrito = carrito.filter((carritoId) => {
//         return carritoId !== foundId;
//     });

//     carritoCounter();
//     saveLocal();
//     pintarCarrito();
// };

// const carritoCounter = () => {
//     cantidadCarrito.style.display = "block";

//     const carritoLength = carrito.length;

//     localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

//     cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
// };

// carritoCounter();

// /* CARRITO */