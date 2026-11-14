const fechaHoy = document.getElementById("fecha-hoy");
const horaActual = document.getElementById("hora-actual");


const tbody = document.getElementById("cuerpo-tabla");

const inputBuscador = document.getElementById("buscador");

const filtroActividad = document.getElementById("filtro-actividad"); //es una lista desplegable (select - option)
const orden = document.getElementById("orden"); //es una lista desplegable (select - option)

const bPantallaCompleta = document.getElementById("btn-pantalla-completa");
const tablaSociosListado = document.getElementById("listado");

const fichaDatos = document.getElementById("ficha-datos");
const formularioFicha = document.getElementById("form-ficha");
const bVerFicha = formularioFicha.nextElementSibling;
const inputDNI = document.getElementById("ficha-dni");
const errorFicha = document.getElementById("ficha-error");

const altaNombre = document.getElementById("alta-nombre");
const errorNombre = document.getElementById("error-nombre");

const altaApellidos = document.getElementById("alta-apellidos");
const errorApellidos = document.getElementById("error-apellidos");

const altaDNI = document.getElementById("alta-dni");
const errorDNI = document.getElementById("error-dni");

const altaEmail = document.getElementById("alta-email");
const errorEmail = document.getElementById("error-email");

const altaTlf = document.getElementById("alta-telefono");
const errorTlf = document.getElementById("error-telefono");

const altaNacimiento = document.getElementById("alta-nacimiento");
const errorNacimiento = document.getElementById("error-nacimiento");

const formAlta = document.getElementById("form-alta");
const bDarDeAlta = formAlta.nextElementSibling.children[0];

//---------------Cabecera---------------------------
let hoy = new Date();
fechaHoy.innerHTML = muestraFechaHoyConFormato(hoy);

horaActual.innerHTML = muestraHoraActual(); //lo hacemos aquí fuera del setInterval para que no tarde 1 segundo en aparecer

setInterval(function () {

    horaActual.innerHTML = muestraHoraActual();
        
}, 1000); //cada segundo

//--------------------------------------------------
//---------------Listado de socios------------------
//--------------------------------------------------
let arrayCoincidenciasFiltrosBuscar = [];
let arrayNodosTR = muestraTablaConDatos(socios);

filtros();

//----------------------Buscador--------------------

inputBuscador.addEventListener("input", filtros);

//--------------------------------------------------
//------------Filtro de actividad-------------------

filtroActividad.addEventListener("change", filtros);


//--------------------------------------------------
//-----------------Orden----------------------------
orden.addEventListener("change", filtros);

//--------------------------------------------------
//-----------------PANTALLA COMPLETA----------------
bPantallaCompleta.addEventListener("click", function () {

    if (document.fullscreenElement == null) { //preguntamos si no hay ya algún elemento en pantalla completa
        tablaSociosListado.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }
});

//este evento escuchar cambios de estado (detecta tanto el clic en el botón como la tecla Esc)
//solo le cambiamos el texto al botón
document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement !== null) {
        bPantallaCompleta.textContent = "Salir de pantalla completa";
    } 
    else {
        bPantallaCompleta.textContent = "Pantalla completa";
    }
});

//--------------------------------------------------
//-----------------FICHA DE SOCIO-------------------
bVerFicha.addEventListener("click", function () {

    let dniIntroducido = inputDNI.value.toLowerCase();
    let objetoSocio = null;

    fichaDatos.setAttribute("hidden", "");
    
    if (dniIntroducido == "") { //si no hay nada en el campo se muestra el mensaje de está vacío
        fichaDatos.hidden = true;
        document.getElementById("ficha-vacia").hidden = false; //el mensaje de vacío sí sale
        errorFicha.hidden = true;

    }
    else { //si hay algo, comprueba los dnis de los socios para ver si coincide alguno
        for (let obSocio of socios) {

            if (obSocio.dni.toLowerCase() == dniIntroducido)
                objetoSocio = obSocio;
            
        }

        if (objetoSocio) {
            
            muestraFicha(objetoSocio);
            
        }
        else {
            errorFicha.hidden = false; //error se ve
            document.getElementById("ficha-vacia").hidden = true; //el error de vacío se oculta
        }
    }

    

});

