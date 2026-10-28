/**********************EJERCICIO 2************************ */
let solucionEjer4 = document.getElementById("solucionEjer4");


let fechaNac = new Date("2003-02-12");
let fechaActual = new Date();

//los milisegundos que tiene un día
const milisegundosPorDia = 1000 * 60 * 60 * 24;

let milisegundosEntreFechas = fechaActual - fechaNac;

//ahora los milisegundos los pasamos a días: sería dividiendo por cuántos milisegundos tiene un día:
let dias = milisegundosEntreFechas / milisegundosPorDia;

//le quitamos los decimales porque tienen distinta hora los objetos Date que hemos creado
let diasEnteros = Math.floor(dias);

solucionEjer4.innerHTML = "Llevo " + diasEnteros + " días vividos.";


