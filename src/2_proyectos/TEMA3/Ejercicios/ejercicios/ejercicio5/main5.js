/**********************EJERCICIO 2************************ */
let solucionEjer5 = document.getElementById("solucionEjer5");

let fecha = document.getElementById("fecha");
let bBoton = document.getElementById("bBoton");


bBoton.onclick = function () {

    try {

        let fechaActual = new Date();
        let fechaNac;
        solucionEjer5.innerHTML = "";

        
        
        if (fecha.value === "") {
            throw "El campo de la fecha no puede estar vacío";
        }

        fechaNac = new Date(fecha.value);
        
        //DÍAS------------------------------------------
        //los milisegundos que tiene un día
        const milisegundosPorDia = 1000 * 60 * 60 * 24;

        let milisegundosEntreFechas = fechaActual - fechaNac;

        //ahora los milisegundos los pasamos a días: sería dividiendo por cuántos milisegundos tiene un día:
        let dias = milisegundosEntreFechas / milisegundosPorDia;

        //le quitamos los decimales porque tienen distinta hora los objetos Date que hemos creado
        let diasEnteros = Math.floor(dias);

        //AÑOS------------------------------------------
        const milisegundosPorAnio = 1000 * 60 * 60 * 24 * 30 * 12;

        let anios = milisegundosEntreFechas / milisegundosPorAnio;

        let aniosEnteros = Math.floor(anios);

        //HORAS------------------------------------------
        const milisegundosPorHora = 1000 * 60 * 60;

        let horas = milisegundosEntreFechas / milisegundosPorHora;

        let horasEnteras = Math.floor(horas);

        //MINUTOS------------------------------------------
        const milisegundosPorMinuto = 1000 * 60;

        let minutos = milisegundosEntreFechas / milisegundosPorMinuto;

        let minutosEnteros = Math.floor(minutos);

        solucionEjer5.innerHTML = "Llevo " + aniosEnteros + " años, " + diasEnteros + " días, " +
                                    horasEnteras + " horas y " + minutosEnteros + " minutos vividos.";

        

        
        
        

        
    }
    catch (err) {
        solucionEjer5.style.color = "red";
        solucionEjer5.innerHTML = " " + err;
    }

}