//--------------------------------------------------
//-----------------ALTA DE SOCIO-------------------
bDarDeAlta.addEventListener("click", function () {

    let expRegNombreApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+)*$/;
    let expRegEmail = /^(?!.*\.\.)[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    let expRegTlf = /^\s*[6789](?:\s*\d){8}\s*$/;
    

    let arrayTodoOK = [];

    //nombre 
    arrayTodoOK.push(validaCampos(expRegNombreApellido, altaNombre.value, errorNombre, "Nombre incorrecto"));
    //apellidos 
    arrayTodoOK.push(validaCampos(expRegNombreApellido, altaNombre.value, errorApellidos, "Apellidos incorrectos"));
    //dni
    //primero validamos formato y letra, y si es válido, comprobamos si ya existe
    if (!validaDNI(altaDNI.value, errorDNI, "Letra o formato del DNI incorrecto")) {
        arrayTodoOK.push(false);
    } else if (!yaHayDNIexistente(altaDNI.value, errorDNI, "DNI ya existente")) {
        arrayTodoOK.push(false);
    } else {
        errorDNI.innerHTML = ""; //limpia el error si todo está bien
        arrayTodoOK.push(true);
    }
    //Email
    arrayTodoOK.push(validaCampos(expRegEmail, altaEmail.value, errorEmail, "Email incorrecto"));
    //teléfono
    arrayTodoOK.push(validaCampos(expRegTlf, altaTlf.value, errorTlf, "Teléfono incorrecto"));
    //fecha de nacimiento
    arrayTodoOK.push(validaFechaNacimiento(altaNacimiento.value));

});


//********************************************************************** */
//******************************FUNCIONES******************************* */
//********************************************************************** */

function validaFechaNacimiento(fecha) {

    let expRegFechaNac = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (expRegFechaNac.test(fecha)) { //si la fecha cumple con la expresión regular
        let partesFecha = fecha.split("/");
        let dia = parseInt(partesFecha[0]);
        let mes = parseInt(partesFecha[1]);
        let anio = parseInt(partesFecha[2]);
        let hoy = new Date();

        let fechaCompletaFormatoDate = anio + "-" + mes + "-" + dia;

        let fechaDate = new Date(fechaCompletaFormatoDate);

        //así preguntamos si ha salido bien:
        if (fechaDate.getFullYear() === anio && fechaDate.getMonth() === mes - 1 && fechaDate.getDate() === dia) {
            //la fecha es correcta
            errorNacimiento.innerHTML = "";

            if (fechaDate > hoy) { //si la fecha es futura y la edad mínima son 14 años

                errorNacimiento.innerHTML = "No puede ser una fecha futura";
                return false;

            }
            else if (aniosCumplidosHoy(fechaCompletaFormatoDate) < 14) {
                errorNacimiento.innerHTML = "No puedes ser menor de 14 años";
                return false;
            }

            return true;


        }  
        else {
            //la fecha es falsa
            errorNacimiento.innerHTML = "Fecha incorrecta";
            return false;
        }
            
    }
}

function yaHayDNIexistente(dni, campoError, cadenaError) {
    let objetoSocio = null;

    for (let obSocio of socios) {
         
        if (obSocio.dni == dni) {
            objetoSocio = obSocio;
        }
    }

    if (objetoSocio !== null) { //significa que sí existe, entonces debe dar un error
        campoError.innerHTML = cadenaError;
        return false
    }
    return true;
}

function validaDNI(dni, campoError, cadenaError) {

    //debe tener 8 dígitos y una letra
    let expRegDNI = /^\d{8}[A-Za-z]$/;

    if (expRegDNI.test(dni)) {

        //aquí comprobamos que sea la letra correcta:
        let cadena = "TRWAGMYFPDXBNJZSQVHLCKE".toLowerCase();
        let numDNI = parseInt(dni.substr(0, 8));
        let letraCorrecta = cadena.charAt(numDNI % 23);

        let letraDNI = dni.substr(8, 1).toLowerCase();

        if (letraCorrecta == letraDNI) {
            return true;
        }

        campoError.innerHTML = cadenaError;
        return false;
    }
    else {
        campoError.innerHTML = cadenaError;
        return false;
    }

}

function validaCampos(expresionRegular, valor, campoError, cadenaError) {

    if (expresionRegular.test(valor)) {
        campoError.innerHTML = "";
        return true;
    }
    else {
        campoError.innerHTML = cadenaError;
        return false;
    }
}

