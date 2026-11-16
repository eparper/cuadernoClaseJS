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

const checkActividades = document.getElementsByName("actividades");

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
    arrayTodoOK.push(validaCampos(expRegNombreApellido, altaApellidos.value, errorApellidos, "Apellidos incorrectos"));
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
    arrayTodoOK.push(validaCheckActividades());

    //SI TODO ES CORRECTO, SE AÑADE EL SOCIO:
    if (!arrayTodoOK.includes(false)) {

        let nuevoSocio = {};

        nuevoSocio.id = sacaSiguienteID();
        nuevoSocio.nombre = sacaNombre(altaNombre.value);
        nuevoSocio.apellidos = sacaNombre(altaApellidos.value);
        nuevoSocio.dni = sacaDNI(altaDNI.value);
        nuevoSocio.email = altaEmail.value.toLowerCase();
        nuevoSocio.telefono = altaTlf.value.trim();
        nuevoSocio.fechaNacimiento = sacaFecha(altaNacimiento.value);
        nuevoSocio.fechaAlta = sacaFechaAlta();
        nuevoSocio.actividades = sacaActividades();
        nuevoSocio.cuota = Math.floor(Math.random() * 100) + 1; //la cuota es random de 1 a 100



        //se añade al array de socios
        socios.push(nuevoSocio);

        // console.log("Socio añadido:", nuevoSocio);
        // console.log("Longitud del array:", socios.length);
        // console.log("Último elemento:", socios[socios.length - 1]);
        // console.log("DNIs actuales:", socios.map(socio => socio.dni));

        limpiaTabla(arrayNodosTR);
        arrayNodosTR = muestraTablaConDatos(arrayCoincidenciasFiltrosBuscar);
        filtros();

        //mensaje de que se ha añadido
        document.getElementById("aviso-alta").hidden = false;
        document.getElementById("aviso-alta").innerHTML = "Socio " + nuevoSocio.nombre + 
                                                            " dado de alta con id " + nuevoSocio.id;

        //limpiar datos del formulario
        formAlta.reset();
        
        for (let i in checkActividades) {
            if (checkActividades[i].checked) {
                checkActividades[i].removeAttribute("checked");
            }
        }
    }
    else {
        document.getElementById("aviso-alta").hidden = true;
    }

});

//--------------------------------------------------
//-----------------ESTADÍSTICAS---------------------

actualizaEstadisticas();

setInterval(function () {

    actualizaEstadisticas();
        
}, 100); //