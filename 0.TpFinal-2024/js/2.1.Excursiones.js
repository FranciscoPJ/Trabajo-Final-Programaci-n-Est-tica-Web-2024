function colExcursiones() {

    let excursiones = [
        {
            id: 1,
            nombre: "Plottier, Rio Limay",
            precio: 5000, img: "media/home/5.Plottier_Octubre-3.jpg",
            cantidad: 1
        },
        {
            id: 2,
            nombre: "Fiordo Comau, Chile",
            precio: 200000, img: "media/home/4.Fiordo Comau (7).jpg",
            cantidad: 1
        },
        {
            id: 3,
            nombre: "General Roca, Rio Negro",
            precio: 5000, img: "media/home/7.Primera Bajada De Santi-5.jpg",
            cantidad: 1
        },
        {
            id: 4,
            nombre: "Glaciar Bernardo, Chile",
            precio: 500000, img: "media/home/1.Expedicion Chile Kayak Travesia 2023-2.jpg",
            cantidad: 1
        },
        {
            id: 5,
            nombre: "Pucon, Rio Palguin",
            precio: 5000, img: "media/home/2.DSC07344.jpg",
            cantidad: 1
        },
        {
            id: 6,
            nombre: "Rio Truful Truful",
            precio: 2000, img: "media/home/2.Araucaria.jpg",
            cantidad: 1
        },
        {
            id: 7,
            nombre: "Curacuatin, Blanco Sur",
            precio: 3000, img: "media/home/2.WCA_BlancoSur_KalobGrady-73.jpg",
            cantidad: 1
        },
        {
            id: 8,
            nombre: "Tucuman, Rio Los Sosas",
            precio: 20000, img: "media/home/3.DSC_0272.jpg",
            cantidad: 1
        },
    ];

    return excursiones;
}

function guardarExcursionSeleccionado(id, nombre, precio, img, cant) {
    let objExcursion = { "id": id, "nombre": nombre, "precio": precio, "img": img, "cant": cant }; // le asigno los values de cada input a un objeto excursion    
    return objExcursion;
}

function obtenerObjExcursiones() {
    const excursiones = localStorage.getItem('excursiones'); // obtiene el valor de la clave 'usuarios'
    return excursiones ? JSON.parse(excursiones) : []; // si no tiene valor la variable 'usuarios', es una array vacio, sino continua el array con sus valores guardados
}

// Función para guardar la colección de nombres en localStorage
function guardarInfo(objArrayUser) {
    localStorage.setItem('excursiones', JSON.stringify(objArrayUser)); // guardo el nuevo valor en el array 'excursiones' del local storage
}

