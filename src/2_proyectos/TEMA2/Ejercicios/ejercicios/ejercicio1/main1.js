/**********************EJERCICIO 1************************ */
let solucionEjer1 = document.getElementById("solucionEjer1");

let alum1Ejer1 = ["Pepe", "Fernández Pérez", "1DAW", [10, 8.5, 9]];
let alum2Ejer1 = ["María", "Rodríguez Pérez", "1DAW", [5, 8.5, 7]];
let alum3Ejer1 = ["Roberto", "Ramírez Herrera", "2DAW", [7, 8.5, 7.5]];
let alum4Ejer1 = ["Iván", "Hernández Ruiz", "2DAW", [4, 8, 6]];
let alum5Ejer1 = ["Luis", "Ríos López", "1DAW", [7, 6, 6.5]];

let arrayBidimensional1 = [alum1Ejer1, alum2Ejer1, alum3Ejer1, alum4Ejer1, alum5Ejer1];

for (let i = 0; i < arrayBidimensional1.length; i++) {

    solucionEjer1.innerHTML += "Alumno " + (i+1) + ": <br>";

    for(const propiedad in arrayBidimensional1[i]) {
        solucionEjer1.innerHTML += propiedad + ": " + arrayBidimensional1[i][propiedad] + "<br>";
    }

    solucionEjer1.innerHTML += "<br>";
}

//crear un array bidimensional
//let a1 = new Array();
//a1.push(new Array());

//accedemos 
//a1[0][0] = "Pepe";