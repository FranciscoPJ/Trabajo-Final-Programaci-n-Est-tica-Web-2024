

function validar() {

    // funciones que hacen validaciones
    agregarOpcion();
    mostrarEspaciosBlancos(); 
    mostrarNumeroEnteroPositivos();
    validarFecha();
    validarEmail();

}

// funcion que agrega un option mas en el select de obras sociales
function agregarOpcion() {
    
    // Obtiene el elemento por su ID
    var selectObrasSociales = document.getElementById('obras_sociales');
    
    var opciones = selectObrasSociales.options; // accede a la coleccion de todos los elementos option
    
    var existeOpcion = false; 

    // Verifica si la opcion 'obra4' ya existe
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].value === "obra4") {
        existeOpcion = true;
        break;
        }
    }

    // Si la opcion no existe, la agrega
    if (!existeOpcion) {
        var nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = "obra4";
        nuevaOpcion.text = "GALENO";
        selectObrasSociales.appendChild(nuevaOpcion);
    }
}

// Llamar a la funcion agregarOpcion cuando se cargue la pagina
document.addEventListener('DOMContentLoaded', function() {
    agregarOpcion();
});

// funcion que verifica espacios nulos
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

            colTextInputs[o].style.backgroundColor = "red"; // si esta vacio el texto en el input, le asigna un fondo rojo

        } else {
            
            // Si no esta vacio, restablece el color de fondo a su estilo original
            colTextInputs[o].style.backgroundColor = "";
            
            validarSoloLetras(); // funcion que permite verificar si las palabras son solamente letras y no numeros o ambas a la vez
            
        }

    }


    // Obtiene el elemento select por su ID
    var select = document.getElementById('obras_sociales');

    // Verifica si el valor seleccionado esta vacio
    if (select.value === '') {

        // Si esta vacio, cambia el color de fondo a rojo
        select.style.backgroundColor = 'red';

    } else {

        // Si no esta vacio, restablece el color de fondo a su estilo original
        select.style.backgroundColor = 'green';
        
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
        stringNombre.style.backgroundColor = "green";
    } else {
        stringNombre.style.backgroundColor = "red";
    }

    if(formatoLetra.test(valorApellido)){ // verifica si la expresion concuerda con formatoLetra para apellido
        stringApellido.style.backgroundColor = "green"; 
    } else {
        stringApellido.style.backgroundColor = "red";
    }
}

// funcion que verifica si son numeros positivos
function mostrarNumeroEnteroPositivos() {

    // Obtiene el elemento por su ID
    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes");
    var anio = document.getElementById("anio");

    // convierte el string en un numero entero
    var nroDia = parseInt(dia.value);
    var nroMes = parseInt(mes.value);
    var nroAnio = parseInt(anio.value);

    // verifica si el numero es positivo, negativo o cero. si no es positivo, pinta el background en rojo
    if (Math.sign(nroDia) != 1 || Math.sign(nroMes) != 1 || Math.sign(nroAnio) != 1) {
        
        dia.style.backgroundColor = "red";
        mes.style.backgroundColor = "red";
        anio.style.backgroundColor = "red";
        
    }

}

// funcion que verifica si la fecha y le asigna un fondo verde caso verdadero y un fondo rojo caso contrario
function validarFecha() {

    // Obtiene el elemento por su ID
    var elementoDia = document.getElementById("dia");
    var elementoMes = document.getElementById("mes");
    var elementoAnio = document.getElementById("anio");

    //valor de elementos
    var dia = elementoDia.value;
    var mes = elementoMes.value;
    var anio = elementoAnio.value;

    // formato solamente numerico
    var formaCorrectaNumero = /^[0-9]+$/;

    // utiliza la varibale formaCorrectaNumero para que solo sea un numero y no alfanumerico ej: "2aads" sino el valor: 2 solamente
    if(formaCorrectaNumero.test(dia) && formaCorrectaNumero.test(mes) && formaCorrectaNumero.test(anio)){

        if (esFechaValida(dia, mes, anio)) { // retorna true si la fecha es valida
        
            // le asigna un fondo de color verde caso de una fecha valida
            elementoDia.style.backgroundColor = "green";
            elementoMes.style.backgroundColor = "green";
            elementoAnio.style.backgroundColor = "green";
    
        } else {
        
            // le asigna un fondo de color rojo caso de una fecha invalida
            elementoDia.style.backgroundColor = "red";
            elementoMes.style.backgroundColor = "red";
            elementoAnio.style.backgroundColor = "red";
        }    

    } else {
        
        // le asigna un fondo de color rojo caso de una fecha invalida
        elementoDia.style.backgroundColor = "red";
        elementoMes.style.backgroundColor = "red";
        elementoAnio.style.backgroundColor = "red";
    
    }

}

// funcion que verifica si la fecha es valida, retorna true. Falso caso contrario
function esFechaValida(dia, mes, anio) {

    // incializacion de variables
    var diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // Array con la cantidad de dias de cada mes (para anios no bisiestos) 
    var fechaIngresada = new Date(anio, mes - 1, dia); // Crear un objeto Date con los valores introducidos
    var fechaActual = new Date(); // Obtener la fecha actual

    // Convertir a numeros enteros
    dia = parseInt(dia, 10);
    mes = parseInt(mes, 10);
    anio = parseInt(anio, 10);

    // Verificar que los valores son numeros validos
    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        return false;
    }

    // Verificar que el mes este en el rango de 1 a 12
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Ajustar febrero para los anios bisiestos
    if (esAnioBisiesto(anio)) {
        diasPorMes[1] = 29;
    }

    // Verificar que el da este en el rango valido para el mes especifico
    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        return false;
    }

    // Verificar que la fecha ingresada no sea futura
    if (fechaIngresada > fechaActual) {
        return false;
    }

    // Si todas las verificaciones pasan, la fecha es valida
    return true;
}

function esAnioBisiesto(anio) {
    // Un anio es bisiesto si es divisible por 4, pero no por 100, a menos que tambien sea divisible por 400
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// funcion que verifica si el mail cumple la estructura de un mail
function validarEmail() {
    // Obtiene el elemento por su ID
    var mail = document.getElementById("email");
    var mailValor = mail.value; 

    /* estructura de un mail alfanumerico que al finalizar despues del punto permite escribir entre 2 a 6 letras */
    var formatoMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (formatoMail.test(mailValor)) { // verifica si la estructura es la correspondiente
        mail.style.backgroundColor = "green";
    } else {
        mail.style.backgroundColor = "red";
    }

}


