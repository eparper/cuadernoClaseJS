const fechaHoy = document.getElementById("fecha-hoy");
const horaActual = document.getElementById("hora-actual");


const tbody = document.getElementById("cuerpo-tabla");

//const inputBuscador = document.getElementById("buscador");


//---------------Cabecera---------------------------
fechaHoy.innerHTML = muestraFechaHoyConFormato();

horaActual.innerHTML = muestraHoraActual(); //lo hacemos aquí fuera del setInterval para que no tarde 1 segundo en aparecer

setInterval(function () {

    horaActual.innerHTML = muestraHoraActual();
        
}, 1000); //cada segundo

//--------------------------------------------------
//---------------Listado de socios------------------
//--------------------------------------------------

let nodoTRparaTabla;



//recorrer socios para insertar los datos con nodos en la tabla
for (let cont = 0; cont < socios.length; cont++) {

    

    nodoTRparaTabla = creaNodoSocioParaTabla(socios[cont]);

    tbody.appendChild(nodoTRparaTabla);
}





//--------------------------------------------------









//******************************FUNCIONES******************************* */
//********************************************************************** */

function muestraFechaHoyConFormato() {

    let hoy = new Date();
    let diaSemana = hoy.getDay();

    let arrayDiasSemana = [
        "Domingo", // es 0
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
    ];

    let diaString = arrayDiasSemana[diaSemana];

    let diaMes = hoy.getDate();

    let mes = hoy.getMonth();

    let arrayMeses = [
        "enero", // es 0
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];

    let mesString = arrayMeses[mes];

    let anio = hoy.getFullYear();

    return diaString + ", " + diaMes + " de " + mesString + " de " + anio;


}

function muestraHoraActual() {

    let hoy = new Date();

    let hora = hoy.getHours();
    let minutos = hoy.getMinutes();
    let segundos = hoy.getSeconds();

    

    let cadena = saneaHora(hora) + ":" + saneaHora(minutos) + ":" + saneaHora(segundos);

    return cadena;
}

function saneaHora(elemento) {

    elemento = elemento.toString().padStart(2, "0");

    return elemento;
    

}

//i: el nodo que se quiere insertar. 
//e: el nodo tras el que se quiere insertar otro. 
function insertAfter(i, e) {
    if (e.nextSibling) { // El siguiente hermano de e 
        e.parentNode.insertBefore(i, e.nextSibling);
    } else {
        e.parentNode.appendChild(i);
    }
}

//---------------------------------------------
//                 FUNCIÓN CREARNODOS
//---------------------------------------------
/**
 * @param string tipo nombre del elemento
 * @param string Texto El texto que contienen las etiquetas
 * @param string id El id que tiene
 * @param string styles Estilos
 * @param array props Es un array de objetos
 * @return node o null si no se ha podido crear el nodo
 */
function createNode(tipo, texto, id, styles, props) { //controlar con arguments[] si solo se llaman dos parámetros

    let elemento = null;

    if ((tipo) && (typeof tipo === "string")) //si le paso undefined o null | 
        elemento = document.createElement(tipo);    
    else
        return null; //porque el throw error termina la aplicación
        //throw new Error("Debes indicar el tipo de nodo en un string");

    if (texto && (typeof texto === "string")) { //por ejemplo si es una imagen
        let elementoText = document.createTextNode(texto);
        elemento.appendChild(elementoText);
    }

    if (id && typeof id === "string") 
        elemento.id = id;

    if ((styles) && (typeof styles === "string"))
        elemento.style = styles;

    if (Array.isArray(props)) { //si props es un array

        //recorro el array primero
        for (let obj of props) { //for of para recorrer los objetos

            //recorremos cada objeto
            for (let propiedad in obj) { //for in para recorrer las propiedades
                elemento.setAttribute(propiedad, obj[propiedad]);
            }
        }
    }

    return elemento;

}

