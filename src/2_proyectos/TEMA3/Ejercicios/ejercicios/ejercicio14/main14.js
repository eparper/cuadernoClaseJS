/**********************EJERCICIO 2************************ */
let solucionEjer14 = document.getElementById("solucionEjer14");
let valorABuscar = document.getElementById("valorABuscar");
let bBuscar = document.getElementById("bBuscar");
let texto = document.getElementById("texto");


bBuscar.onclick = function () {

    let expReg = new RegExp(valorABuscar.value, "g");
    
    console.log(texto.textContent);

    let result = expReg.exec(texto.textContent);
    result.lastIndex = 0;

    console.log(texto.textContent);

    if (expReg.test(texto.textContent)) {
        solucionEjer14.innerHTML = "SÍ se ha encontrado el valor";

        
        while (result != null) {
            
            //aquí cogemos la longitud del valor encontrado
            //let longitud = result[0].length;
            //let posicion = result.index;
            let valor = result[0];

            let textoNuevo = texto.textContent.replaceAll(valor, "<span style='background-color:yellow;'>"+valor+"</span>");

            console.log(textoNuevo);

            console.log(`Encontrado ${result[0]} en la posición ${result.index}.`);
            console.log("---------------------------------");
            result = expReg.exec(texto.textContent);

            //reemplazamos el contenido del texto
            texto.innerHTML = textoNuevo;
        };

    }
    else {
        solucionEjer14.innerHTML = "NO se ha encontrado el valor";
        texto.innerHTML = texto.textContent;
    }
        

    //resaltar todas las coincidencias

}


