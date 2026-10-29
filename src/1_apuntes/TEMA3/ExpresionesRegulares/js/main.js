const info = document.getElementById("info");
const error = document.getElementById("error");
const taPrueba = document.getElementById("taPrueba");
const textNav = document.getElementById("textNav").innerHTML;

const texto = "Frodo lo sacó del boLsiLLo del pantalón, \n bolsillo donde lo guardaba bolsillo enganchado bolsillo a una cadena que le colgaba del cinturón. Lo soltó y se lo alcanzó lentamente al mago. El Anillo se hizo de pronto muy pesado, como si él mismo o Frodo no quisiesen que Gandalf lo tocara.";
info.innerHTML = texto;


//let re1 = /bolsillo/img;
//let re1 = /Bolsillo/i; //es para no distinguir entre mayúsculas y minúsculas

let re2 = new RegExp("bolsillo", "igm");

//método de RegExp que devuelve true (si encuentra la coincidencia) 
// o false (si no la encuentra)
// if (re1.test(texto)) {
//     error.innerHTML = "Encontrado";
// }
// else 
//     error.innerHTML = "NO encontrado";

//otro método de RegExp: exec
let re1 = /Bolsillo/igm; //con la g 
// let result = re1.exec(texto);
// console.log(result);
// console.log("Last Index: " + result.lastIndex);
// result = re1.exec(texto);
// console.log(result);
// result = re1.exec(texto);
// console.log(result);

//con esto encontramos todas las coincidencias
// let result = re1.exec(texto);
// while (result != null) {
    
//     console.log(`Encontrado ${result[0]} en la posición ${result.index}.`);
//     console.log("---------------------------------");
//     result = re1.exec(texto);
// };

//mejoras:
//la primera va con test y la segunda con exec, una sí, una no,
//por eso se muestra una sí y una no
// let result = null;
// let myIndex = re1.lastIndex; //esto es 0
// while (re1.test(texto)) { //ya ha avanzado a una posición
//     re1.lastIndex = myIndex; //ya empieza en 0 el exec
//     result = re1.exec(texto);
//     myIndex = re1.lastIndex; //cogemos el anterior porque ha avanzado con exec
//     console.log(`Encontrado ${result[0]} en la posición ${result.index}.`);
//     console.log("---------------------------------");
    
// };

//******************CON STRING******************* */
// let result = null;
// let myIndex = re1.lastIndex; //esto es 0
// if (texto.search(re1)) { //ya ha avanzado a una posición
//     //re1.lastIndex = myIndex; //ya empieza en 0 el exec
//     //result = re1.exec(texto);
//     result = texto.matchAll(re1); //con matchAll se debe poner el modificador g
//     for (encontrado of result) {
//         console.log(`Encontrado ${encontrado[0]} en la posición ${encontrado.index}.`);
//         console.log("---------------------------------");
//     }
//     //myIndex = re1.lastIndex; //cogemos el anterior porque ha avanzado con exec
    
    
// };

//probando el modificador m
let result = null;
let myIndex = re1.lastIndex; //esto es 0
if ((taPrueba.value).search(re1)) { //ya ha avanzado a una posición
    //re1.lastIndex = myIndex; //ya empieza en 0 el exec
    //result = re1.exec(texto);
    result = (taPrueba.value).matchAll(re1); //con matchAll se debe poner el modificador g
    for (encontrado of result) {
        console.log(`Encontrado ${encontrado[0]} en la posición ${encontrado.index}.`);
        console.log("---------------------------------");
    }
    //myIndex = re1.lastIndex; //cogemos el anterior porque ha avanzado con exec
    
    
};

document.getElementById("textNav").innerHTML = textNav.replaceAll('href="#"', 'href="#"' + 'style="color:green;"')

//texto.match(re1);



//**********************Ejercicio del DNI************************ */
const iBoton = document.getElementById("iBoton");
let dni = document.getElementById("dni");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let urls = document.getElementById("urls");

//se ignoran mayúsculas y minúsculas
let expReg = /^[xyz]?[0-9]{7,8}[a-z]{1}$/i; //la i ignora si es mayúsculas o minúsculas

//expresión de José Luis
let expReg2 = /^([XYZ]\d{7}|\d{8}[A-Z])$/i; //los paréntesis porque lo de que empiece ^ es para todo
let expRegEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
let expRegTelefono = /^((\+\d{2})?\d{9})$/;
let expRegURL = /^https?:\/\/|www\.[\S]+/i;

iBoton.onclick = function (e) {

    e.preventDefault(); //este evento si tienes algo programado de html, no lo hagas.
                        //puesto que lo voy a programar desde javascript

    //dni
    if (expReg.test(dni.value.trim())) //trim por si el usuario mete espacios
        error.innerHTML = "El DNI es correcto";
    else
        error.innerHTML = "El DNI es incorrecto";

    //email
    if (expRegEmail.test(email.value.trim())) //trim por si el usuario mete espacios
        error.innerHTML += "<br>El email es correcto";
    else
        error.innerHTML += "<br>El email es incorrecto";

    //teléfono español

    let myPhone = (telefono.value).trim();
    myPhone = myPhone.replaceAll(" ", "");

    if (expRegTelefono.test(myPhone)) //trim por si el usuario mete espacios
        error.innerHTML += "<br>El teléfono es correcto";
    else
        error.innerHTML += "<br>El teléfono es incorrecto";



    //direcciones web
    //la primera va con test y la segunda con exec, una sí, una no,
    //por eso se muestra una sí y una no
    let result = null;
    let myIndex = expRegURL.lastIndex; //esto es 0
    if (expRegURL.test(urls.value)) { //ya ha avanzado a una posición
        expRegURL.lastIndex = myIndex; //ya empieza en 0 el exec
        result = expRegURL.exec(urls.value);
        myIndex = expRegURL.lastIndex; //cogemos el anterior porque ha avanzado con exec
        console.log(`Encontrado ${result[0]} en la posición ${result.index}.`);
        console.log("---------------------------------");
        
    };


}

//**********************Ejercicio del email************************ */
//no puede empezar por espacio o @ -> /^[^\s@]([\w\d-_])+@([\w\d-_])\.\w{2,}$/
//o también esta: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/


//teléfono español
telefono.addEventListener("input", function () { //en tiempo real con el evento input

    //sumamos todos los caracteres diferentes de espacio en blanco
    
    //---
    if ((this.value.length % 3 == 0) && (this.value.length < 9))
        this.value = this.value + " ";
});