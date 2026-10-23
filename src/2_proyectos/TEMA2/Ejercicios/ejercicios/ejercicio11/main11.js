let resultados = document.getElementById("resultados");

for (cont = 1; cont <= 100; cont++) {

    //convierto número en string para poder usar funciones de string
    numAStrings = String(cont);
    arrayNumsSeparados = numAStrings.split("");
    ultimoNum = arrayNumsSeparados[arrayNumsSeparados.length - 1];


    if (cont % 7 == 0 || ultimoNum == 7) {
        resultados.innerHTML += cont + " PUM <br>";
    }
    //para quitar la coma del final
    else if (cont == 100)
        resultados.innerHTML += cont;
    else 
        resultados.innerHTML += cont + ", ";
}


