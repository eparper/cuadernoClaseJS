const mainHTML = document.getElementById("main1");

//crear un botón dentro del main
let boton = document.createElement("input");
//cambiamos el type y el value del botón
boton.setAttribute("type", "button");
boton.setAttribute("value", "Cambiar color");
mainHTML.appendChild(boton);



//guardar el primer color
// colorPrimero = mainHTML.style.backgroundColor;

// boton.onclick = function () {

//     if (mainHTML.style.backgroundColor == colorPrimero) {
//         mainHTML.style.backgroundColor = "yellow";
//     }
//     else 
//         mainHTML.style.backgroundColor = colorPrimero;

// } 

//mainHTML.style.backgroundColor = "rgb(101, 255, 112)";

/*
Al pulsar el botón de cambiar color, cambiamos 
el color de forma aleatoria
*/
boton.onclick = function () {

    
    // let rgb1 = Math.random() * (1000 - (1000 - 255));
    let rgb1 = Math.random() * 256;
    rgb1 = Math.round(rgb1);

    let rgb2 = Math.random() * 256;
    rgb2 = Math.round(rgb2);

    let rgb3 = Math.random() * 256;
    rgb3 = Math.round(rgb3);

    
    mainHTML.style.backgroundColor = "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";

    
}

//---------------------------------------------------
//botón Hello Universe!
var newButtonMain = document.createElement("button");

//para meterle entre las etiquetas de button el nombre del botón
newButtonMain.innerHTML = "Hello Universe!";
//cambiarle más estilos al botón Hello Universe!
newButtonMain.style.backgroundColor = "pink";
newButtonMain.style.border = "1px solid white";
newButtonMain.style.borderRadius = "15px";
newButtonMain.style.padding = "0.5%";
newButtonMain.style.margin = "1%";

//añadir el botón a la web
mainHTML.appendChild(newButtonMain);

//al pulsar el botón Hello Universe! se lanza un console.log y un alert
newButtonMain.addEventListener("click", function () {
    console.log("Dentro de la función de evento de newButtonMain");
    alert("Has pulsado el botón");
});

//--------------------------------------------------------------------

//pruebas de tipos-----------------------------------

let userName = "Pepe";
console.log("Nombre de usuario logueado " + userName);

userName = 5;
console.log("Valor de userName: " + userName);

userName = true;
console.log("Valor de userName: " + userName);

userName = "Ana";
console.log("Valor de userName: " + userName);

userName = 6.89;
console.log("Valor de userName: " + userName);

//---------------------------------------------------
//botón Sumar números
var newButtonMain2 = document.createElement("button");
newButtonMain2.innerHTML = "Sumar números";
mainHTML.appendChild(newButtonMain2)

//al pulsar en el botón de Sumar números,
//sale una nueva parte en la interfaz
newButtonMain2.addEventListener("click", function() {
    prepararInterfaz();
}); 

//nuevas partes que aparecen al pulsar el botón:
var bResultado = document.createElement("button");
bResultado.innerHTML = "Sumar";

let inputNum1 = document.createElement("input");
let inputNum2 = document.createElement("input");
let h1 = document.createElement("h1");


/**
 * Función que hace que los elementos nuevos se unan a la interfaz del main
 */
function prepararInterfaz() {
    
    h1.innerHTML = "Suma dos números";
    mainHTML.appendChild(h1);

    mainHTML.appendChild(inputNum1);
    mainHTML.appendChild(inputNum2);
    mainHTML.appendChild(bResultado);

    //al pulsar el botón Sumar, se llama a la otra función sumarYMostrar:
    bResultado.onclick = function () {
        sumarYMostrar(parseFloat(inputNum1.value), parseFloat(inputNum2.value))();
    }
    
}

let h1Result = document.createElement("h1");
let h2ResultadoAdivinado = document.createElement("h1");

/**
 * AQUÍ******************************************
 * @param {*} num1 
 * @param {*} num2 
 */
function sumarYMostrar(num1, num2) {
    let resultado = num1 * num2;
    
    

    return function () {
        
        resultado = resultado + 1;

        h1Result.innerHTML = resultado;
        mainHTML.appendChild(h1Result);

        
        h2ResultadoAdivinado.innerHTML = "Has desbloqueado el número especial";

        if (resultado == 100) {
            mainHTML.appendChild(h2ResultadoAdivinado);
        }
        else 
            throw Error("No has desbloqueado el número especial");

    }

}

//throw Exception("Error de prueba");

/*******************COMENTARIOS********************** */

