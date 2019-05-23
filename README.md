# validacion_de_formulario
Programacion Hipermedial
## Validación de formulario 
•	Para empezar, creamos el formulario en HTML con una estructura básica de un formulario 
```html
<section>
        <div class="formulario">
            <h2>Registro</h2>
            <form method="POST" onsubmit="return validarCamposObligatorios()">
                <span class="error" id="errorCedula">ERROR</span>
                <label for="cedula">Cedula</label>
                <input type="text" name="cedula" id="cedula" onkeyup="validarNumeros(event,'errorCedula',this)">
                <span class="error" id="errorNombre">ERROR</span>
                <label for="nombre">Nombres</label>
                <input type="text" name="nombre" id="nombre" onkeyup="validarLetras(event,'errorNombre',this)">
                <span class="error" id="errorApellico">ERROR</span>
                <label for="apellido">Apellidos</label>
                <input type="text" name="apellido" id="apellido" onkeyup="validarLetras(event,'errorApellico',this)">
                <span class="error" id="errorDireccion">ERROR</span>
                <label for="direccion">Direccion</label>
                <input type="text" name="direccion" id="direccion">
                <span class="error" id="errorTelefono">ERROR</span>
                <label for="telefono">Telefono</label>
                <input type="text" name="telefono" id="telefono" onkeyup="validarNumeros(event,'errorTelefono',this)">
                <span class="error" id="errorFechaNac">ERROR</span>
                <label for="fechaNac">Fecha de nacimiento</label>
                <input type="text" name="fechaNac" id="fechaNac" onkeyup="validarFecha('errorFechaNac',this)">
                <span class="error" id="errorEmail">ERROR</span>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" onkeyup="validarCorreo('errorEmail',this)">
                <span class="error" id="errorPass">ERROR</span>
                <label for="pass">Contraseña</label>
                <input type="password" name="pass" id="pass">
                <span class="error" id="errorCPass">ERROR</span>
                <label for="cpass">Confirmar Contraseña</label>
                <input type="password" name="cpass" id="cpass" onkeyup="validarPass('errorCPass')">

                <input type="submit" value="Crear">
            </form>
        </div>
    </section>
```

•	Una ves creada la estructura básica con HTML se procede a dar estilos con CSS para darle una mejor apariencia al formulario.
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #E53935;
}


body header{
    background: #FBF7F4;
    display: flex;
    justify-content: space-around;
    padding: 15px;
    width: 100%;
}
header .tittle{
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 4px;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 1em;
}

body section .formulario{
    text-align: center;
    margin: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    background-color: #FBF7F4;
    border-radius: 20px;
    width: 35em;
    padding: 15px 15px;
}
.formulario form{
    display: grid;
    grid-template-columns: 40% 1fr;
    align-items: center;
    
}
.formulario form .error{
    display: block;
    grid-column: 1/3;
    margin-top: 10px;
    color: #E53935;
    display: none;
}
.formulario>h2{
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 4px;
    text-align: center;
}
.formulario form label{
    float: left;
    margin-right: 5px;
    text-align: right;

}
.formulario form input{
    padding: 10px 15px;
    margin-top: 5px;
    border: none;
    border-bottom: 1px solid #e53935;
    background-color: #FBF7F4;
    
}
.formulario form input[type=date]{
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
}
.formulario form input[type=submit]{
    background-color: #e53935;
    width: 15em;
    border-radius: 20px;
    margin-top: 30px;
    padding: 15px 0;
    text-transform: uppercase;
    cursor: pointer;
    color: #FBF7F4;
    font-size: 1em;
    grid-column: 2/3;
}
.formulario form input:hover{
    border-bottom: 1px solid #e35d5b;
}
.formulario form input[type=submit]:hover{
    background-color: #e35d5b;
}
.formulario form input[type=submit]:active{
    background-color: #DB4227;
}

