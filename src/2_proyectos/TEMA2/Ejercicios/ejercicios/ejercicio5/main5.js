let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let bBoton = document.getElementById("bBoton");

let numeros = document.getElementById("numeros");
let errores = document.getElementById("errores");

bBoton.onclick = function () {
    //validamos que siempre sea real o entero
    try {

        errores.innerHTML = "";
        numeros.innerHTML = "";

        if (isNaN(num1.value)) {
            throw "El número 1 debe ser entero o real";
        }

        if (isNaN(num2.value)) {
            throw "El número 2 debe ser entero o real";
        }

        n1 = parseInt(num1.value);
        n2 = parseInt(num2.value);

        //aquí controlo que sea mayor a -100
        if (n1 <= -100 || n2 <= -100) {
            throw "Los números deben ser mayores que -100";
        }

        //aquí controlo que sea menor o igual que 5000
        if (n1 > 5000 || n2 > 5000) {
            throw "Los números deben ser menores que 5000";
        }

        //aquí controlo que num1 sea menor que num2
        if (n1 >= n2) {
            throw "El número 1 debe ser menor que el número 2";
        }

        

        //mostrar por pantalla todos los valores pares entre esos números
        for (let cont = n1 + 1; cont < n2; cont++) {
            //si el numero es par, mostrarlo
            if (cont % 2 == 0) {
                if (cont !== (n2 - 2))
                    numeros.innerHTML += cont + ", ";
                else 
                    numeros.innerHTML += cont; //para quitarle la coma al último
            }
        }

    }
    catch (err) {
        errores.innerHTML = "Error: " + err;
    }
    
}