/**********************EJERCICIO 2************************ */
let solucionEjer2 = document.getElementById("solucionEjer2");
let botonOK = document.getElementById("botonOK");

let longitud = document.getElementById("longitud");
let altura = document.getElementById("altura");

let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");

let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");



botonOK.onclick = function () {

    if (longitud.value === "" || altura.value === "" || x1.value === "" || x2.value === "" ||
        y1.value === "" || y2.value === "") {
        throw "Los campos son obligatorios";
    }

    if (isNaN(longitud.value) || isNaN(altura.value) || isNaN(x1.value) || isNaN(x2.value) ||
        isNaN(y1.value) || isNaN(y2.value)) {
        throw "Debes introducir los valores numéricos";
    }

    //por aquí voy----------------------

    num = Number(edad.value);

    if (!Number.isInteger(num)) {
        throw "La edad debe ser un número entero";
    }

    let punto1 = {x: x1.value, y: y1.value};
    let punto2 = {x: x2.value, y: y2.value};
}