let resultados = document.getElementById("resultados");


let numeroInsertado;
let entrada;
let arrayNums = [];
let num;

do {

    try {

        entrada = prompt("Introduce una lista de números enteros, pon 0 cuando termines");

        if (isNaN(entrada)) {
            throw "Debes introducir un número entero";
        }

        num = Number(entrada);

        if (!Number.isInteger(num)) {
            throw "Debes introducir un número entero";
        }

        numeroInsertado = parseInt(num);

        if (numeroInsertado !== 0)
            arrayNums.push(numeroInsertado);

        
    }
    catch (err) {
        resultados.innerHTML += "Error: " + err;
    }

}
while (numeroInsertado !== 0);

//se ordena de forma descendente
arrayNums.sort((a, b) => b - a);

//mostramos el array
for (let cont = 0; cont < arrayNums.length; cont++) {

    resultados.innerHTML += arrayNums[cont] + " ";
}

//indicar numero mayor y menor 

resultados.innerHTML += "<br>Número mayor: " + arrayNums[0] + "<br>Número menor: " + 
                        arrayNums[arrayNums.length - 1] + "<br>";

let sinDuplicados = [];
let totalOcurrencias = 0;
let totales = [];
let mapa = new Map();

for (let cont = 0; cont < arrayNums.length; cont++) {


    


    //usamos filter para las ocurrencias totales, filter devuelve un array
    totalOcurrencias = arrayNums.filter(num => num === arrayNums[cont]).length;

    totales[cont] = totalOcurrencias;

    //con map para igualar los numeros con sus totales de ocurrencias
    mapa.set(arrayNums[cont], totales[cont]);

    
}

//ahora quitamos los repetidos para que no salgan al imprimirse
sinDuplicados = arrayNums.filter((valor, indice, array) => {

    return array.indexOf(valor) === indice;
});


for (let cont = 0; cont < sinDuplicados.length; cont++) {
    
    resultados.innerHTML += sinDuplicados[cont] + " (ocurrencias: " + mapa.get(sinDuplicados[cont]) + ")<br>";
}