//---
//array con todos los botones de operaciones para poder quitarlos en el modo avanzado
//Se usa querySelectorAll para coger los elementos por la clase botonOperacion.
//con querySelectorAll no se cambian los índices al borrar elementos.
const listaBotonesOperaciones = document.querySelectorAll(".botonOperacion"); 

//radios
var arrayRadioSeleccionado = document.getElementsByName("versiones");

//calculadora modo avanzada


//recorremos inputs radios para borrar nodos según lo que pulsemos
for (let inputRadio of arrayRadioSeleccionado) {

    //sacamos el input que está seleccionado:
    inputRadio.addEventListener("change", function (e) {

        //console.log(e.target); //input radio seleccionado

        if (e.target.id == "versionBasica") {
            //ponemos los botones de la versión básica:
            for (let boton of listaBotonesOperaciones) {
                
                boton.parentNode.removeChild(boton);
            }
        }
        if (e.target.id == "versionAvanzada") {
            //borramos los botones de la versión básica:
            for (let boton of listaBotonesOperaciones) {
                console.log(boton.parentNode);
                boton.parentNode.removeChild(boton);
            }
        }

    });
}