function agregarInfo(parametro) {
    var excursiones = colExcursiones(); // arreglo de objetos de excursiones


    // Travesia
    if (parametro == 'plottier') {
        let clavePlottier = Object.keys(excursiones[0]); // acedo a la clave del objeto
        //alert(excursiones[0][clavePlottier[1]]); (accdedo al valor de la clave del objeto)

        var objUnExcursion = guardarExcursionSeleccionado(excursiones[0][clavePlottier[0]], excursiones[0][clavePlottier[1]], excursiones[0][clavePlottier[2]], excursiones[0][clavePlottier[3]], excursiones[0][clavePlottier[4]]);

        var colObjExcursiones = obtenerObjExcursiones();
        colObjExcursiones.push(objUnExcursion);
        guardarInfo(colObjExcursiones);
    }
    else if (parametro == 'fiordo') {
        let claveFiordo = Object.keys(excursiones[1]); // acedo a la clave del objeto
        //alert(excursiones[1][claveFiordo[1]]); // accdedo al valor de la clave del objeto
        var objUnExcursion = guardarExcursionSeleccionado(excursiones[1][claveFiordo[0]], excursiones[1][claveFiordo[1]], excursiones[1][claveFiordo[2]], excursiones[1][claveFiordo[3]], excursiones[1][claveFiordo[4]]);

        var colObjExcursiones = obtenerObjExcursiones();
        colObjExcursiones.push(objUnExcursion);
        guardarInfo(colObjExcursiones);
    }
    else if (parametro == 'roca') {
        let claveRoca = Object.keys(excursiones[2]); // acedo a la clave del objeto
        //alert(excursiones[2][claveRoca[1]]); // accdedo al valor de la clave del objeto
        var objUnExcursion = guardarExcursionSeleccionado(excursiones[2][claveRoca[0]], excursiones[2][claveRoca[1]], excursiones[2][claveRoca[2]], excursiones[2][claveRoca[3]], excursiones[2][claveRoca[4]]);

        var colObjExcursiones = obtenerObjExcursiones();
        colObjExcursiones.push(objUnExcursion);
        guardarInfo(colObjExcursiones);
    }
    else if (parametro == 'glaciar') {
        let claveGlaciar = Object.keys(excursiones[3]); // acedo a la clave del objeto
        //alert(excursiones[3][claveGlaciar[1]]); // accdedo al valor de la clave del objeto
        var objUnExcursion = guardarExcursionSeleccionado(excursiones[3][claveGlaciar[0]], excursiones[3][claveGlaciar[1]], excursiones[3][claveGlaciar[2]], excursiones[3][claveGlaciar[3]], excursiones[3][claveGlaciar[4]]);

        var colObjExcursiones = obtenerObjExcursiones();
        colObjExcursiones.push(objUnExcursion);
        guardarInfo(colObjExcursiones);
    }// aguas blancas
    else if (parametro == 'palguin') {
        let clavePalguin = Object.keys(excursiones[4]); // acedo a la clave del objeto
        //alert(excursiones[4][clavePalguin[1]]); // accdedo al valor de la clave del objeto
        var objUnExcursion = guardarExcursionSeleccionado(excursiones[4][clavePalguin[0]], excursiones[4][clavePalguin[1]], excursiones[4][clavePalguin[2]], excursiones[4][clavePalguin[3]], excursiones[4][clavePalguin[4]]);

        var colObjExcursiones = obtenerObjExcursiones();
        colObjExcursiones.push(objUnExcursion);
        guardarInfo(colObjExcursiones);
    }
    else if (parametro == 'truful') {
        let claveTruful = Object.keys(excursiones[5]); // acedo a la clave del objeto
        //alert(excursiones[5][claveTruful[1]]); // accdedo al valor de la clave del objeto
        var objUnExcursion = guardarExcursionSeleccionado(excursiones[5][claveTruful[0]], excursiones[5][claveTruful[1]], excursiones[5][claveTruful[2]], excursiones[5][claveTruful[3]], excursiones[5][claveTruful[4]]);

        var colObjExcursiones = obtenerObjExcursiones();
        colObjExcursiones.push(objUnExcursion);
        guardarInfo(colObjExcursiones);
    }
    else if (parametro == 'blancoSur') {
        let claveBlancoSur = Object.keys(excursiones[6]); // acedo a la clave del objeto
        //alert(excursiones[6][claveBlancoSur[1]]); // accdedo al valor de la clave del objeto
        var objUnExcursion = guardarExcursionSeleccionado(excursiones[6][claveBlancoSur[0]], excursiones[6][claveBlancoSur[1]], excursiones[6][claveBlancoSur[2]], excursiones[6][claveBlancoSur[3]], excursiones[6][claveBlancoSur[4]]);

        var colObjExcursiones = obtenerObjExcursiones();
        colObjExcursiones.push(objUnExcursion);
        guardarInfo(colObjExcursiones);
    }
    else {
        if (parametro == 'losSosas') {
            let claveLosSosas = Object.keys(excursiones[7]); // acedo a la clave del objeto
            //alert(excursiones[7][claveLosSosas[1]]); // accdedo al valor de la clave del objeto
            var objUnExcursion = guardarExcursionSeleccionado(excursiones[7][claveLosSosas[7]], excursiones[7][claveLosSosas[1]], excursiones[7][claveLosSosas[2]], excursiones[7][claveLosSosas[3]], excursiones[7][claveLosSosas[4]]);

            var colObjExcursiones = obtenerObjExcursiones();
            colObjExcursiones.push(objUnExcursion);
            guardarInfo(colObjExcursiones);
        }
    }


}

function desplegar(parametro) {
    if (parametro != 'hidden') {
        document.getElementById('modalCarrito').style.visibility = parametro;
        mostrarExcursiones();
    } else {
        document.getElementById('modalCarrito').style.visibility = parametro;
    }

}


