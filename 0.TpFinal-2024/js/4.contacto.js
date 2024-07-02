function validar(){
    mostrarEspaciosBlancos(); 
    validarEmail();
    validarMensaje();
    validarEnvio();
}

function mostrarEspaciosBlancos() {
    
    var colInput = document.getElementsByTagName('input');

    // Crea un array para almacenar los inputs de tipo "text"
    var colTextInputs = [];

    // Itera a travas de todos los elementos input
    for (var i = 0; i < colInput.length; i++) {
        // Verifica si el tipo de input es "text"
        if (colInput[i].type === 'text') {
            // Si es de tipo "text", lo agrega al array de colTextInputs
            colTextInputs.push(colInput[i]);
        }
    }

     // verifica los input del arrelgo colTextInputs su value
    for (var o = 0; o < colTextInputs.length; o++) {        

        if (colTextInputs[o].value === '') {

            colTextInputs[o].style.border = "2px solid red"; // si esta vacio el texto en el input, le asigna un fondo rojo

        } else {
            
            // Si no esta vacio, restablece el color de fondo a su estilo original
            colTextInputs[o].style.border = "2px solid green";
            
            validarSoloLetras(); // funcion que permite verificar si las palabras son solamente letras y no numeros o ambas a la vez
            
        }

    }
}

// funcion que permite verificar si las palabras son solamente letras y no numeros o ambas a la vez
function validarSoloLetras() {

    // Obtiene el elemento su ID
    var stringNombre = document.getElementById("nombre");
    var stringApellido = document.getElementById("apellido");

    //valor de elementos
    var valorNombre = stringNombre.value;
    var valorApellido = stringApellido.value;

    /* permite espacios, pero solo un espacio entre palabras, evitando así múltiples espacios seguidos */
    var formatoLetra = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    
    if(formatoLetra.test(valorNombre)){ // verifica si la expresion concuerda con formatoLetra para nombre
        stringNombre.style.border = "2px solid green";
    } else {
        stringNombre.style.border = "2px solid red";
    }

    if(formatoLetra.test(valorApellido)){ // verifica si la expresion concuerda con formatoLetra para apellido
        stringApellido.style.border = "2px solid green"; 
    } else {
        stringApellido.style.border = "2px solid red";
    }
}

// funcion que verifica si el mail cumple la estructura de un mail
function validarEmail() {
    // Obtiene el elemento por su ID
    var mail = document.getElementById("email");
    var mailValor = mail.value; 

    /* estructura de un mail alfanumerico que al finalizar despues del punto permite escribir entre 2 a 6 letras */
    var formatoMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (formatoMail.test(mailValor)) { // verifica si la estructura es la correspondiente
        mail.style.border = "2px solid green";
    } else {
        mail.style.border = "2px solid red";
    }

}

function validarMensaje(){
    var msj = document.getElementById('mensaje');
    
    if(msj.value != ""){
        msj.style.border = "2px solid green";
    } else {
        msj.style.border = "2px solid red";
    }

}

function validarEnvio(){
    
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var numero = document.getElementById('numero');
    var mensaje = document.getElementById('mensaje');
    
    var col = [nombre, apellido, email, numero, mensaje];
    var acum = 0;

    for (var i = 0; i < col.length; i++){
        if(col[i].style.border == "2px solid green"){
            acum++;
        }
    }

    if(acum == 5){
        alert("Correo Enviado! Pronto Nos Contactaremos con Usted");
    } else{
        alert("Complete el Espacio Rojo");
    }
}