/**********************EJERCICIO 1************************ */
let solucionEjer1 = document.getElementById("solucionEjer1");
let aniadirPersona = document.getElementById("aniadirPersona");
let estudiante = document.getElementById("estudiante");

let objPersona = {nombre: "María", edad: 19, genero: "F"};

let arrayPersonas = [];


/************************************************************ */

solucionEjer1.innerHTML = "Personas: <br><br>" + obtDetalles(objPersona) + "<br>";

aniadirPersona.onclick = function () {

    try {

        
        
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