let radio = document.getElementById("radio");
let bRadio = document.getElementById("bRadio");
let area = document.getElementById("area");
let perimetro = document.getElementById("perimetro");

bRadio.onclick = function () {
    //validamos que siempre sea real o entero
    try {
        errores.innerHTML = "";
        area.innerHTML = "";
        perimetro.innerHTML = "";

        let resultArea = 0;
        let resultPerimetro = 0;

        if (isNaN(radio.value)) {
            throw "El número debe ser entero o real";
        }

        //aquí controlo que no sea 0
        if (radio.value == 0) {
            throw "El número debe ser distinto de 0";
        }

        //hacemos operaciones
        resultArea = 2 * Math.PI * Math.pow(radio.value, 2);
        resultPerimetro = 2 * Math.PI * radio.value;

        area.innerHTML = "Área: " + resultArea;
        perimetro.innerHTML = "Perímetro: " + resultPerimetro;
    }
    catch (err) {
        errores.innerHTML = "Error: " + err;
    }
    
}