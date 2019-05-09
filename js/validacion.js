function validarCamposObligatorios() {
    var bandera = false
    console.log("Hola")
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value.trim() == "") {
            bandera = true
            if (elemento.id = "cedula") {
                elemento.style.border = "1px solid red"
                document.getElementById("error").innerHTML = "La cedula es importante"
            }
        }
    }
    if (bandera) {
        alert("Llenar todos los campos")
        return false
    } else {
        return true
    }
}
function validarLetras(elemento) {
    let code = elemento.value.charCodeAt();
    if (code >= 65 && code <= 90) {
        alert("letra ")
        document.getElementById("errorletras").innerHTML = "Introdusca letras"
    }
}