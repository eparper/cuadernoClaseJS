let cantidad = document.getElementById("cantidad");
let dolares = document.getElementById("dolares");
let yenes = document.getElementById("yenes");
let errores = document.getElementById("errores");

cantidad.oninput = function () {
    //validamos que siempre sea real o entero
    try {
        errores.innerHTML = "";
        dolares.innerHTML = "";
        yenes.innerHTML = "";

        let dolar = 0;
        let yen = 0;

        if (isNaN(cantidad.value)) {
            throw "El número debe ser entero o real";
        }

        //aquí controlo que no sea 0
        if (cantidad.value == 0) {
            throw "El número debe ser distinto de 0";
        }

        //hacemos operaciones
        dolar = cantidad.value * 1.12;
        yen = cantidad.value * 177.59;

        dolares.innerHTML = "Dólares: " + dolar;
        yenes.innerHTML = "Yenes: " + yen;
    }
    catch (err) {
        errores.innerHTML = "Error: " + err;
    }
    
}