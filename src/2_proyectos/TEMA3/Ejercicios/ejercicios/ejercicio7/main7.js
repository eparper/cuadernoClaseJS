/**********************EJERCICIO 2************************ */
let solucionEjer7 = document.getElementById("solucionEjer7");

let cadena = document.getElementById("cadena");
let errores = document.getElementById("errores");
let boton = document.getElementById("boton");

boton.onclick = function () {

    errores.innerHTML = "";
    solucionEjer7.innerHTML = "";

    try {
        //si está vacía
        if (cadena.value == "") {
            throw new Error("La cadena no puede estar vacía");
        }

        //buscar todas las coincidencias
        let iteratorCoincidencias = (cadena.value).matchAll(/-/g);
      
        let cont = 0;

        solucionEjer7.innerHTML = "Índices: ";

        for (let match of iteratorCoincidencias) {
            solucionEjer7.innerHTML += match.index + " "; //index es del iterator
            cont++;
        }

        solucionEjer7.innerHTML += ". Número de coincidencias: " + cont;

        

    }
    catch (err) {
        errores.innerHTML = err;
    }
    
}
