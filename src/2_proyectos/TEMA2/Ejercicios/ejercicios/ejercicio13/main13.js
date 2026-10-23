let resultados = document.getElementById("resultados");

let dado1 = 0;
let dado2 = 0;
let suma = 0;
let arrayContador = [];


//creamos el array para que luego no dé fallo (de 2 a 12 porque esas son todas las sumas posibles)
for (cont = 2; cont <= 12; cont++) {

    arrayContador[cont] = 0;
}

for (cont = 0; cont < 36000; cont++) {

    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;

    suma = dado1 + dado2;

    arrayContador[suma] = arrayContador[suma] + 1;


}

for (cont = 2; cont < arrayContador.length; cont++) {

    resultados.innerHTML += "Suman " + cont + ": " + arrayContador[cont] + " veces.<br>";
}