function muestraFicha(socio) {
    let nombreCompleto = socio.nombre + " " + socio.apellidos;
    // fichaDatos.hidden = false; //otra forma
    fichaDatos.removeAttribute("hidden");
    errorFicha.hidden = true; //se oculta
    
    document.getElementById("ficha-vacia").setAttribute("hidden", "");

    document.getElementById("ficha-avatar").innerHTML = sacarInicialesNombre(nombreCompleto);
    document.getElementById("ficha-nombre").innerHTML = nombreCompleto;
    document.getElementById("ficha-id").innerHTML = socio.id;

    document.getElementById("ficha-dni-dato").innerHTML = socio.dni;
    document.getElementById("ficha-email").innerHTML = socio.email;
    document.getElementById("ficha-dominio").innerHTML = socio.email.split("@")[1];
    document.getElementById("ficha-telefono").innerHTML = telefono3en3(socio.telefono);

    let cadena = muestraFechaHoyConFormato(socio.fechaNacimiento) + " · " + aniosCumplidosHoy(socio.fechaNacimiento).toString();
    document.getElementById("ficha-nacimiento").innerHTML = cadena + " años";
    let hoy = new Date();
    let cadFechaHoy = hoy.getFullYear() + "-" + (hoy.getMonth()+1) + "-" + hoy.getDate();
    document.getElementById("ficha-alta").innerHTML = sacaFechaFormatoCorto(socio.fechaAlta)  + " · " + diasPasadosDesdeUnaFecha(cadFechaHoy, socio.fechaAlta) + " días en el club";

    let partesFechaProxCumple = socio.fechaNacimiento.split("-");
    
    let proximoCumple = hoy.getFullYear() + "-" + partesFechaProxCumple[1] + "-" + partesFechaProxCumple[2];;
    let proximoCumpleDate = new Date(proximoCumple);
    //si ya ha cumplido este año
    if (proximoCumpleDate <= hoy) {
        //le sumamos 1 al año
        proximoCumple = (hoy.getFullYear()+1) + "-" + partesFechaProxCumple[1] + "-" + partesFechaProxCumple[2];
        document.getElementById("ficha-cumple").innerHTML = "en " + diasPasadosDesdeUnaFecha(cadFechaHoy, proximoCumple) + " días";
    }
    else {
        proximoCumple = hoy.getFullYear() + "-" + partesFechaProxCumple[1] + "-" + partesFechaProxCumple[2];
        document.getElementById("ficha-cumple").innerHTML = "en " + diasPasadosDesdeUnaFecha(cadFechaHoy, proximoCumple) + " días";
    }

    let cadenaActividades = sacaActividades(socio).join(", ");
    document.getElementById("ficha-actividades").innerHTML = cadenaActividades;

    document.getElementById("ficha-cuota").innerHTML = saneaCuota(socio.cuota) + " €";
    

}

function sacaActividades(socio) {
    
    let arrayActividades = socio.actividades;

    return arrayActividades;
}

function diasPasadosDesdeUnaFecha(fechaLimite1, fechaLimite2) {
    let fechaLimite1Date = new Date(fechaLimite1);
    let fechaLimite2Date = new Date(fechaLimite2);

    let diferencia = fechaLimite2Date - fechaLimite1Date;

    let dias = diferencia / 1000 / 60 / 60 / 24;

    //devolvemos los días entre esas fechas
    return dias;
}

