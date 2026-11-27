//********************************************************************** */
//******************************FUNCIONES******************************* */
//********************************************************************** */

//RESUMEN DE FUNCIONES:
// actualizaEstadisticas() -- actualiza las estadísticas
// sacaDNI(dni) -- convierte dni del alta socio a mayúscula 
// sacaActividades() -- saca actividades del check de alta socio
// sacaFechaAlta() -- saca fechaAlta del alta socio en formato 2022-10-10 (con guiones)
// sacaFecha(fecha) -- convierte una fecha de 10/10/2010 a -> 2010-10-10
// sacaNombre(nombre) -- convierte el nombre o la palabra solo con la primera mayúscula, el resto minúsculas
// sacaSiguienteID() -- saca el siguiente id al último que corresponda
// validaCheckActividades() -- valida que al menos un check esté seleccionado (o checked)
// validaFechaNacimiento(fecha) -- valida si la fecha de nacimiento es correcta o no, por ejemplo no puedes ser menor de 14 años ni la fecha puede ser futura
// yaHayDNIexistente(dni, campoError, cadenaError) -- comprueba si el dni pasado se encuentra entre los socios para ver si ya existe o no
// validaDNI(dni, campoError, cadenaError) -- comprueba que el dni tenga una letra correcta
// validaCampos(expresionRegular, valor, campoError, cadenaError) -- función genérica valida si una expresión regular coincide con el valor pasado
// muestraFicha(socio) -- muestra la ficha para el socioo indicado



/**
 * Función que no necesita parámetros, solo actualiza las estadísticas
 * 
 */
function actualizaEstadisticas() {
    //num socios
    document.getElementById("stat-total").innerHTML = socios.length;

    //ingresos mensuales
    let ingresosMensuales = 0;
    let edades = 0;
    let todasEdades = [];
    let todasActividades = [];

    for (let obSocio of socios) {
        ingresosMensuales += obSocio.cuota;
        edades += aniosCumplidosHoy(obSocio.fechaNacimiento); 
        todasEdades.push(aniosCumplidosHoy(obSocio.fechaNacimiento));

        for (let act in obSocio.actividades) {
            todasActividades.push(obSocio.actividades[act]);
        }
        
        
    }
    document.getElementById("stat-ingresos").innerHTML = saneaCuota(ingresosMensuales) + " €";

    

    document.getElementById("stat-cuota-media").innerHTML = saneaCuota(ingresosMensuales/socios.length) + " €";
    
    document.getElementById("stat-edad-media").innerHTML = (edades / socios.length).toFixed(1) + " años";

    todasEdades.sort();
    document.getElementById("stat-edad-min").innerHTML = todasEdades[0].toString() + " años";
    document.getElementById("stat-edad-max").innerHTML = todasEdades[todasEdades.length - 1].toString() + " años";

    let contNatacion = 0;
    let contYoga = 0;
    let contPadel = 0;
    let contMusculacion = 0;
    let contSpinning = 0;
    let contPilates = 0;

    for (let i in todasActividades) {
        if (todasActividades[i] == "natación")
            contNatacion++;

        if (todasActividades[i] == "yoga")
            contYoga++;

        if (todasActividades[i] == "pádel")
            contPadel++;

        if (todasActividades[i] == "musculación")
            contMusculacion++;

        if (todasActividades[i] == "spinning")
            contSpinning++;

        if (todasActividades[i] == "pilates")
            contPilates++;

    }

    let arrayContadoresActividades = {
        "natación": contNatacion, 
        "yoga": contYoga,             
        "pádel": contPadel, 
        "musculación": contMusculacion, 
        "spinning": contSpinning, 
        "pilates": contPilates
    };

    let actividadMayor = "";
    let numeroMayor = 0;

    for (let actividad in arrayContadoresActividades) {
        if (arrayContadoresActividades[actividad] > numeroMayor) {
            numeroMayor = arrayContadoresActividades[actividad];
            actividadMayor = actividad;
        }
    }

    document.getElementById("stat-actividad").innerHTML = actividadMayor  + " (" + numeroMayor + " socios)";

    let menores = todasEdades.filter(function (edad) {
        return edad < 18;
    });

    if (menores.length > 0) {
        document.getElementById("stat-menores").innerHTML = "Sí";
    }
    else {
        document.getElementById("stat-menores").innerHTML = "No";
    }


    let todosTienenACTS = [];
    for (let obSocio of socios) {

        if (obSocio.actividades.length > 0) { //tienen actividad
            todosTienenACTS.push(true);
        }
        else {
            todosTienenACTS.push(false);
        }
    }

    if (todosTienenACTS.includes(false)) { //alguno no tiene actividad
        document.getElementById("stat-todos-actividad").innerHTML = "No";
    }
    else {
        document.getElementById("stat-todos-actividad").innerHTML = "Sí";
    }

    //socios veteranos
    let veteranos = socios;

    veteranos.sort((a, b) => new Date(a.fechaAlta) - new Date(b.fechaAlta));

    document.getElementById("socioVeterano1").innerHTML = veteranos[0].nombre + " " + veteranos[0].apellidos;
    document.getElementById("socioVeterano2").innerHTML = veteranos[1].nombre + " " + veteranos[1].apellidos;
    document.getElementById("socioVeterano3").innerHTML = veteranos[2].nombre + " " + veteranos[2].apellidos;
    
    document.getElementById("fecha1").innerHTML = sacaFechaFormatoCorto(veteranos[0].fechaAlta);
    document.getElementById("fecha2").innerHTML = sacaFechaFormatoCorto(veteranos[1].fechaAlta);
    document.getElementById("fecha3").innerHTML = sacaFechaFormatoCorto(veteranos[2].fechaAlta);
    

    //dominios
    let dominios = [];
    for (let obSocio of socios) {

        let partes = obSocio.email.split("@");
        let dominio = partes[1];

        if (!dominios.includes(dominio)) { //si el dominio aún no está, se añade
            dominios.push(dominio);
        }
        
    }

    let padreDominios = document.getElementById("stat-dominios");

    //limpiamos antes de añadir porque con el setInterval lo añadiría muchas veces si no limpiamos
    padreDominios.innerHTML = "";

    for (let i in dominios) {

        let elemento = createNode("li", dominios[i], "", "", [{class: "chip"}]);
        padreDominios.appendChild(elemento);
    }
    
    

}


