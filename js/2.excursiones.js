// ARRAY DE PRODUCTOS
const productos = [
    { 
    id: 1, 
    nombre: "Fiordo Comau, Chile", 
    precio: 5000, img: "media/home/4.Fiordo Comau (1).jpg", 
    cantidad: 1 
    },
    { 
    id: 2, 
    nombre: "Glaciar Bernardo, Chile", 
    precio: 8000, img: "media/home/1.Expedicion Chile Kayak Travesia 2023-2.jpg", cantidad: 1 
    },
    { 
    id: 3, 
    nombre: "Rio Truful Truful", 
    precio: 150, 
    img:"media/home/2.Araucaria-14.jpg", 
    cantidad: 1 
    },
    { 
    id: 4, 
    nombre: "Cascada Blanco Sur", 
    precio: 2000, 
    img:"media/home/2.DSC01118.jpg", 
    cantidad: 1 
    },
    { 
    id: 5, 
    nombre: "Lago Espejo Estrellado", 
    precio: 2000, 
    img:"media/home/13.Stars-2.jpg", 
    cantidad: 1 
    },
    { id: 6, 
    nombre: "Lago Espejo Estrellado", 
    precio: 2000, 
    img:"media/home/1.Expedicion Chile Kayak Travesia 2023-14.jpg", 
    cantidad: 1 
    },
];

// APP
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para renderizar los productos en la tienda   (forma moderna)
/*function renderizarProductos() {
    productos.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p class="price">${product.precio} $</p>
        `;
        shopContent.append(content);

        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";
        content.append(comprar);

        comprar.addEventListener("click", function() {
            agregarAlCarrito(product);
        });
    });
}*/

function renderizarProductos() {
    for (var i = 0; i < productos.length; i++) {
        var product = productos[i];

        var content = document.createElement("div");
        content.className = "card";
        content.innerHTML = '<img src="' + product.img + '">'
                        + '<h3>' + product.nombre + '</h3>'
                        + '<p class="price">' + product.precio + ' $</p>';
        shopContent.append(content);

        var comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";
        content.append(comprar);

        comprar.addEventListener("click", (function(product) {
            return function() {
                agregarAlCarrito(product);
            }
        })(product));
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(product) {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
        carrito = carrito.map((prod) => {
            if (prod.id === product.id) {
                prod.cantidad++;
            }
            return prod;
        });
    } else {
        carrito.push({ ...product });
    }

    console.log(carrito);
    carritoCounter();
    saveLocal();
}

// Función para guardar el carrito en localStorage
function saveLocal() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para pintar el carrito en el modal
function pintarCarrito() {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h1 class="modal-header-title">Carrito.</h1>`;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", function() {
        modalContainer.style.display = "none";
    });
    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
            <span class="restar"> - </span>
            <p>${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: ${product.cantidad * product.precio} $</p>
            <span class="delete-product"> ❌ </span>
        `;
        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", function() {
            restarProducto(product.id);
        });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", function() {
            sumarProducto(product.id);
        });

        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", function() {
            eliminarProducto(product.id);
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
}

// Función para restar cantidad de un producto en el carrito
function restarProducto(id) {
    const product = carrito.find((product) => product.id === id);
    if (product.cantidad !== 1) {
        product.cantidad--;
        saveLocal();
        pintarCarrito();
    }
}

// Función para sumar cantidad de un producto en el carrito
function sumarProducto(id) {
    const product = carrito.find((product) => product.id === id);
    product.cantidad++;
    saveLocal();
    pintarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(id) {
    carrito = carrito.filter((product) => product.id !== id);
    carritoCounter();
    saveLocal();
    pintarCarrito();
}

// Función para contar la cantidad de productos en el carrito
function carritoCounter() {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

// Inicialización
function init() {
    renderizarProductos();
    verCarrito.addEventListener("click", pintarCarrito);
    carritoCounter();
}

// init(); // no eliminar esto sino se rompe el carrito



