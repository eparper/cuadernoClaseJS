let resultados = document.getElementById("resultados");

for (cont = 1; cont <= 300; cont++) {

    let texto = "";

    //convierto número en string para poder usar funciones de string
    numAStrings = String(cont);
    arrayNumsSeparados = numAStrings.split("");
    ultimoNum = arrayNumsSeparados[arrayNumsSeparados.length - 1];


    


    if (ultimoNum == 0 && cont !== 300) {
        texto += cont + "</span>, <br>";
    }
    

    if (cont == 300)
        texto += cont + "</span>"; //ponemos los cierres de la etiqueta span para luego
                                    //para que se cierre con la variable texto de resultados.innerHTML
    else 
        texto += cont + "</span>, ";

    
    //si es multiplo de 4
    if (cont % 4 == 0) {
        resultados.innerHTML += "<span style=\"font-size:14px;color:green;\">" + texto;
    }
    else if (cont % 9 == 0) {
        resultados.innerHTML += "<span style=\"font-size:10px;color:red;\">" + texto;
    }
    else
        resultados.innerHTML += texto;


}


