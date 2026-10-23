let resultados = document.getElementById("resultados");
let bBoton = document.getElementById("bBoton");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let errores = document.getElementById("errores");

bBoton.onclick = function () {
    //validamos que siempre sea real o entero
    try {

        errores.innerHTML = "";
        resultados.innerHTML = "";

        //validar si está vacío //si pones un punto (.) también lo cogerá como vacío
        if (num1.value === "") {
            throw "El campo 1 no puede estar vacío";
        }

        if (num2.value === "") {
            throw "El campo 1 no puede estar vacío";
        }

        if (isNaN(num1.value)) {
            throw "El número 1 debe ser entero o real";
        }

        if (isNaN(num2.value)) {
            throw "El número 2 debe ser entero o real";
        }

        num11 = Number(num1.value);
        num22 = Number(num2.value);

        if (!Number.isInteger(num11)) {
            throw "El número 1 debe ser entero";
        }

        if (!Number.isInteger(num22)) {
            throw "El número 2 debe ser entero";
        }


        n1 = parseInt(num11);
        n2 = parseInt(num22);

        

        //operaciones
        //cuál es el menor
        resultados.innerHTML += "El número menor es: " + calcularMenor(n1, n2) + "<br>";
        

        resultados.innerHTML += "Números entre ellos: ";

        //mostrar números entre n1 y n2
        for (let cont = n1; cont < n2; cont++) {
            
            if (cont !== n1)
                resultados.innerHTML += cont + " ";
        }

        console.log("hola");

    }
    catch (err) {
        errores.innerHTML = "Error: " + err;
    }
    
}

function calcularMenor(numero1, numero2) {
    
    let menor = 0;
    
    if (numero1 <= numero2) {
        menor = numero1;
    }
    else {
        menor = numero2;
    }

    return menor;
}