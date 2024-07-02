

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
        nuevaOpcion.value = "GALENO";
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
    var stringPais = document.getElementById("pais");
    var stringProvincia = document.getElementById("provincia");
    var stringCiudad = document.getElementById("ciudad");
    // a parte---------
    var stringPassword = document.getElementById("password");
    var stringTelefono = document.getElementById("telefono");
    var stringCodigoPostal = document.getElementById("codigoPostal");

    //valor de elementos
    var valorNombre = stringNombre.value;
    var valorApellido = stringApellido.value;
    var valorPais = stringPais.value;
    var valorProvincia = stringProvincia.value;
    var valorCiudad = stringCiudad.value;
    // a parte---------
    var valorPassword = stringPassword.value;
    var valorTelefono = stringTelefono.value;
    var valorCodigoPostal = stringCodigoPostal.value;

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

    if(formatoLetra.test(valorPais)){ // verifica si la expresion concuerda con formatoLetra para pais
        stringPais.style.backgroundColor = "green"; 
    } else {
        stringPais.style.backgroundColor = "red";    
    }

    if(formatoLetra.test(valorProvincia)){ // verifica si la expresion concuerda con formatoLetra para provincia
        stringProvincia.style.backgroundColor = "green"; 
    } else {
        stringProvincia.style.backgroundColor = "red";    
    }

    if(formatoLetra.test(valorCiudad)){ // verifica si la expresion concuerda con formatoLetra para ciudad
        stringCiudad.style.backgroundColor = "green"; 
    } else {
        stringCiudad.style.backgroundColor = "red";    
    }

    //--------------------a parte

    if(!isNaN(valorPassword)){ // verifica si la expresion concuerda con formatoLetra para password
        if(valorPassword == ''){
            stringPassword.style.backgroundColor = "red"; 
        } else {
            stringPassword.style.backgroundColor = "green"; 
        }
    } else {
        stringPassword.style.backgroundColor = "red";    
    }

    if(!isNaN(valorTelefono)){ // verifica si la expresion concuerda con formatoLetra para telefono
        if(valorTelefono == ''){
            stringTelefono.style.backgroundColor = "red"; 
        } else {
            stringTelefono.style.backgroundColor = "green"; 
        }
    } else {
        stringTelefono.style.backgroundColor = "red";    
    }

    if(!isNaN(valorCodigoPostal)){ // verifica si la expresion concuerda con formatoLetra para codigo postal
        if(valorCodigoPostal == ''){
            stringCodigoPostal.style.backgroundColor = "red"; 
        } else {
            stringCodigoPostal.style.backgroundColor = "green"; 
        }        
    } else {
        stringCodigoPostal.style.backgroundColor = "red";    
    }
}