function mostrarExcursiones() {
    var colExcur = obtenerObjExcursiones();
    var divCarrito = document.getElementById('modalContenido');

    // Limpiar el contenido anterior
    divCarrito.innerHTML = '';

    // Calcular el total
    const total = colExcur.reduce((acc, el) => acc + el.precio * el.cant, 0);

    // Crear un elemento para mostrar el total
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: $${total}`;

    // Crear un botón para pagar
    const buttonPagar = document.createElement("button");
    buttonPagar.id = "pagar";
    buttonPagar.className = "pagar";
    buttonPagar.textContent = "Pagar";
    buttonPagar.onclick = verificarSesionUsuario;

    // Agregar el botón al elemento totalBuying
    totalBuying.appendChild(buttonPagar);

    for (var i = 0; i < colExcur.length; i++) {
        var product = colExcur[i];

        // Crear el contenido HTML usando template strings
        var carritoContent = `
            <div class="modal-content">
                <img src="${product.img}" alt="${product.nombre}">
                <h3>${product.nombre}</h3>
                <p>$${product.precio}</p>
                <span class="restar" onclick="restarProducto(${product.id})"> - </span>
                <p>${product.cant}</p>
                <span class="sumar" onclick="sumarProducto(${product.id})"> + </span>
                <p>Total: $${product.cant * product.precio}</p>
                <span class="delete-product" onclick="eliminarProducto(${product.id})"> ❌ </span>
            </div>
        `;

        // Añadir el contenido HTML al divCarrito
        divCarrito.innerHTML += carritoContent;
    }

    // Agregar el elemento totalBuying al divCarrito
    divCarrito.appendChild(totalBuying);
}



function restarProducto(id) {
    // Obtener la colección de excursiones del localStorage
    let colObjExcursiones = obtenerObjExcursiones();

    // Encontrar el producto correspondiente por su id
    let product = colObjExcursiones.find(product => product.id === id);

    // Verificar si el producto existe
    if (product) {
        // Si la cantidad es mayor que 1, simplemente restamos la cantidad
        if (product.cant > 1) {
            product.cant--; // Actualizamos la cantidad
            product.total = product.cant * product.precio; // Actualizamos el total
        } else {
            alert("La cantidad no puede ser menor a 1.");
        }

        // Guardar la colección actualizada en el localStorage
        guardarInfo(colObjExcursiones);

        // Actualizar la vista del carrito
        mostrarExcursiones();
    }
}


function sumarProducto(id) {
    // Obtener la colección de excursiones del localStorage
    let colObjExcursiones = obtenerObjExcursiones();

    // Encontrar el producto correspondiente por su id
    let product = colObjExcursiones.find(product => product.id === id);

    // Verificar si el producto existe
    if (product) {
        // Incrementar la cantidad
        product.cant++; // Actualizamos la cantidad
        product.total = product.cant * product.precio; // Actualizamos el total

        // Guardar la colección actualizada en el localStorage
        guardarInfo(colObjExcursiones);

        // Actualizar la vista del carrito
        mostrarExcursiones();
    }
}

function eliminarProducto(id) {
    // Obtener la colección de excursiones del localStorage
    let colObjExcursiones = obtenerObjExcursiones();

    // Encontrar el índice del primer producto con el id proporcionado
    const indiceAEliminar = colObjExcursiones.findIndex(product => product.id === id);

    // Verificar si el producto existe
    if (indiceAEliminar !== -1) {
        // Eliminar solo el primer elemento con el id especificado
        colObjExcursiones.splice(indiceAEliminar, 1);

        // Guardar la colección actualizada en el localStorage
        guardarInfo(colObjExcursiones);

        // Actualizar la vista del carrito
        mostrarExcursiones();
    } else {
        alert("El elemento con el id especificado no existe en el array.");
    }
}




function obtenerUsuarioInciarSesion(){
    const usuariosInciarSesion = localStorage.getItem('usuarioInciarSession'); // obtiene el valor de la clave 'usuarioInciarSession'
    return usuariosInciarSesion ? JSON.parse(usuariosInciarSesion) : []; // si no tiene valor la variable 'usuariosInciarSesion', es una array vacio, sino continua el array con sus valores guardados
}



function verificarSesionUsuario(){
    var boton = document.getElementById('pagar');

    var usurioIncioSesion = obtenerUsuarioInciarSesion();

    if(usurioIncioSesion.length == []){
        alert("Debe Iniciar Sesion Para Poder Realizar El Pago");
    } else{
        alert("El Pago Fue Realizado Correctamente");
    }
    
}

function obtenerUsuarioInciarSesion(){
    const usuariosInciarSesion = localStorage.getItem('usuarioInciarSession'); // obtiene el valor de la clave 'usuarioInciarSession'
    return usuariosInciarSesion ? JSON.parse(usuariosInciarSesion) : []; // si no tiene valor la variable 'usuariosInciarSesion', es una array vacio, sino continua el array con sus guardados
}

function cerrarSesion(){
    var button = document.getElementById('cerrarSession');
    var colSesion = obtenerUsuarioInciarSesion();
    if(colSesion == []){ 
        button.style.visibility = "hidden";
    } else {
        button.style.visibility = "visible";
        alert('Hasta pronto!') // mensaje de adios (salida)
        localStorage.removeItem('usuarioInciarSession') // elimino el array de usuarioIniciarSesion del local Storage
        // esto quiere decir que tengo que iniciar sesion para ir a esa pagina
        window.location.href = '6.login.html'// me autodirige a la pagina de iniciar sesion
    }
    
}