//breve explicación al lado de funciones, variables, etc.

/*
Explicación para funciones
*/

/**
 * JSdoc para funciones
 * @param items y breve explicación del parámetro items
 * @param otro y breve explicación del parámetro otro
 * @returns breve explicación de lo que devuelve
 * 
 */


//********************************************* */
let a = 5;
var b = 10;

console.log("Valor de a: " + a + ". Valor de b: " + b);

if (a < 10) {
    showA();
}

//---------------FUNCIONES------------------

function showA() {
    console.log("valor de a es " + a);
}

//********************************************* */
//********************************************* */
var a2 = 5;
var b2 = 10;

console.log("Valor de a: " + a2 + ". Valor de b: " + b2);

//se machacan los valores de las variables globales:
if (true) {
    var a2 = 100;
    var b2 = 1000;

    console.log("[Dentro del if] Valor de a: " + a2 + ". Valor de b: " + b2);
}

//aquí siguen machacados los valores de las variables globales (100 y 1000)
console.log("Valor de a: " + a2 + ". Valor de b: " + b2);


//importante que el contador i se haga con let para que sea local al bucle
// for (let i = 0; i < myArray.length; i++) {
//     //....
// }

//---------------FUNCIONES------------------


//---------------------TYPEOF--------------------
var saludo1 = "Hello universe!";
var saludo2 = "Hello universe!";
var myObject = {
    name: "Pepe",
    surname: "Suárez",
    age: 26
}


console.log("Tipo de saludo1: " + typeof saludo1);
console.log("Tipo de saludo2: " + typeof saludo2);

saludo1 = true;
console.log("Tipo de saludo1: " + typeof saludo1);
saludo1 = 2;
console.log("Tipo de saludo1: " + typeof saludo1);

console.dir("[Tipo de myObject: " + typeof myObject + "]. Alumno: " + myObject);
console.dir(myObject);

console.table(myObject);

const codigo = 404;
console.error("Error: explicación del error", codigo);

console.warn("Aviso: la web es escrita en JavaScript");

//*************************************************************** */

var a3 = 5;

console.log("Valor de a es: " + a3);

const inputIrSumando = document.createElement("input");
//cambiamos el type y el value del botón
inputIrSumando.setAttribute("type", "number");
mainHTML.appendChild(inputIrSumando);

//se va sumando en tiempo real
inputIrSumando.addEventListener("input", function () {

    a3 += parseInt(this.value);
    console.log("Valor de a3 es: " + a3);
    //el número se va actualizando a 0, o sea, que no se cambia
    this.value = 0;
});

//*************************************************************** */

var num = 5;
var alumno = ["Pepe", true, 5.67, null, {name:"Ana", curso:"2ºDAW"}, [7, 8.3, 9.5], 8];

console.log(alumno.length);

//si el índice no existe, devuelve undefined
console.log(alumno[7]);

//añadir de forma manual:
alumno[alumno.length] = "María";

console.dir(alumno);
console.table(alumno);

//*************************************************************** */
const inputTexto = document.createElement("input");
//cambiamos el type y el value del botón
inputIrSumando.setAttribute("type", "text");
mainHTML.appendChild(inputTexto);

inputTexto.innerText = "Hello \n Universe!";

const ta = document.getElementById("ta");

ta.innerText = "Hello \\n Universe!";

//ta.innerHTML = "<span style='color:red'>Valor de a: </span>" + a + ". OK?";

ta.innerHTML = `<span style='color:red'>Valor de a: </span> ${a}. OK?`;

//*************************************************************** */

var a4 = 5;

//=== estricto y == no estricto
if (a4 == "5") {
    console.log("a es igual a 5"); //entrará por esta opción
}
else
    console.log("a es distinto a 5");
//-------------------------------------------
if (a4 === "5") {
    console.log("a es igual a 5"); 
}
else
    console.log("a es distinto a 5"); //entrará por esta opción porque compara también tipos

//*************************************************************** */

var myObject2 = new Object({name:"ANA", surname:"Pérez", age:19, phone: "234234234"});

delete myObject2.phone;

console.log(myObject2);

//aparecen undefined porque hemos borrado la propiedad
console.log(myObject2.phone);
//es lo mismo que lo de arriba
console.log(myObject2["phone"]);

//*************************************************************** */
console.log(this);
document.getElementById("numItemsCarrito").addEventListener("blur", function () {
    console.log(this);
});

//*************************************************************** */

//se puede hacer con try catch
//si el número de datoNumerico se coge de un input, habría que usar 
//parseInt porque el valor que se recoge del .value es string

