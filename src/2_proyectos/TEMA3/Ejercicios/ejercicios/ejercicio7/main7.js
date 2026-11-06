/**********************EJERCICIO 2************************ */
let solucionEjer7 = document.getElementById("solucionEjer7");

let cadena = document.getElementById("cadena");
let errores = document.getElementById("errores");
let boton = document.getElementById("boton");

boton.onclick = function () {

    try {
        //si está vacía
        if (cadena.value == "") {
            throw new Error("La cadena no puede estar vacía");
        }

        let cad = cadena.value;
    }
    catch (err) {

    }
    
}
