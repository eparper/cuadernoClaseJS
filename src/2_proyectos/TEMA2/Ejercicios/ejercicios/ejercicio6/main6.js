let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let bBoton = document.getElementById("bBoton");

let resultados = document.getElementById("resultados");
let errores = document.getElementById("errores");

bBoton.onclick = function () {
    
    try {

        let n1 = 0;
        let n2 = 0;
    

        errores.innerHTML = "";
        resultados.innerHTML = "";

        //validamos que siempre sea real o entero
        if (isNaN(num1.value)) {
            throw "El número 1 debe ser entero o real";
        }

        if (isNaN(num2.value)) {
            throw "El número 2 debe ser entero o real";
        }

        

        //importante renombrar estas variables
        n1 = parseFloat(num1.value);
        n2 = parseFloat(num2.value);

        //mostrar por pantalla resultados
        resultados.innerHTML = "Suma de " + n1 + " + " + n2 + " = " + (n1 + n2);

        resultados.innerHTML += "<br>Resta de " + n1 + " - " + n2 + " = " + (n1 - n2);

        resultados.innerHTML += "<br>Multiplicación de " + n1 + " * " + n2 + " = " + (n1 * n2);

        //aquí controlo que num2 no sea 0
        if (num2.value == 0) {
            throw "No se puede dividir por 0";
        }

        resultados.innerHTML += "<br>División de " + n1 + " / " + n2 + " = " + (n1 / n2);

    }
    catch (err) {
        errores.innerHTML = "Error: " + err;
    }
    
}