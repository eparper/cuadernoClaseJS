let resultados = document.getElementById("resultados");
let numero = document.getElementById("numero");
let bBoton = document.getElementById("bBoton");
let errores = document.getElementById("errores");

let parImpar = (num) => {
    return (num % 2)? "Es impar": "Es par";
};

bBoton.onclick = function () {
    try {

        errores.innerHTML = "";
        resultados.innerHTML = "";

        //validar si está vacío //si pones un punto (.) también lo cogerá como vacío
        if (numero.value === "") {
            throw "El campo no puede estar vacío";
        }

        if (isNaN(numero.value)) {
            throw "Debes introducir un número";
        }

        num = Number(numero.value);

        if (!Number.isInteger(num)) {
            throw "El número debe ser entero";
        }

        resultados.innerHTML = parImpar(num);

    }
    catch (err) {
        errores.innerHTML = "Error: " + err;
    }
}


