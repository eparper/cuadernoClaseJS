let resultados = document.getElementById("resultados");
let errores = document.getElementById("errores");
let bBoton = document.getElementById("bBoton");
let numHorasTrab = document.getElementById("numHorasTrab");

let maniana = document.getElementById("maniana");
let tarde = document.getElementById("tarde");
let noche = document.getElementById("noche");

let apellido = document.getElementById("apellido");
let nombre = document.getElementById("nombre");
let salariosBrutosTotal = document.getElementById("salariosBrutosTotal");

let importeTotalBrutos = 0;


bBoton.onclick = function () {
    

    try {

        let bruto = 0;
        let salarioNeto = 0;
        let descuento = 0;
        let cadena = "";
        let horas = 0;
        

        //validar si está vacío //si pones un punto (.) también lo cogerá como vacío
        if (numHorasTrab.value === "") {
            throw "El campo no puede estar vacío";
        }

        if (isNaN(numHorasTrab.value)) {
            throw "El número debe ser entero o real";
        }

        num = Number(numHorasTrab.value);

        horas = parseFloat(num);

        //-------salario bruto------------
        if (maniana.checked) {
            bruto = calcularBruto("m", horas);
            cadena = "mañana";
        }
        else if (tarde.checked) {
            bruto = calcularBruto("t", horas);
            cadena = "tarde";
        }
        else if (noche.checked) {
            bruto = calcularBruto("n", horas);
            cadena = "noche";
        }
        else {
            throw "debes marcar una casilla";
        }
            

        //incrementamos cantidad total de salarios brutos
        importeTotalBrutos = importeTotalBrutos + bruto;

        //salario neto-------------------
        descuento = calcularDescuento(bruto);

        salarioNeto = bruto - descuento;

        resultados.innerHTML += "- " + nombre.value + " " + apellido.value + ". Horas trabajadas: " + 
                                horas + ". Turno: " + cadena + ". Neto: " + salarioNeto + 
                                "€. Bruto: " + bruto + "€<br>";

        salariosBrutosTotal.innerHTML = "Total de importes brutos abonados: " + 
                                            importeTotalBrutos + "€";

        
    }
    catch (err) {
        resultados.innerHTML = "Error: " + err;
    }

    apellido.value = "";
    nombre.value = "";
    numHorasTrab.value = "";
    
}


function calcularBruto(turno, horas) {

    let cantidad = 0;

    switch (turno) {
        case "m": {
            cantidad = 25;
        } break;
        case "t": {
            cantidad = 30;
        } break;
        case "n": {
            cantidad = 35;
        } break;
    }

    return horas * cantidad;
}


function calcularDescuento(salarioBruto) {

    let descuento = 0;

    if (salarioBruto < 600) {
        descuento = (salarioBruto * 8) /100;
    }
    else if (salarioBruto < 1000) {
        descuento = (salarioBruto * 10) /100;
    }
    else if (salarioBruto > 10000) {
        descuento = (salarioBruto * 12) /100;
    }

    return descuento;
}