// let datoNumerico = 4;
// if (datoNumerico == 0) {
//     console.log("Error: no puede ser 0");
// }
// else if (datoNumerico >= 1 && datoNumerico < 4) {
//     console.log("Muy mal");
// }
// else if (datoNumerico < 7) {
//     console.log("Mal");
// }
// else if (datoNumerico <= 9) {
//     console.log("Bien");
// }
// else if (datoNumerico == 10) {
//     console.log("Muy bien");
// }
// else {
//     console.log("Error: valor no válido");
// }


//con switch

// switch(datoNumerico) {
//     case 1:
//     case 2:
//     case 3:
//         alert("Muy mal");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         alert("Mal");
//         break;
//     case 7:
//     case 8: 
//     case 9:
//         alert("Bien");
//         break;
//     case 10:
//         alert("Muy bien");
//         break; 
//     default:
//         alert("Error: valor no válido");
// }

//*************************************************************** */

let h11 = document.getElementById("h11");

var miArray = [1,2.5,3,"Pepe",4,5,6,true,7,8,false,9,false,10];

// for (let i = 0; i < miArray.length; i++) {
//     h11.innerHTML += "<br>" + miArray[i];
// }

//***************************BUCLE FOR IN************************************ */
//no hace falta poner let, ya crea la variable local
// for (i in miArray) {
//     h11.innerHTML += "<br>" + miArray[i];
// }

//***************************BUCLE FOR OF************************************ */

//ahora no es el índice sino el propio elemento elem

// for (let elem of miArray) {
    
//     if (!(typeof elem == "boolean")) {
//         h11.innerHTML += "<br>" + elem;
//     }
//     else
//         break; //en cuanto el elemento sea booleano, ya no muestra más elementos
// }

// h11.innerHTML += "<span style='color:blue;'>Salimos con break;</span>";

// for (let elem of miArray) {
    
//     if (!(typeof elem == "boolean")) {
//         h11.innerHTML += elem + "<br>";
//     }
//     else
//         continue; //en cuanto el elemento sea booleano, saltamos ese elemento y continuamos
// }

// h11.innerHTML += "<span style='color:blue;'>Salimos con continue;</span>";

//***************************FUNCIONES************************************ */

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const btnSumar = document.getElementById("btnSumar");

//para meterle entre las etiquetas de button el nombre del botón
btnSumar.innerHTML = "btnSumar";
//cambiarle más estilos al botón Hello Universe!
btnSumar.style.backgroundColor = "pink";
btnSumar.style.border = "1px solid white";
btnSumar.style.borderRadius = "15px";
btnSumar.style.padding = "0.5%";
btnSumar.style.margin = "1%";

// btnSumar.onclick = doSuma;

// let result = doSuma(56.77, 77);
// console.log("Resultado de la suma: " + result);

// function doSuma(dato_1, dato_2) {
//     console.dir(arguments);// array arguments solo por código los parámetros, los de la interfaz no los coge
//     //si llamo a la función con datos, coge los datos, pero así tamnbién sirve 
//     //en el onclick cuando no le pasamos los datos.
//     let a = dato_1 || parseFloat(numero1.value); //dos barras es el or normal y una barra | es para binarios
//     let b = dato_2 || parseFloat(numero2.value);

//     let result = 0;

//     // if ((typeof a == "number") && (typeof b == "number"))
//     //     if ((dato_1) && (dato_2)) //comprobamos si las variables tienen un valor válido
//     //         result = a + b;

//     if ((typeof a == "number") && (typeof b == "number")) {
//         result = a + b;
//         h11.innerHTML = "Resultado: " + result;
//         // numero1.value = "0";
//         // numero2.value = "0";
//     }
//     else
//         h11.innerHTML = "Valores no válidos para hacer la suma.";

//     return result;
// }

//**********************array arguments************************

let result = doSuma(56.77, 77);
console.log("Resultado de la suma: " + result);

result = doSuma(56.77, 77, 555);
console.log("Resultado de la suma: " + result);

result = doSuma(56.77, 77, 555, 45, 83, 39);
console.log("Resultado de la suma: " + result);


function doSuma() {
    

    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    // for (i in arguments) {
    //     result += arguments[i];
    // }

    // for (elem of arguments) {
    //     result += elem;
    // }

    h11.innerHTML = "Resultado: " + result;

    return result;
}


//******************REST y SPREAD***************** */
function doSuma(a, b, ...restoOperadores) {
    

    console.log("REST: " + restoOperadores);
    let result = a + b;

    

    for (elem of restoOperadores) {
        result += elem;
    }

    h11.innerHTML = "Resultado: " + result;

    return result;
}

