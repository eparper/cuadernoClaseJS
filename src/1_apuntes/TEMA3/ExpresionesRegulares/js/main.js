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