// funcion que verifica si son numeros positivos
function mostrarNumeroEnteroPositivos() {

    // Obtiene el elemento por su ID
    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes");
    var anio = document.getElementById("anio");    
    var telefono = document.getElementById("telefono");
    var codigoPostal = document.getElementById("codigoPostal");

    // convierte el string en un numero entero
    var nroDia = parseInt(dia.value);
    var nroMes = parseInt(mes.value);
    var nroAnio = parseInt(anio.value);
    var nroTelefono = parseInt(telefono.value);
    var nroCodPostal = parseInt(codigoPostal.value);

    // verifica si el numero es positivo, negativo o cero. si no es positivo, pinta el background en rojo
    if (Math.sign(nroDia) != 1 || Math.sign(nroMes) != 1 || Math.sign(nroAnio) != 1 || Math.sign(nroTelefono) != 1 || Math.sign(nroCodPostal) != 1) {
        
        dia.style.backgroundColor = "red";
        mes.style.backgroundColor = "red";
        anio.style.backgroundColor = "red";
        //nroTelefono.style.backgroundColor = "red";
        //nroCodPostal.style.backgroundColor = "red";
        
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























/*==================================LOCAL STORAGE==================================*/
/**
 * Función para obtener una colección de usuarios desde localStorage
 * @returns 
 */
function obtenerUsuarios() {
    const usuarios = localStorage.getItem('usuarios'); // obtiene el valor de la clave 'usuarios'
    return usuarios ? JSON.parse(usuarios) : []; // si no tiene valor la variable 'usuarios', es una array vacio, sino continua el array con sus valores guardados
}

// Función para guardar la colección de nombres en localStorage
function guardarInfo(objArrayUser) {
    localStorage.setItem('usuarios', JSON.stringify(objArrayUser)); // guardo el nuevo valor en el array 'usuarios' del local storage
}

function agregarInfo() {
    let nombre = document.getElementById('nombre'); // obtengo el elemento input de nombre
    let apellido = document.getElementById('apellido'); // obtengo el elemento input de apellido
    let email = document.getElementById('email'); // obtengo el elemento input de email
    let telefono = document.getElementById('telefono'); // obtengo el elemento input de telefono
    let obrasSociales = document.getElementById('obras_sociales'); // obtengo el elemento select de obras_sociales
    let pais = document.getElementById('pais'); // obtengo el elemento input de pais
    let provincia = document.getElementById('provincia'); // obtengo el elemento input de provincia
    let ciudad = document.getElementById('ciudad'); // obtengo el elemento input de ciudad
    let codigoPostal = document.getElementById('codigoPostal'); // obtengo el elemento input de codigoPostal

    let dia = document.getElementById('dia'); // obtengo el elemento input de dia
    let mes = document.getElementById('mes'); // obtengo el elemento input de mes
    let anio = document.getElementById('anio'); // obtengo el elemento input de anio
    // Obtengo los valores de los elementos input
    let diaValue = parseInt(dia.value);
    let mesValue = parseInt(mes.value) - 1; // Restar 1 porque los meses en JavaScript van de 0 a 11
    let anioValue = parseInt(anio.value);
    let fechaNacimiento = new Date(anioValue, mesValue, diaValue);

    let password = document.getElementById('password'); // obtengo el elemento input de password

    let objUsuario = { "nombre": nombre.value, "apellido": apellido.value, "email": email.value, "password": password.value, "telefono": telefono.value, "obraSocial": obrasSociales.value, "pais": pais.value, "provincia": provincia.value, "ciudad": ciudad.value, "codigoPostal": codigoPostal.value, "fechaNacimiento": fechaNacimiento}; // le asigno los values de cada input a un objeto usuario    

    if(nombre.value != "" && apellido.value != "" && email.value != "" && password.value != ""){
        var verificacion = verificarInformacion(email, password);
        if (verificacion) {
            var colUsuarios = obtenerUsuarios(); // array de objetos
            colUsuarios.push(objUsuario); // le agrego un objeto al array
            guardarInfo(colUsuarios); // guardo el nuevo array 'usuarios' al local storage
            nombre.value = ''; // seteo el valor del input del form en vacio
            apellido.value = ''; // seteo el valor del input del form en vacio
            email.value = ''; // seteo el valor del input del form en vacio
            password.value = ''; // seteo el valor del input del form en vacio            
            telefono.value = ''; // seteo el valor del input del form en vacio
            obrasSociales.value = ''; // seteo el valor del input del form en vacio
            pais.value = ''; // seteo el valor del input del form en vacio
            provincia.value = ''; // seteo el valor del input del form en vacio            
            ciudad.value = ''; // seteo el valor del input del form en vacio
            codigoPostal.value = ''; // seteo el valor del input del form en vacio
            dia.value = ''; // seteo el valor del input del form en vacio
            mes.value = ''; // seteo el valor del input del form en vacio
            anio.value = ''; // seteo el valor del input del form en vacio
            alert("Cuenta Registrada");
            window.location.href = '6.login.html'; // me dirige a la otra pagina, una vez todo correcto
        } 
    } else {
        alert("Complete Los Espacios En Blancos");// aviso de completar los espacios en blancos
    }
}

function verificarInformacion(email, password) {
    var colUsuariosDos = obtenerUsuarios();
    var respuesta = false;

    if (colUsuariosDos.length == 0) {
        respuesta = true;
        return respuesta;
    } else {
        var encontrado = false;
        var a = 0;        
        // recorrido del array usuarios registrados
        while (a < colUsuariosDos.length && !encontrado) { // recorro el array de objetos            
            let claves = Object.keys(colUsuariosDos[a]);// obtengo la clave
            if (colUsuariosDos[a][claves[2]] == email.value) { //comparo si el mail es igual
                encontrado = true; // la verificacion esta mal, yaque se repite
                alert("Email Repetido, Elija Otro Email");
                email.style.backgroundColor = "red";
                password.style.backgroundColor = "";
                respuesta = false;                
                return respuesta;
            }
            if (colUsuariosDos[a][claves[3]] == password.value) { //comparo si el password es igual
                encontrado = true;// la verificacion esta mal, yaque se repite
                alert("Password Repetida, Elija Otro Password");
                password.style.backgroundColor = "red";
                respuesta = false;                
                return respuesta;
            } 
            a++;            
        }
        respuesta = true;
    }
    return respuesta;
}
/*==================================LOCAL STORAGE==================================*/