function sacaDNI(dni) {

    return dni.trim().toUpperCase();

}

function sacaActividades() {

    let arrayActividades = [];

    for (let i in checkActividades) {
        if (checkActividades[i].checked) {
            arrayActividades.push(checkActividades[i].value);
        }
    }

    return arrayActividades;
}

function sacaFechaAlta() {

    let hoy = new Date();

    let anio = hoy.getFullYear();
    let mes = hoy.getMonth() + 1;
    let dia = hoy.getDate();

    return anio + "-" + mes + "-" + dia;


}

function sacaFecha(fecha) {

    let partes = fecha.split("/");

    return partes[2] + "-" + partes[1] + "-" + partes[0];
}

function sacaNombre(nombre) {

    let partes = nombre.split(" ");
    let arrayNombre = [];

    for (let i in partes) {

        let primeraLetra = partes[i].charAt(0).toUpperCase();
        let resto = partes[i].substr(1).toLowerCase(); //desde el 1 hasta el final
        //uniomos la primera letra con el resto de la palabra
        let nombreCompleto = primeraLetra + resto; //partes[i].substr(1, nombre.length - 1); 
        arrayNombre.push(nombreCompleto);
    }

    return arrayNombre.join(" ");
}

function sacaSiguienteID() {
    let arrayIDs = [];

    for (let obSocio of socios) {
        arrayIDs.push(obSocio.id);
    }

    let arrayIDordenado = arrayIDs.sort();
    let ultimoElem = arrayIDordenado[arrayIDordenado.length-1];

    //le quitamos SOC-
    let soloNUM = ultimoElem.replace("SOC-", "");
    let proxNum = parseInt(soloNUM) + 1;

    let cuatroDigitos = proxNum.toString().padStart(4, "0");

    //le ponemos SOC-
    let idFinal = "SOC-" + cuatroDigitos;

    return idFinal;

}

function validaCheckActividades() {

    let arrayChecks = [];

    for (let i in checkActividades) {
        if (checkActividades[i].checked) {
            arrayChecks.push(checkActividades[i]);
        }
    }

    if (arrayChecks.length >= 1) {
        document.getElementById("error-actividades").innerHTML = "";
        return true;
    }

    document.getElementById("error-actividades").innerHTML = "Debes elegir al menos 1 actividad";
    return false;
}

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
    else {
        //la fecha es falsa
        errorNacimiento.innerHTML = "Fecha incorrecta";
        return false;
    }
}

