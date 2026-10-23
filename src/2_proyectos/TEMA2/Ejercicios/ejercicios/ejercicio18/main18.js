let resultados = document.getElementById("resultados");
let errores = document.getElementById("errores");


let entrada1 = prompt("Introduce un número");
let entrada2;
//validaciones con funcion

let numero1 = validaciones(entrada1);

do {
    //validamos que siempre sea real o entero
    try {

        errores.innerHTML = "";
        resultados.innerHTML = "";

        

        //mensaje para introducir opcion
        entrada2 = prompt("Introduce la opción del menú: \n" +
                            "Menú ---- \n" + 
                            "1. Calcular si es múltiplo de 2. \n" + 
                            "2. Calcular si es múltiplo de 3. \n" + 
                            "3. Calcular si es múltiplo de 5. \n" + 
                            "0. Salir \n");

        //validaciones con funcion
        let numero2 = validaciones(entrada2);

        if (typeof numero2 == "string") {
            entrada2 = 0;
            throw numero2;
        }
        else {

            switch (numero2) {
                case 0: {
                    entrada2 = 0;
                } break;
                case 1: {
                    resultados.innerHTML += calcularMultiplo(2, numero1);
                    entrada2 = 0;
                } break;
                case 2: {
                    resultados.innerHTML += calcularMultiplo(3, numero1);
                    entrada2 = 0;
                } break;
                case 3: {
                    resultados.innerHTML += calcularMultiplo(5, numero1);
                    entrada2 = 0;
                } break;
                default: {
                    errores.innerHTML = "Error: debes poner una opción del menú";
                    entrada2 = 0;
                };
            }
        }

        

    }
    catch (err) {
        errores.innerHTML = "Error: " + err;
    }
    
} while (entrada2 !== 0);

//num es el número del que van a ser multiplo
function calcularMultiplo(num, multiplo) {
    
    let cadena = "";

    if (multiplo % num == 0) {
        cadena =  multiplo + " SÍ es múltiplo de " + num;
    }
    else
        cadena =  multiplo + " NO es múltiplo de " + num;

    return cadena;
}

function validaciones(datoAValidar) {

    let num; 
    let n1;
    let cadena = "";

    //validar si está vacío //si pones un punto (.) también lo cogerá como vacío
    if (datoAValidar === "") {
        cadena =  "El campo no puede estar vacío";
    }

    if (isNaN(datoAValidar)) {
        cadena = "El número debe ser entero o real";
    }

    num = Number(datoAValidar);
    

    if (!Number.isInteger(num)) {
        cadena = "El número debe ser entero";
    }

    n1 = parseInt(num);

    if (cadena == "")
        return n1;
    else
        return cadena;

}