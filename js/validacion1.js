//falta realizar todo el programa de validación en javascript
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
    if (nombre === "" || apellido === "" || fechaNacimiento ==="" || edad==="" || sexo === "" || tipoDocumento === "" || numeroDocumento === "" || email === "" || comentario === "") {
        alert("los datos no están completos");
        document.getElementById("divConfirmacion").style.visibility = "hidden";//el mensajae de confirmación está oculto
        return;
    } else {
        // acá van las funciones de verificación por ahora sólo muestramos los datos ingresados
        alert("Datos recibidos");
        alert(`${nombre.toUpperCase()} ${apellido.toUpperCase()}`);
        alert(fechaNacimiento);
        alert(edad);
        alert(sexo.toUpperCase());
        alert(tipoDocumento.toUpperCase());
        alert(numeroDocumento);
        alert(email);
        alert(comentario);
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

window.onload = function(){
    // cuando carga la venetana el mensaje de confirmación se carga oculto.
    document.getElementById("divConfirmacion").style.visibility = "hidden";
    
}