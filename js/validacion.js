
function validarCamposObligatorios() {
    var bandera = false
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value.trim() == "") {
            bandera = true
            elemento.style.border = "1px solid red"
        }
    }
    if (bandera) {
        alert("Llenar todos los campos")
        return false
    } else {
        return true
    }
}
function validarNumeros(event, label, element) {
    let span = document.getElementById(label)
    let letra = event.which || event.keyCode;

    if (letra >= 96 && letra <= 105 || letra == 8) {
        span.style.display = "none"
        if (element.id == 'cedula') {
            validarCedula(label, element)
        }
    } else {
        span.innerHTML = "Introdusca Numeros"
        span.style.display = "block"
        let text = element.value
        text = text.substring(0, text.length - 1)
        element.value = text
    }
}

function validarCedula(label, element) {
    let span = document.getElementById(label)
    if (element.value.length > 10) {
        span.innerHTML = "Cedula incorrecta"
        span.style.display = "block"
    } else {
        span.style.display = "none"
    }
}

function validarLetras(event, label, element) {
    let span = document.getElementById(label)
    let letra = event.which || event.keyCode;
    if (letra >= 65 && letra <= 90 || letra == 32 || letra == 8) {
        span.style.display = "none"
        validarNombres(label, element)
    } else {
        span.innerHTML = "Introdusca letras"
        span.style.display = "block"
        let text = element.value
        text = text.substring(0, text.length - 1)
        element.value = text
    }
}

function validarNombres(label, element) {
    let span = document.getElementById(label)
    let text = element.value
    if (text.split(" ").length > 2) {
        if (element.id == 'nombre') {
            span.innerHTML = "Nombres incorrectos"
        } else {
            span.innerHTML = "Apellidos incorrectos"
        }
        span.style.display = "block"
    } else {
        span.style.display = "none"
    }
}
function validarCorreo(label, element) {
    let email = element.value
    let span = document.getElementById(label)
    //console.log(email.search("@ups.edu.ec")) || email.search("@est.ups.edu.ec") < 0
    console.log(email.search("@est.ups.edu.ec"))
    if ((email.search("@ups.edu.ec") > 0) || (email.search("@est.ups.edu.ec") > 0)) {
        span.style.display = "none"
    } else {
        span.innerHTML = "Correo electronico incorrecto"
        span.style.display = "block"

    }
}

function validarPass(label) {
    let span = document.getElementById(label)
    let pass1 = document.getElementById('pass').value
    let pass2 = document.getElementById('cpass').value
    if (pass1 != pass2) {
        span.innerHTML = "Las contraseñas no coinciden"
        span.style.display = "block"
    } else {
        span.style.display = "none"
    }
}