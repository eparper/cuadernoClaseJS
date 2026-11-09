/**********************EJERCICIO 2************************ */
let solucionEjer11 = document.getElementById("solucionEjer11");
let boton = document.getElementById("boton");
var ventana = null;

if ((!ventana) || (ventana.closed)) { //si ya vale algo distinto de null
    ventana = window.open("nuevaVentana.html", "_blank", "width=100px,height=100px,top=150px,left=150px");
}

boton.onclick = function () {

    if (ventana) {
        ventana.resizeTo(600, 500);
        ventana.focus();
    }
    
}



