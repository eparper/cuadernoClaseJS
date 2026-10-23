let resultados = document.getElementById("resultados");

let miArray = ["Pepe", 2, 4.5, "hola mundo", true, [1,2,3], {nombre: "Pepín", edad: 3}];

//se ordena de forma descendente
miArray.reverse();

//mostramos el array
for (let cont = 0; cont < miArray.length; cont++) {
    resultados.innerHTML += miArray[cont] + " ";
}