function doSuma(...restoOperadores) {
    

    console.log("REST: " + restoOperadores);
    let result = a + b;

    

    for (elem of restoOperadores) {
        result += elem;
    }

    h11.innerHTML = "Resultado: " + result;

    return result;
}

//**********************SPREAD NO LO USAMOS CASI***************************** */

//*********************FUNCIONES ANÓNIMAS***************************** */

btnSumar.addEventListener("click", function () {
    alert("Has pulsado el botón");
});

btnSumar.onclick = function () {
    alert("Has pulsado el botón");
};

btnSumar.onmouseover = function () {
    this.style.backgroundColor = "#446812"; //cambiar el color del boton
    this.style.color = "#fff";
}

btnSumar.onmouseleave = function () {
    this.style.backgroundColor = ""; //cambiar el color del boton
    this.style.color = "";
}

//*********************FUNCIONES ARROW***************************** */
//NO SE PUEDE USAR THIS EN FUNCIONES ARROW, PARA EVENTOS COMO BOTONES ONCLICK, 
//MEJOR NO USAR LAS FUNCIONES ARROW
btnSumar.addEventListener("click", () => {
    alert("Has pulsado el botón");
});

btnSumar.onclick = () => { //si es un solo parámetro, no hay que poner ni los paréntesis
    alert("Has pulsado el botón");
};

btnSumar.onmouseover = () => {
    btnSumar.style.backgroundColor = "#446812"; //cambiar el color del boton
    btnSumar.style.color = "#fff";
}

btnSumar.onmouseleave = () => {
    btnSumar.style.backgroundColor = ""; //cambiar el color del boton
    btnSumar.style.color = "";
}

/************************TRY CATCH FINALLY************************** */
// 1. CUANDO EL USUARIO INTRODUZCA DATOS POR UNA INTERFAZ
// 2. CUANDO HAGAMOS CONEXIONES ASÍNCRONAS, EL SERVIDOR PUEDE DAR ERROR

//uno de los dos datos numericos es menor de 0 muestre error, 
// filtrar que no esté vacio, que no sea un número y que el número no sea negativo

let nume1 = document.getElementById("nume1");
let nume2 = document.getElementById("nume2");
const errores = document.getElementById("errores");
const bSumar = document.getElementById("bSumar");

// bSumar.onclick = function () {
//   try {
//     //filtros
//     if (nume1.value == "" || nume2.value == "") {
//       throw new Error("Error en los inputs", {cause: "no pueden estar vacíos"});
//     } 

//     nume1 = parseFloat(nume1.value);
//     nume2 = parseFloat(nume2.value);

//     if (isNaN(nume1) || isNaN(nume2)) {
//       throw new Error("Los valores no son números");
//     } 
//     if (parseFloat(nume1) < 0 || parseFloat(nume2) < 0)
//       throw new Error("Los números no pueden ser negativos");

//     //ponemos el resultado aquí para asegurarnos de que no ha entrado por ningún error
//     alert("Resultado es: " + (nume1 + nume2));

//   } catch (err) {
//     errores.innerText = err + ", " + err.cause;
//   }
// };


//otra forma:

document.getElementById("nume1").onfocus = function () {
    this.value = "";
    document.getElementById("errores").innerHTML = "";
}

document.getElementById("nume2").onfocus = function () {
    this.value = "";
    document.getElementById("errores").innerHTML = "";
}

bSumar.onclick = function () {
  try {
    //filtros
    errorFilter(nume1.value);
    errorFilter(nume2.value);

    //ponemos el resultado aquí para asegurarnos de que no ha entrado por ningún error
    alert("Resultado es: " + (parseFloat(nume1.value) + parseFloat(nume2.value)));
    

  } catch (err) {
    errores.innerText = err + ", " + err.cause;
  }
};

/**********************FUNCIONES**************************** */
/**
 * Comprueba si el dato que se pasa es un número positivo.
 * EJECUTAR SIEMPRE DENTRO DE TRY CATCH
 * @param valor a filtrar
 * 
 */
function errorFilter(data) {

    errores.innerText = "";

    //filtros
    if (data == "") {
      throw new Error("Error en los inputs", {cause: "no pueden estar vacíos"});
      
    } 

    data = parseFloat(data);
    
    if (isNaN(data)) {
      throw new Error("Los valores no son números");
    } 
    if (data < 0)
      throw new Error("Los números no pueden ser negativos");
}