function yaHayDNIexistente(dni, campoError, cadenaError) {
    let dniMayus = dni.trim().toUpperCase();

    let existe = socios.some(obSocio =>
        obSocio.dni.trim().toUpperCase() === dniMayus
    );

    //console.log("DNI introducido:", dniMayus);
    //console.log("DNIs existentes:", socios.map(socio => socio.dni));
    //console.log("¿Está repetido?:", existe);

    if (existe) { //significa que sí existe, entonces debe dar un error
        campoError.innerHTML = cadenaError;
        return false
    }

    campoError.innerHTML = "";
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

    let cadenaActividades = sacaActividades1(socio).join(", ");
    document.getElementById("ficha-actividades").innerHTML = cadenaActividades;

    document.getElementById("ficha-cuota").innerHTML = saneaCuota(socio.cuota) + " €";
    document.getElementById("ficha-curiosidad").innerHTML = "Tiene " + sacaVocales(nombreCompleto).length + " vocales";

}

function sacaVocales(nombreCompleto) {

    let regExp = new RegExp("[aeiou]", "gi")

    let nombre = ignorarTildes(nombreCompleto);

    //esto es un array
    let coincidencias = nombre.match(regExp);

    return coincidencias.join("");


}

function sacaActividades1(socio) {
    
    let arrayActividades = socio.actividades;

    return arrayActividades;
}

function diasPasadosDesdeUnaFecha(fechaLimite1, fechaLimite2) {
    let fechaLimite1Date = new Date(fechaLimite1);
    let fechaLimite2Date = new Date(fechaLimite2);

    let diferencia = Math.abs(fechaLimite2Date - fechaLimite1Date);

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

    if (orden.value == "cuota") {
        arrayCoincidenciasFiltrosBuscar.sort((a, b) => {return b.cuota - a.cuota});

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

    //PARA LA ANTIGüEDAD
    //let hoy = new Date();
    //let dias = diasPasadosDesdeUnaFecha(socio.fechaAlta, hoy);
    let anios = aniosCumplidosHoy(socio.fechaAlta);
    let meses = sacaMeses(socio.fechaAlta);
    let cadenaAntiguedad = (anios == 1? anios + " año": anios + " años") + " y " + 
                            (meses == 1? meses + " mes": meses + " meses");
    let elementoTDantiguedad = createNode("td", cadenaAntiguedad, "", "", [{"class":"num"}]);
    elementoTR.appendChild(elementoTDantiguedad);

    return elementoTR;
}

function sacaMeses(fechaAlta) {
    let hoy = new Date();

    let fechaAlt = new Date(fechaAlta);

    //restamos los años en bruto
    //let anios = hoy.getFullYear() - fechaAlt.getFullYear();


    //si diferenciaMeses da negativo es que el mes de fecha de alta es mayor
    //si diferenciaMeses da positivo es que el mes de hoy es mayor
    //si da 0, es que son iguales los meses;
    const diferenciaMeses = hoy.getMonth() - fechaAlt.getMonth();

    //si diferenciaMeses es menor de 0: le restamos un año a los años brutos porque significa que el mes de cumpleaños no ha llegado aún
    //si los meses son iguales también vamos a comprobar que el día de cumpleaños no haya llegado aún (o sea, que el día de hoy sea menor que el de cumple), 
    //en este caso también se le resta 1 porque no ha llegado su cumpleaños
    // if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
    //     anios--;
    // }

    return diferenciaMeses;

    
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
    
    //let primerNombre = partesNombre[0];
    let primerApellido = partesNombre[partesNombre.length-2]; //le quitamos 2 por el índice y por ser el penúltimo
    let segundoApellido = partesNombre[partesNombre.length-1]; //le quitamos uno por el índice
    //let segundoApellido = partesNombre[2];

    let apellidos = primerApellido  + " " + segundoApellido;

    let letraApellido = segundoApellido.charAt(0);

    //aquí vamos a coger donde empieza el primer apellido


    //devuelve el nombre, primer apellido y letra con punto
    return nombreCompleto.replace(segundoApellido, letraApellido + ".");
    //return primerNombre + " " + primerApellido + " " + letraApellido + ".";
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

    return enteroCuota.toFixed(2);

}

function muestraTablaConDatos(listaSocios) {
    let nodoTRparaTabla;
    let arrayNodosTR = [];

    if (listaSocios.length === 0) {
        //mostrar mensaje de error si no hay nada en la lista
        document.getElementById("vacio").hidden = false;
        document.getElementById("vacio").innerHTML = "No se han encontrado socios";
        return arrayNodosTR;
    }

    //ocultar mensaje de error si hay algo en la lista
    document.getElementById("vacio").hidden = true;

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