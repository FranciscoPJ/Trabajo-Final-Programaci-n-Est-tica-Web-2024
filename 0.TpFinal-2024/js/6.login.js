function obtenerUsuarioInciarSesion(){
    const usuariosInciarSesion = localStorage.getItem('usuarioInciarSession'); // obtiene el valor de la clave 'usuarioInciarSession'
    return usuariosInciarSesion ? JSON.parse(usuariosInciarSesion) : []; // si no tiene valor la variable 'usuariosInciarSesion', es una array vacio, sino continua el array con sus valores guardados
}

function guardarInfoUsuarioInciarSesion(objUserIniciarSesion){
    localStorage.setItem('usuarioInciarSession', JSON.stringify(objUserIniciarSesion)); // guardo el nuevo valor en el array 'usuarioInciarSession' del local storage
}

/**
 * Función para obtener una colección de usuarios desde localStorage
 * @returns 
 */
function obtenerUsuarios() {
    const usuarios = localStorage.getItem('usuarios'); // obtiene el valor de la clave 'usuarios'
    return usuarios ? JSON.parse(usuarios) : []; // si no tiene valor la variable 'usuarios', es una array vacio, sino continua el array con sus valores guardados
}

function validarSesion() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    let colUser = obtenerUsuarios(); // array de usuarios registrados
    var encontrado = false;
    var a = 0;

    // recorrido del arrat usuarios registrados
    while(a < colUser.length && !encontrado){ // recorro el array de objetos
        let claves = Object.keys(colUser[a]);// obtengo la clave
            if(colUser[a][claves[2]] == email.value){ //comparo si el mail es igual
                if(colUser[a][claves[3]] == password.value){ //comparo si el password es igual
                    encontrado = true;// la verificacion esta bien
                } 
            }
        a++;
    }


    if(encontrado){ 
        // le asigno los values de cada input a un objeto usuario iniciar sesion
        let objUsuarioInciarSesion = {"email": email.value, "password": password.value};
        
        let colUsuarioInciarSesion = obtenerUsuarioInciarSesion();// array de un objeto de usuario de iniciar sesion
        colUsuarioInciarSesion.push(objUsuarioInciarSesion); // le agrego un objeto al array
        guardarInfoUsuarioInciarSesion(colUsuarioInciarSesion); // guardo el nuevo array 'usuarios' al local storage       
        alert("Bievenido");
        email.value = '';// seteo el valor del input del form en vacio
        password.value = '';// seteo el valor del input del form en vacio
        window.location.href = '2.1.Excursiones.html'; // me dirige a la otra pagina, una vez todo correcto
    } else {
        alert("Email y/o Password Incorrecto");
    }
    
}

 // Iterar sobre cada objeto en el array
    /*for (let i = 0; i < colUser.length; i++) {

        let claves = Object.keys(colUser[i]);
        for (let j = 0; j < claves.length; j++) {
            let clave = claves[j];
            alert(colUser[i][clave]);
        }

    }*/// fin 1er for

    function inicarSesion(){
        var email = document.getElementById('email');
        var password = document.getElementById('password');
        
        let colSesionInciada = obtenerUsuarioInciarSesion(); // array que tiene 1 solo objeto, no puede tener mas ya que es una cuenta o un array vacio
        
        if(colSesionInciada.length == 0){
            
            if(email.value != "" && password.value != ""){
                
                validarSesion();                
                
            } else {
                email.style.border = "1px solid red";
            password.style.border = "1px solid red";
            alert("Se Debe Completar Los Espacios En Blancos");
            }
            
        } else {
            email.style.border = "1px solid red";
            password.style.border = "1px solid red";
            alert("Ya Iniciaste Sesion!\nSi Quiere Iniciar Sesion Con Otra Cuenta,\nDebe Salir De La Cuenta Inciada");            
        }
        
    }