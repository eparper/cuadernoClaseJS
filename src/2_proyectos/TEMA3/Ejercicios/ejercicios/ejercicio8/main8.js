/**********************EJERCICIO 2************************ */
let solucionEjer8 = document.getElementById("solucionEjer8");
let errores = document.getElementById("errores");

let valorAlFinal = document.getElementById("valorAlFinal");
let valor = document.getElementById("valor");

let valorAlPrincipio = document.getElementById("valorAlPrincipio");
let borrarPrimero = document.getElementById("borrarPrimero");
let posicionDada = document.getElementById("posicionDada");
let insertarEnPosicion = document.getElementById("insertarEnPosicion");
let posicionDada2 = document.getElementById("posicionDada2");

let ordenarAscendente = document.getElementById("ordenarAscendente");
let ordenarDescendente = document.getElementById("ordenarDescendente");

let arrayEjer = [];

valorAlFinal.onclick = function () {

    arrayEjer.push(valor.value);

    mostrarArray(arrayEjer, solucionEjer8);
}

valorAlPrincipio.onclick = function () {

    arrayEjer.unshift(valor.value);

    mostrarArray(arrayEjer, solucionEjer8);
}

borrarPrimero.onclick = function () {

    arrayEjer.shift(valor.value);

    mostrarArray(arrayEjer, solucionEjer8);
}

borrarUltimo.onclick = function () {

    arrayEjer.pop(valor.value);

    mostrarArray(arrayEjer, solucionEjer8);
}

insertarEnPosicion.onclick = function () {

    arrayEjer.splice(posicionDada.value, 0, valor.value);

    mostrarArray(arrayEjer, solucionEjer8);
}

eliminarEnPosicion.onclick = function () {

    arrayEjer.splice(posicionDada2.value, 1);

    mostrarArray(arrayEjer, solucionEjer8);
}

ordenarAscendente.onclick = function () {

    arrayEjer.sort((a, b) => a - b);

    mostrarArray(arrayEjer, solucionEjer8);
}

ordenarDescendente.onclick = function () {

    arrayEjer.sort((a, b) => b - a);

    mostrarArray(arrayEjer, solucionEjer8);
}

function mostrarArray(arr, elementoHTML) {
    elementoHTML.innerHTML = "";

    for (let i of arr) {
        elementoHTML.innerHTML += i + " ";
    }
}