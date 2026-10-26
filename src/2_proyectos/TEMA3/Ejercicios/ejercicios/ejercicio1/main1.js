/**********************EJERCICIO 1************************ */
let solucionEjer1 = document.getElementById("solucionEjer1");
let aniadirPersona = document.getElementById("aniadirPersona");
let estudiante = document.getElementById("estudiante");

//persona
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let generoF = document.getElementById("generoF");
let generoM = document.getElementById("generoM");


let objPersona = {nombre: "María", edad: 19, genero: "F"};

let arrayPersonas = [];


/************************************************************ */

solucionEjer1.innerHTML = "Personas: <br><br>" + obtDetalles(objPersona) + "<br>";

aniadirPersona.onclick = function () {

    try {

        solucionEjer1.innerHTML = "";
        

        //validar si está vacío //si pones un punto (.) también lo cogerá como vacío
        if (numero.value === "") {
            throw "El campo no puede estar vacío";
        }

        if (isNaN(numero.value)) {
            throw "Debes introducir un número";
        }

        num = Number(numero.value);

        if (!Number.isInteger(num)) {
            throw "El número debe ser entero";
        }

        resultados.innerHTML = parImpar(num);
        
    }
    catch (err) {

    }

}














/************************************************************ */

function obtDetalles(objeto) {

    let cadena = "";

    for (let propiedad in objeto) {
        cadena += propiedad + ": " + objeto[propiedad] + " <br>";
    }

    return cadena;
}

function rellenarSelect(nombrePersona) {

    
    let nuevaOpcion = document.createElement("option");
    nuevaOpcion.textContent = nombrePersona;

    estudiante.appendChild(nuevaOpcion);
}