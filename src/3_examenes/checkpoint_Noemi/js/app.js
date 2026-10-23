// Catálogo de servicios: el id coincide con el id del input del HTML
const SERVICIOS = [
  { id: "aceite", nombre: "Cambio de aceite", precio: 45 },
  { id: "filtros", nombre: "Cambio de filtros", precio: 30 },
  { id: "frenos", nombre: "Pastillas de freno (eje)", precio: 80 },
  { id: "neumaticos", nombre: "Neumático", precio: 70 },
  { id: "alineado", nombre: "Alineado de dirección", precio: 35 },
];


const btnPresupuesto = document.getElementById("btnPresupuesto");
const btnLimpiar = document.getElementById("btnLimpiar");
const mensaje = document.getElementById("mensaje");
const presupuesto = document.getElementById("presupuesto");
const total = document.getElementById("total");
const cliente = document.getElementById("cliente");
const matricula = document.getElementById("matricula");

const vehiculo = document.getElementById("vehiculo");

const aceite = document.getElementById("aceite");
const filtros = document.getElementById("filtros");
const frenos = document.getElementById("frenos");
const neumaticos = document.getElementById("neumaticos");
const alineado = document.getElementById("alineado");

const pago = document.getElementById("pago");
const hTotal = document.getElementById("hTotal");


let base = 0;
let descuento = 0;
let iva = 0;
let recargo = 0;

btnPresupuesto.onclick = function () {
  try {

    

    mensaje.innerHTML = "";
    presupuesto.innerHTML = "";
    total.innerHTML = "";



    //el nombre del cliente obligatorio
    if (cliente.value == "") {
      throw "El nombre del cliente es obligatorio";
    }

    //matricula 7 caracteres
    if ((matricula.value).length !== 7) {
      throw "La matrícula debe tener 7 caracteres";
    }

    //------------------

    //forma de pago obligatoria
    if (pago.value == "") {
      throw "La forma de pago es obligatoria";
    }

    //vehiculo obligatorio
    if (vehiculo.value == "") {
      throw "La elección del vehículo es obligatoria";
    }

    //-----------
    //Cantidades entre 0 y 4
    if (!cantidadEntre0y4(aceite) || !cantidadEntre0y4(filtros) || !cantidadEntre0y4(frenos) 
        || !cantidadEntre0y4(neumaticos) || !cantidadEntre0y4(alineado)) {

          throw "Las cantidades deben ser entre 0 y 4";
    }

    //comprobar que todos no sean 0
    if (!comprobarTodos0(aceite) && !comprobarTodos0(filtros) && !comprobarTodos0(frenos) 
        && !comprobarTodos0(neumaticos) && !comprobarTodos0(alineado)) {

          throw "Tienes que pedir al menos un servicio (que alguna cantidad sea distinta de 0)";
    }

    // Una moto no puede llevar más de 2 neumáticos ni hacerse un alineado de dirección.
    if (vehiculo.value == "moto" && (neumaticos.value > 2 || alineado.value > 0)) {
      throw "Las motos no pueden llevar más de 2 neumáticos ni hacerse un alineado de dirección";
    }

    //operaciones**********************************************
    base = calcularBase(vehiculo.value);

    if (base >= 150) {
      descuento = base * (5/100);
    }
    else if (base >= 300) {
      descuento = base * (10/100);
    }

    baseFinal = base - descuento;
    

    if (pago.value == "financiado")
      recargo = baseFinal * (5/100)

    precioRecargo = baseFinal + recargo;

    //IVA
    iva = precioRecargo * (21/100);

    precioFinal = precioRecargo + iva;


    //Desglose
    
    presupuesto.innerHTML = "Presupuesto para " + cliente.value + "<br>" + 
                            "Matrícula: " + matricula.value + "<br>" +
                            "Base: " + base + "<br>" +
                            "Descuento: " + descuento + "<br>" +
                            "Recargo: " + recargo + "<br>" + 
                            "IVA: " + iva;


    total.value = precioFinal;

    hTotal.innerHTML = precioFinal;
    


    
  } catch (err) {

    mensaje.innerHTML = "Error: " + err;
    presupuesto.innerHTML = "";
    total.innerHTML = "";

  }
};


function cantidadEntre0y4(input) {

  let sw = false;

  if (input.value < 0 || input.value > 4) {
    sw = false;
  }
  else
    sw = true;

  return sw;
}

function comprobarTodos0(input) {

  let sw = false;

  if (input.value == 0) {
    sw = false;
  }
  else
    sw = true;

  return sw;
}

function calcularBase(vehiculo) {

  let cantidadServicios = 0;
  //let cantidad = parseInt(aceite.value) + parseInt(filtros.value) + parseInt(frenos.value) + parseInt(neumaticos.value) + parseInt(alineado.value);

  switch (vehiculo) {
    case "moto": {

      for (let elem in SERVICIOS) {
        
        cantidadServicios = cantidadServicios + cantidadServ(SERVICIOS[elem].id) * (SERVICIOS[elem].precio * 0.7);
      }

    }; break;
    case "turismo": {
      for (let elem in SERVICIOS) {
        cantidadServicios = cantidadServicios + cantidadServ(SERVICIOS[elem].id) * (SERVICIOS[elem].precio * 1);
      }
    }; break;
    case "suv": {
      for (let elem in SERVICIOS) {
        cantidadServicios = cantidadServicios + cantidadServ(SERVICIOS[elem].id) * (SERVICIOS[elem].precio * 1.2);
      }
    }; break;
    case "furgoneta": {
      for (let elem in SERVICIOS) {
        cantidadServicios = cantidadServicios + cantidadServ(SERVICIOS[elem].id) * (SERVICIOS[elem].precio * 1.35);
      }
    }; break;
  }
  
  return cantidadServicios;
  
}

function cantidadServ(servicio) {
  switch (servicio) {
    case "aceite": {
      cantidad = aceite.value;
    }; break;
    case "filtros": {
      cantidad = filtros.value;
    }; break;
    case "frenos": {
      cantidad = frenos.value;
    }; break;
    case "neumaticos": {
      cantidad = neumaticos.value;
    }; break;
    case "alineado": {
      cantidad = alineado.value;
    }; break;

  }

  return cantidad;
}