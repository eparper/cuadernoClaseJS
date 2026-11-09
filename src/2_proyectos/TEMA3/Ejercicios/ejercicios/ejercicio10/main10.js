/**********************EJERCICIO 2************************ */
let solucionEjer10 = document.getElementById("solucionEjer10");
let boton = document.getElementById("boton");

var ventanaNueva = null;



boton.onclick = function () {

    //calculamos el tamaño dentro del click por si el usuario ha redimensionado
    let alto = window.innerHeight;
    let ancho = window.innerWidth;

    let left = ancho - 40;
    console.log(left);
    let top = alto - 20;
    console.log(top);

    if ((!ventanaNueva) || (ventanaNueva.closed)) { //si ya vale algo distinto de null
        ventanaNueva = window.open("./nuevaVentana.html", "_blank", "width=100px,height=100px,left="+left+"px,top="+top+"px");
    }
    else {
        //si la tiene minimizada por ejemplo, se vuelve a poner el foco en ella
        ventanaNueva.focus();
    }



}