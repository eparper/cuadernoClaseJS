let resultados = document.getElementById("resultados");

let arrayPiramide = [];


for (let fila = 1; fila <= 50; fila++) {
    arrayPiramide[fila] = [];

    for (let col = 1; col < arrayPiramide.length; col++) {
        
        arrayPiramide[fila][col] = col;

        resultados.innerHTML += arrayPiramide[fila][col];
    }

    resultados.innerHTML += "<br>";
}