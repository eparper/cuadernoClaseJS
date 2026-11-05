/**********************EJERCICIO 2************************ */
let solucionEjer6 = document.getElementById("solucionEjer6");
let errores = document.getElementById("errores");

let titulo = document.getElementById("titulo");
let fechaHora = document.getElementById("fechaHora");
let introducirDatos = document.getElementById("introducirDatos");

let arrayEventosFecha = [];

introducirDatos.onclick = function () {

    solucionEjer6.innerHTML = "";
    errores.innerHTML = "";

    try {

        let nuevoEvento = new Object();
        let fecha;

        //no puede estar el título vacío
        if (titulo.value == "") {
            throw new Error("El título no puede estar vacío");
        }

        if (!fechaHora.value) {
            throw new Error("El campo fecha/hora no puede estar vacío");
        }
        else {
            fecha = new Date(fechaHora.value);
        }

        //-------
        
        nuevoEvento.titulo = titulo.value;
        nuevoEvento.fechaHora = fecha;

        //añadimos el evento a nuestro array de objetos
        arrayEventosFecha.push(nuevoEvento);

        arrayEventosFecha.sort((ob1, ob2) => new Date(ob1.fechaHora) - new Date(ob2.fechaHora)); //esto ordena de menor a mayor por fechas

        //console.log(arrayEventosFecha);

        for (let ob of arrayEventosFecha) {
            
            solucionEjer6.innerHTML += "Evento: " + ob.titulo + ", Fecha: " + 
                                        ob.fechaHora.getDate() + 
                                        "/" + (ob.fechaHora.getMonth()+1) + "/" + 
                                        ob.fechaHora.getFullYear() + "<br>";
        }
        
     


    }
    catch (err) {
        errores.innerHTML = err;
    }
}


