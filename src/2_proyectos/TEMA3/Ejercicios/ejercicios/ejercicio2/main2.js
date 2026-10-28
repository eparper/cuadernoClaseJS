/**********************EJERCICIO 2************************ */
let solucionEjer2 = document.getElementById("solucionEjer2");
let errores = document.getElementById("errores");
let botonOK = document.getElementById("botonOK");

let longitud = document.getElementById("longitud");
let altura = document.getElementById("altura");

let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");

let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");



botonOK.onclick = function () {

    let longitudPendiente = 0;
    let anguloPendiente = 0;

    try {
        if (longitud.value === "" || altura.value === "" || x1.value === "" || x2.value === "" ||
            y1.value === "" || y2.value === "") {
            throw "Los campos son obligatorios";
        }

        if (isNaN(longitud.value) || isNaN(altura.value) || isNaN(x1.value) || isNaN(x2.value) ||
            isNaN(y1.value) || isNaN(y2.value)) {
            throw "Debes introducir valores numéricos";
        }


        long = Number(longitud.value);
        alt = Number(altura.value);
        coord1x = Number(x1.value);
        coord2x = Number(x2.value);
        coord1y = Number(y1.value);
        coord2y = Number(y2.value);


        //----

        let punto1 = {x: x1.value, y: y1.value};
        let punto2 = {x: x2.value, y: y2.value};

        //calcular longitud de la pendiente:
        longitudPendiente = Math.sqrt(Math.pow(long, 2) + Math.pow(alt, 2));

        anguloPendiente = -1 * ((punto2.y - punto1.y) / (punto2.x - punto1.x));

        porcentajePendiente = (alt / longitudPendiente) * 100; 

        //damos el resultado
        solucionEjer2.innerHTML = "La longitud de la pendiente es: " + longitudPendiente + "<br>" +
                                    "El ángulo de inclinación es: " + anguloPendiente + "<br>" +
                                    "Y el porcentaje de inclinación es: " + porcentajePendiente;


    }
    catch (err) {
        errores.innerHTML = err;
    }
}