```
 
•	Una vez realizado los estilos con CSS se puede visualizar en el navegador una mejor apariencia del formulario.
 
•	Para realizar la validación de los campos se usa JavaScript cabe recalcar que todas las validaciones se realizan en tiempo real de cada campo donde indica al usuario lo que está realizando mal.
•	Primero realizaremos el método para evitar mandar la información al servidor este método consta de la validación de todos los campos, así como detectar que los campos no estén vacíos.
```javascript
function validarCamposObligatorios() {
    var bandera = false
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value.trim() == "") {
            bandera = true
            elemento.style.border = "1px solid red"
        }
    }
    console.log("cedula: " + cedula)
    console.log("nombre: " + nombre)
    console.log("apellido: " + apellido)
    console.log("fecha: " + fecha)
    console.log("email: " + correo)
    console.log("pass: " + pass)
    if (bandera) {
        alert("Llenar todos los campos")
        return false
    } else if (cedula == false || nombre == false || apellido == false || fecha == false || correo == false || pass == false) {
        alert("Corriga los campos")
        return false
    }
    else {
        return true
    }
}
```  
En el formulario se agrega la línea onsubmit
 
Para verificar mandar la información correcta se tiene que retornar true desde el archivo de JavaScript.
•	Realizamos la validación de la cedula que se agregue solo numero en este caso de agregar una letra se le indicara un mensaje de error y se borrara la letra que ha ingresado, ara lograr esto se usa el código ASCII de la tecla presionada para verificar el rango de códigos numéricos u de letras.
```javascript
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
``` 
Como la función validarNumeros() también es utilizado para el teléfono se realiza un condicional de si es la cedula o si es el teléfono el que esta entrando a la función.
Previamente la función validarCedula() validara la cedula con la longitud de 10 caracteres y solo numérico.
•	Para la validación de las letras se realiza el mismo proceso que de los números capturando en código de la tecla presionada y verificando el rango. En este caso para validar el nombre y el apellido se usa también la función Split() de JavaScript para realizar la separación de las palabras introducidas en los campos de nombres y apellidos y posteriormente a se procede a lanzar un error si hay mas de 2 palabras en los campos.
```javascript
function validarLetras(event, label, element) {
    let span = document.getElementById(label)
    let letra = event.which || event.keyCode;
    console.log(letra)
    if (letra >= 65 && letra <= 90 || letra == 32 || letra == 8 || letra == 16) {
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
            nombre = false
        } else {
            span.innerHTML = "Apellidos incorrectos"
            apellido = false
        }
        span.style.display = "block"
    } else {
        nombre = true
        apellido = true
        span.style.display = "none"
    }
}
``` 
Se agregan algunas excepciones las teclas de espacio, shift, y de borrar para evitar que al presionar se suprima caracteres del campo como los campos de nombres y apellidos comparten las mismas características se realiza 2 métodos para los dos campos.
•	Para validar el campo de la fecha de nacimiento se usa la función date que nos devuelve si una fecha es correcta o no para esto se tiene que dividir por días mes y año para pasarle por parámetro a la función y la condición isNaN nos devolverá true si la fecha es nula y false si no la es.
```javascript
function validarFecha(label, element) {
    let span = document.getElementById(label)
    var string = String(element.value);
    arrayFecha = string.split("/");
    console.log(arrayFecha)
    var valor = new Date(arrayFecha[2], arrayFecha[1], arrayFecha[0]);
    console.log(isNaN(valor))
    if (isNaN(valor)) {
        fecha = false
        span.innerHTML = "Fecha incorrecta"
        span.style.display = "block"
    } else {
        fecha = true
        span.style.display = "none"
    }
}
```

•	Validación del campo email para esto se usa la función search de JavaScript que busca una palabra en un arreglo de strings para este caso agregamos 2 opciones que sea @ups.edu.ec o que sea @est.ups.edu.ec en caso de no existir dicha palabra se lanzara un error al usuario.
```javascript
function validarCorreo(label, element) {
    let email = element.value
    let span = document.getElementById(label)
    console.log(email.search("@est.ups.edu.ec"))
    if ((email.search("@ups.edu.ec") > 0) || (email.search("@est.ups.edu.ec") > 0)) {
        span.style.display = "none"
        correo = true
    } else {
        span.innerHTML = "Correo electronico incorrecto"
        span.style.display = "block"
        correo = false
    }
}
```
•	La validación de las contraseñas solo se realiza comparando los 2 campos.
```javascript
function validarPass(label) {
    let span = document.getElementById(label)
    let pass1 = document.getElementById('pass').value
    let pass2 = document.getElementById('cpass').value
    if (pass1 != pass2) {
        span.innerHTML = "Las contraseñas no coinciden"
        span.style.display = "block"
        pass = false
    } else {
        span.style.display = "none"
        pass = true
    }
}
``` 

•	El repositorio se encuentra en el siguiente enlace:
https://github.com/MClaudio/validacion_de_formulario 
•	Usuario MClaudio
