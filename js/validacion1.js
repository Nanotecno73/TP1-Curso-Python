//falta realizar todo el programa de validación en javascript
function verificarDatos() {
    //alert("datos RECIBIDOS")
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let email = document.getElementById("email").value;
    let comentario = document.getElementById("comentario").value;

    if (nombre === "" || apellido === "" || fechaNacimiento ==="" || edad==="" || sexo === "" || tipoDocumento === "" || numeroDocumento === "" || email === "" || comentario === "") {
        alert("los datos no están completos");
        return;
    } else {
        alert("Datos recibidos");
        alert(`${nombre.toUpperCase()} ${apellido.toUpperCase()}`);
        alert(fechaNacimiento);
        alert(edad);
        alert(sexo.toUpperCase());
        alert(tipoDocumento.toUpperCase());
        alert(numeroDocumento);
        alert(email);
        alert(comentario);
    }
}

function borrarFormulario() {
    // document.write("datos DATOS BORRADOS")
    alert("Datos borrados")
}