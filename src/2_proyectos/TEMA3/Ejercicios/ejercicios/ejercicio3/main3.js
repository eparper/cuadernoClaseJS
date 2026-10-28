/**********************EJERCICIO 2************************ */
let solucionEjer3 = document.getElementById("solucionEjer3");


let piMetodo1 = (Math.PI).toFixed(4);
let piMetodo2 = (Math.PI).toPrecision(5); //le ponemos 5 porque la parte entera es una cifra, entonces
                                            //quedarían 5 en total con los cuatro números de la parte decimal.

solucionEjer3.innerHTML = piMetodo1;
solucionEjer3.innerHTML += "<br>" + piMetodo2;