{

//hay que construir lo siguiente para insertar en la tabla:
/* <td data-label="Id">
    <span class="id-socio">
        <span class="avatar">LM</span>
        <span class="id-socio__codigo">SOC-0001</span>
    </span>
</td>
<td data-label="Nombre">Lucía Martín R.</td>
<td data-label="Email">lu**********@correo.es</td>

<td data-label="Edad" class="num">31</td>
<td data-label="Actividades"><span class="chips"><span class="chip">natación</span><span class="chip">yoga</span></span></td>
<td data-label="Cuota" class="num">35.00 €</td> */}

function creaNodoSocioParaTabla (socio) {

    let elementoTR = createNode("tr", "", "", "", []);

    let nombreCompleto = socio.nombre + " " + socio.apellidos;

    //PARA EL ID
    let elementoTD = createNode("td", "", "", "", [{"data-label":"Id"}]);
    let span1 = createNode("span", "", "", "", [{class:"id-socio"}]);
    let span2 = createNode("span", sacarInicialesNombre(nombreCompleto), "", "", [{class:"avatar"}]);
    let span3 = createNode("span", socio.id, "", "", [{class:"id-socio__codigo"}]);

    span1.appendChild(span2);
    span1.appendChild(span3);
    elementoTD.appendChild(span1);
    elementoTR.appendChild(elementoTD);

    //PARA EL NOMBRE
    let elementoTDnombre = createNode("td", abreviarSegundoApellido(nombreCompleto), "", "", [{"data-label":"Nombre"}]);
    elementoTR.appendChild(elementoTDnombre);

    //PARA EL EMAIL
    let elementoTDemail = createNode("td", ocultarEmail(socio.email), "", "", [{"data-label":"Email"}]);
    elementoTR.appendChild(elementoTDemail);

    //PARA LA EDAD

    return elementoTR;
}

function sacarInicialesNombre(nombreCompleto) {

    let partesNombre = nombreCompleto.split(" ");

    let primerNombre = partesNombre[0];
    let primerApellido = partesNombre[1];

    let letraNombre = primerNombre.charAt(0);
    let letraApellido = primerApellido.charAt(0);

    return letraNombre + letraApellido;
}

function abreviarSegundoApellido(nombreCompleto) {

    let partesNombre = nombreCompleto.split(" ");
    
    let primerNombre = partesNombre[0];
    let primerApellido = partesNombre[1];
    let segundoApellido = partesNombre[2];

    let letraApellido = segundoApellido.charAt(0);

    //devuelve el nombre, primer apellido y letra con punto
    return primerNombre + " " + primerApellido + " " + letraApellido + ".";
}

function ocultarEmail(email) {

    let emailSinDominio = email.split("@")[0];

    let dosPrimerasLetras = emailSinDominio.substr(0, 2);
    let tamanioEmail = emailSinDominio.length;

    //let tamanioEmailSin2letras = tamanioEmail - 2;

    return dosPrimerasLetras.padEnd(tamanioEmail, "*") + "@" + email.split("@")[1];
}

function aniosCumplidosHoy(fechaNacimiento) {

    let hoy = new Date();

    let fechaNac = new Date(fechaNacimiento);

    //restamos los años en bruto
    let anios = hoy.getFullYear() - fechaNac.getFullYear();


    //si diferenciaMeses da negativo es que el mes de fecha de nacimiento es mayor
    //si diferenciaMeses da positivo es que el mes de hoy es mayor
    //si da 0, es que son iguales los meses;
    const diferenciaMeses = hoy.getMonth() - fechaNac.getMonth();

    //si diferenciaMeses es menor de 0: le restamos un año a los años brutos porque significa que el mes de cumpleaños no ha llegado aún
    //si los meses son iguales también vamos a comprobar que el día de cumpleaños no haya llegado aún (o sea, que el día de hoy sea menor que el de cumple), 
    //en este caso también se le resta 1 porque no ha llegado su cumpleaños
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
        anios--;
    }

}