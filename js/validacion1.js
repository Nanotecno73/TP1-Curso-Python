
function verificarDatos() {
    // guardamos los datos en las variables
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let email = document.getElementById("email").value;
    let comentario = document.getElementById("comentario").value;

    //verificamos que todos los datos estén completos
    if (nombre === "" || apellido === "" || fechaNacimiento === "" || edad === "" || sexo === "" || tipoDocumento === "" || numeroDocumento === "" || email === "" || comentario === "") {
        alert("los datos no están completos");
        document.getElementById("divConfirmacion").style.visibility = "hidden";//el mensajae de confirmación está oculto
        return;
    } else {
        alert("Datos enviados");
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("fechaNacimiento").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("sexo").value = "";
        document.getElementById("tipoDocumento").value = "";
        document.getElementById("numeroDocumento").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comentario").value = "";
        document.getElementById("formulario").style.visibility = "hidden"; // escondemos el formulario
        document.getElementById("divConfirmacion").style.visibility = "visible";//mostramos el mensajae de confirmación
    }
}

function borrarFormulario() {
    //limpiamos todos lo elementos del formulario
    alert("Datos borrados")
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("tipoDocumento").value = "";
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comentario").value = "";
    //ocultamos el mensaje de confirmación.
    document.getElementById("divConfirmacion").style.visibility = "hidden";
}

window.onload = function () {
    // cuando carga la venetana el mensaje de confirmación se carga oculto.
    document.getElementById("divConfirmacion").style.visibility = "hidden";
}

function validarNombre (){
    let texto = document.getElementById("nombre").value;
    let etiqueta = document.getElementById("etiquetaNombre");
    // expresión regular para verificar si la cadena tiene números
    let reget = /\d/;
    if (reget.test(texto)){
        etiqueta.innerText = "Ingrese el texto sin números";
        etiqueta.style.color = "red";
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();    
    }else{
        etiqueta.innerText = "Nombre: *";
        etiqueta.style.color = "black";
    }   
} 

function validarApellido (){
    let texto = document.getElementById("apellido").value;
    let etiqueta = document.getElementById("etiquetaApellido");
    // expresión regular para verificar si la cadena tiene números
    let reget = /\d/;
    if (reget.test(texto)){
        etiqueta.innerText = "Ingrese el texto sin números";
        etiqueta.style.color = "red";
        document.getElementById("apellido").value = "";
        document.getElementById("apellido").focus();    
    }else{
        etiqueta.innerText = "Apellido: *";
        etiqueta.style.color = "black";
    }
}

function validarFechaNacimiento (){
    let fecha = document.getElementById("fechaNacimiento").value;
    let fechaNacimiento = new Date(fecha);
    let etiqueta = document.getElementById("etiquetaFechaNacimiento");
    // Obtener la fecha actual
    let fechaActual = new Date();

    // Comparar la fecha de nacimiento con la fecha actual
    if (fechaNacimiento > fechaActual) {
        //alert("");
        etiqueta.innerText = "La fecha de nacimiento no puede ser mayor que la fecha actual.";
        etiqueta.style.color = "red";
        document.getElementById("fechaNacimiento").value = "";
        document.getElementById("fechaNacimiento").focus();
    } else {
        etiqueta.innerText = "Fecha de Nacimiento";
        etiqueta.style.color = "black";
    }
}

function validarEdad(){
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let edad = parseInt(document.getElementById("edad").value);
    let etiqueta = document.getElementById("etiquetaEdad");
    // transformo la fecha nacimiento en un objeeto date
    let fechaNacimientoDate = new Date(fechaNacimiento);
    let fechaActual = new Date();

    // Calcular la edad a partir de la fecha de nacimiento
    let edadCalculada = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    // Verificar si la edad ingresada coincide con la edad calculada
    if (edad == edadCalculada) {
        //alert("La fecha de nacimiento y la edad coinciden.");
        etiqueta.innerText = "Edad";
        etiqueta.style.color = "black";

    } else {
        //alert("La fecha de nacimiento y la edad no coinciden.");
        etiqueta.innerText = "Edad Incorrecta.";
        etiqueta.style.color = "red";
    }
}

function validarNumeroDocumento (){
    let texto = document.getElementById("numeroDocumento").value;
    let etiqueta = document.getElementById("etiquetaNumeroDocumento");
    // expresión regular para verificar si la cadena 8 números
    let reget = /^\d{8}$/;
    if (reget.test(texto)){
        etiqueta.innerText = "DNI: *";
        etiqueta.style.color = "black";
    }else{
        etiqueta.innerText = "Ingrese sólo 8 digitos";
        etiqueta.style.color = "red";
        document.getElementById("numeroDocumento").value = "";
        document.getElementById("numeroDocumento").focus();    
        
    }
}

function validarEmail (){
    let texto = document.getElementById("email").value;
    let etiqueta = document.getElementById("etiquetaEmail");
    // expresión regular para verificar si la cadena 8 números
    let reget = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (reget.test(texto)){
        etiqueta.innerText = "Email: *";
        etiqueta.style.color = "black";
    }else{
        etiqueta.innerText = "Ingrese una dirección válida";
        etiqueta.style.color = "red";
        document.getElementById("email").value = "";
        document.getElementById("email").focus();    
    }
}

function validarComentario (){
    let texto = document.getElementById("comentario");
    let comentario = texto.value.trim()
    let etiqueta = document.getElementById("etiquetaComentario");
    // expresión regular para verificar si la cadena tiene números
    if (comentario == ""){
        etiqueta.innerText = "Ingrese un comentario";
        etiqueta.style.color = "red";
        document.getElementById("comentario").value = "";
        document.getElementById("comentario").focus();    
    }else{
        etiqueta.innerText = "Comentario: *";
        etiqueta.style.color = "black";
    }
}