function sacaFechaFormatoCorto(fecha) {

    let partes = fecha.split("-");
    return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function telefono3en3(tlf) {

    let parte1 = tlf.substr(0, 3);
    let parte2 = tlf.substr(3, 3);
    let parte3 = tlf.substr(6, 3);

    return parte1 + " " + parte2 + " " + parte3;
}

function filtros() {

    //FILTRO DE BÚSQUEDA
    arrayCoincidenciasFiltrosBuscar = socios;

    let escrito = ignorarTildes(inputBuscador.value).trim();

    if (escrito.length >= 2) {
        
        let regExp = new RegExp(escrito, "i");

        arrayCoincidenciasFiltrosBuscar = arrayCoincidenciasFiltrosBuscar.filter(obSocio => {
            let nombreSinTildes = ignorarTildes(obSocio.nombre);
            let apellidosSinTildes = ignorarTildes(obSocio.apellidos);
            let emailSinTildes = ignorarTildes(obSocio.email);

            return regExp.test(nombreSinTildes) || 
                   regExp.test(apellidosSinTildes) || 
                   regExp.test(emailSinTildes);
        });
    }

    

    //FILTRO DE ACTIVIDAD
    //por cada socio vamos a ver en sus actividades si incluye la actividad buscada
    if (filtroActividad.value !== "") {
        let textoActiSeleccionada = filtroActividad.options[filtroActividad.selectedIndex].text.toLowerCase();

        arrayCoincidenciasFiltrosBuscar = arrayCoincidenciasFiltrosBuscar.filter(obSocio => 
            obSocio.actividades.includes(textoActiSeleccionada)
        );
    }

    //FILTRO DE ORDEN
    if (orden.value == "nombre") {
        arrayCoincidenciasFiltrosBuscar.sort(function (a, b) {
                                                            let nombreA = ignorarTildes(a.nombre);
                                                            let nombreB = ignorarTildes(b.nombre);
                                                            if (nombreA < nombreB) return -1;
                                                            if (nombreA > nombreB) return 1;
                                                            return 0;
                                                        });

        // limpiaTabla(arrayNodosTR);
        // arrayNodosTR = muestraTablaConDatos(arraySociosOrdenNombre);
    }

    if (orden.value == "apellidos") {
        arrayCoincidenciasFiltrosBuscar.sort(function (a, b) {
                                                            let apellidoA = ignorarTildes(a.apellidos);
                                                            let apellidoB = ignorarTildes(b.apellidos);
                                                            if (apellidoA < apellidoB) return -1;
                                                            if (apellidoA > apellidoB) return 1;
                                                            return 0;
                                                        });

        // limpiaTabla(arrayNodosTR);
        // arrayNodosTR = muestraTablaConDatos(arraySociosOrdenApellido);
    }

    if (orden.value == "jovenes") {
        arrayCoincidenciasFiltrosBuscar.sort((a, b) => {return aniosCumplidosHoy(a.fechaNacimiento) 
                                                                    - aniosCumplidosHoy(b.fechaNacimiento)});

        // limpiaTabla(arrayNodosTR);
        // arrayNodosTR = muestraTablaConDatos(arraySociosOrdenJovenes);
    }
    
    if (orden.value == "antiguos") {
        arrayCoincidenciasFiltrosBuscar.sort((a, b) => {return aniosCumplidosHoy(b.fechaNacimiento) 
                                                                    - aniosCumplidosHoy(a.fechaNacimiento)});

        // limpiaTabla(arrayNodosTR);
        // arrayNodosTR = muestraTablaConDatos(arraySociosOrdenAntiguos);
    }

    limpiaTabla(arrayNodosTR);
    arrayNodosTR = muestraTablaConDatos(arrayCoincidenciasFiltrosBuscar);
}

function ignorarTildes(cadena) {

    return cadena.toLowerCase()
            .replace(/á/gi, "a")
            .replace(/é/gi, "e")
            .replace(/í/gi, "i")
            .replace(/ó/gi, "o")
            .replace(/ú/gi, "u");

            
}

function muestraFechaHoyConFormato(fecha1) {

    let fecha = new Date(fecha1);
    let diaSemana = fecha.getDay();

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

    let diaMes = fecha.getDate();

    let mes = fecha.getMonth();

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

    let anio = fecha.getFullYear();

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

<td data-label="Actividades">
    <span class="chips">

        <span class="chip">natación</span>
        <span class="chip">yoga</span>
    </span>
</td>

<td data-label="Cuota" class="num">35.00 €</td> */

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
    let elementoTDedad = createNode("td", aniosCumplidosHoy(socio.fechaNacimiento).toString(), "", "", [{"data-label":"Edad"}, {class: "num"}]);
    elementoTR.appendChild(elementoTDedad);

    //PARA LAS ACTIVIDADES
    let elementoTDactividades = createNode("td", "", "", "", [{"data-label":"Actividades"}]);
    elementoTR.appendChild(elementoTDactividades);
    let spanACTS1 = createNode("span", "", "", "", [{"class":"chips"}]);
    elementoTDactividades.appendChild(spanACTS1);
    for (let cont in socio.actividades) {

        let spanDeCadaActi = createNode("span", socio.actividades[cont], "", "", [{"class":"chip"}]);
        spanACTS1.appendChild(spanDeCadaActi);
    }


    let elementoTDcuota = createNode("td", saneaCuota(socio.cuota) + " €", "", "", [{"data-label":"Cuota"},{"class":"num"}]);
    elementoTR.appendChild(elementoTDcuota);

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

    return anios;

}

function saneaCuota(enteroCuota) {

    return enteroCuota.toPrecision(4);

}

function muestraTablaConDatos(listaSocios) {
    let nodoTRparaTabla;
    let arrayNodosTR = [];

    //recorrer socios para insertar los datos con nodos en la tabla
    for (let cont = 0; cont < listaSocios.length; cont++) {

        nodoTRparaTabla = creaNodoSocioParaTabla(listaSocios[cont]);

        //añadimos el nodo al array para luego devolverlo:
        arrayNodosTR.push(nodoTRparaTabla);

        tbody.appendChild(nodoTRparaTabla);
    }

    return arrayNodosTR; //esto son todos los tr en un array
}

function limpiaTabla(arrayNodosABorrar) {

    for (let i in arrayNodosABorrar) {
        tbody.removeChild(arrayNodosABorrar[i]);
    }
    
}