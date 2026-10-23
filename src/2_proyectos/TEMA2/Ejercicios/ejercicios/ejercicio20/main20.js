let resultados = document.getElementById("resultados");
let errores = document.getElementById("errores");
let bBoton = document.getElementById("bBoton");
let numero = document.getElementById("numero");

//numero secreto
let numSecreto = Math.floor(Math.random() * 100) + 1; //entre 1 y 100

console.log(numSecreto);

let numClicks = 0;

bBoton.onclick = function () {

    try {

        numClicks++;

        //validar si está vacío //si pones un punto (.) también lo cogerá como vacío
        if (numero.value === "") {
            throw "El campo no puede estar vacío";
        }

        if (isNaN(numero.value)) {
            throw "El número debe ser entero";
        }

        num = Number(numero.value);

        if (!Number.isInteger(num)) {
            throw "El número debe ser entero";
        }

        n = parseInt(num);

        if (n > numSecreto)
            resultados.innerHTML = "Mi número es menor";
        if (n < numSecreto)
            resultados.innerHTML = "Mi número es mayor";
        if (n == numSecreto)
            resultados.innerHTML = "¡¡¡ENHORABUENA, HAS ACERTADO EN EL INTENTO NÚMERO: " + 
                                    numClicks + "!!! ";

        
    }
    catch (err) {
        resultados.innerHTML = "Error: " + err;
    }

    numero.value = "";
    
}