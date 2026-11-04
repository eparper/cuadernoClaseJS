/**********************EJERCICIO 2************************ */
let solucionEjer5 = document.getElementById("solucionEjer5");

let fecha = document.getElementById("fecha");
let bBoton = document.getElementById("bBoton");


bBoton.onclick = function () {

    try {

        
        let fechaNac;
        solucionEjer5.innerHTML = "";

        
        
        if (fecha.value === "") {
            throw "El campo de la fecha no puede estar vacío";
        }

        

        fechaNac = new Date(fecha.value.replace(/-/g, '\/'));
        fechaNac.setHours(0, 0, 0, 0);

        //console.log(fechaNac.getHours());
        
        //DÍAS------------------------------------------
        const fechaActualLimpia = new Date();
        fechaActualLimpia.setHours(0, 0, 0, 0); //esto elimina las horas, minutos y segundos de hoy

        const milisegundosPorDia = 1000 * 60 * 60 * 24;
        const milisegundosPorAnio = milisegundosPorDia * 365.25;

        //los milisegundos que tiene un día
        //const milisegundosPorDia = 1000 * 60 * 60 * 24;

        let milisegundosEntreFechas = fechaActualLimpia - fechaNac;

        // Si la fecha introducida es futura
        if (milisegundosEntreFechas < 0) {
            throw "La fecha de nacimiento no puede ser futura";
        }

        const milisegundosPorSegundo = 1000;
        const milisegundosPorMinuto = milisegundosPorSegundo * 60;
        const milisegundosPorHora = milisegundosPorMinuto * 60;
        


        let aniosEnteros = Math.floor(milisegundosEntreFechas / milisegundosPorAnio);
        let diasEnteros = Math.floor(milisegundosEntreFechas / milisegundosPorDia);

        //let horasEnteras = Math.floor(milisegundosEntreFechas / milisegundosPorHora);
        //let minutosEnteros = Math.floor(milisegundosEntreFechas / milisegundosPorMinuto);

        //ahora los milisegundos los pasamos a días: sería dividiendo por cuántos milisegundos tiene un día:
        // let dias = milisegundosEntreFechas / milisegundosPorDia;

        // //le quitamos los decimales porque tienen distinta hora los objetos Date que hemos creado
        // let diasEnteros = Math.floor(dias); //le quitamos día actual

        // //AÑOS------------------------------------------
        // const milisegundosPorAnio = 1000 * 60 * 60 * 24 * 365.25; // .2425 incluye bisiestos

        // let anios = milisegundosEntreFechas / milisegundosPorAnio;

        // let aniosEnteros = Math.floor(anios);


        // //HORAS------------------------------------------

        // const milisegundosPorHora = 1000 * 60 * 60;

        // let horas = milisegundosEntreFechas / milisegundosPorHora;

        // let horasEnteras = Math.floor(horas); //le quitamos hora actual

        // //MINUTOS------------------------------------------
        // const milisegundosPorMinuto = 1000 * 60;

        // let minutos = milisegundosEntreFechas / milisegundosPorMinuto;

        // let minutosEnteros = Math.floor(minutos); //le quitamos el minuto actual

        // AJUSTE EXACTO DE HORAS Y MINUTOS--------------------------------------
        // calculamos las horas y minutos basándonos estrictamente en 
        // los días enteros transcurridos.
        let horasEnteras = diasEnteros * 24;
        let minutosEnteros = (horasEnteras * 60) + fechaActualLimpia.getMinutes();
        //-----------------------------------------------------------------------

        solucionEjer5.innerHTML = "Llevo " + aniosEnteros + " años, " + diasEnteros + " días, " +
                                    horasEnteras + " horas y " + minutosEnteros + " minutos vividos.";

        

        
        
        

        
    }
    catch (err) {
        solucionEjer5.style.color = "red";
        solucionEjer5.innerHTML = " " + err;
    }

}
