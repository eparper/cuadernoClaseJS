const h21 = document.getElementById("h21");

h21.innerHTML += `Ancho total: ${screen.width}, Alto total: ${screen.height} <br>`;
h21.innerHTML += `Ancho total disponible: ${screen.availWidth}, Alto total disponible: ${screen.availHeight} <br>`;

h21.innerHTML += `Número de bits para colores: ${screen.colorDepth} <br>`;
h21.innerHTML += `Orientación de la pantalla: ${screen.orientation.angle} grados<br>`;

h21.innerHTML += `Primera posición izquierda disponible: ${screen.availLeft}<br>`;


// Ejercicio: como detectar si una pantalla está tumbada o derecha
if (screen.height < screen.width ) { //si el ancho es mayor que el alto
    h21.innerHTML = "landscape";
}
else
    h21.innerHTML = "portrait";


h21.innerHTML += " - Ángulo: " + screen.orientation.angle;

//si cambia el tamaño de la ventana:
document.body.onresize = function () {
    // Ejercicio: como detectar si una pantalla está tumbada o derecha
    if (screen.height < screen.width ) { //si el ancho es mayor que el alto
        h21.innerHTML = "landscape";
    }
    else
        h21.innerHTML = "portrait";

    h21.innerHTML += " - Ángulo: " + screen.orientation.angle;
}


