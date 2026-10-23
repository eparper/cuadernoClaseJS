const url = "https://www.marca.com/futbol/real-madrid/2026/10/08/alarma-francia-situacion-futuro-mbappe-real-madrid.html";

const h21 = document.getElementById("h21");

h21.innerHTML = encodeURI(url);

h21.innerHTML += "<hr>" + encodeURIComponent(url);

//********no se usa para evitar inyección de código********* */
eval("h21.innerHTML = 'Hola desde eval'");

h21.innerText = "PI: " + Math.PI;

//de 1 a 100:
h21.innerText = "Random: " + Math.floor((Math.random() * 99) + 1);

//redondeo
h21.innerText = "Round: " + Math.round(7.4);
h21.innerText = "Round: " + Math.round(7.5);

h21.innerText = "Máximo: " + Number.MAX_VALUE;
h21.innerText = "Máximo: " + Number.MIN_VALUE;

//PARA QUE SALGAN DOS DECIMALES
h21.innerText = "Número: " + Math.PI.toFixed(2);

//también lo hace redondeando
var precio = 19.456;
h21.innerText = "Precio: " + precio.toFixed(2);

//deja 3 números, primero coge los enteros y luego los decimales
var precio = 19.456;
h21.innerText = "Precio: " + precio.toPrecision(3);

//sale true o false
h21.innerText = "Número: " + isNaN(2);

//**************CADENAS**************** */
var quijote = "Don Quijote";

var texto = `Lorem ipsum 'dolor' ${quijote} sit amet consectetur adipisicing elit. Necessitatibus ${quijote} commodi non voluptatum harum, aperiam atque exercitationem! Totam dolor autem cupiditate facere cum eveniet, exercitationem molestiae vitae suscipit fugit? Eveniet, fuga.`;

h21.innerText = texto;

h21.innerHTML = "Caracter de la posición 5: " + texto.charAt(4);

h21.innerHTML = "Caracter de la posición 5: " + texto.indexOf("D");

//************** */
// var texto = String.fromCodePoint(13054);

// h21.innerHTML = "Caracter de la posición 5: " + texto;

//*********************** */
h21.innerHTML += texto.slice(5, 55);

//************************* */
var palabras = texto.split(" ");
for (let palabra of palabras) {
    h21.innerHTML += " - " + palabra;
}

//USAR TRIM() PARA RECOGER DATOS DE FORMULARIOS

//*************************************** */
var encontrado = texto.match("Quijote"); //devuelve la primera coincidencia

if (!encontrado)
    h21.innerHTML += "No se ha encontrado";
else
    h21.innerHTML += "<hr>Encontrado: " + encontrado + " en " + encontrado.index;


//matchAll
var encontrado = texto.matchAll("Quijote"); //devuelve la primera coincidencia

for (enc of encontrado) 
    h21.innerHTML += "<hr>Encontrado: " + enc + " en " + enc.index;

//********************** */

var myArray = new Array();

myArray.push("Pepe");
myArray.push(true);
myArray.push("Ana");
myArray.push(25.36);
myArray.push({name:"Adela", surname: "Alcalá", age: 19});
myArray.push(false);

h21.innerHTML += "<hr>";

// myArray.pop(); //ha eliminado el false
// myArray.shift(); //ha eliminado Pepe, que es el primer elemento
// myArray.unshift("hola"); //inserta hola al principio del array

// for (elem of myArray) {
//     h21.innerHTML += " - " + elem;
// }

//push y pop son desde el final del array
//shift y unshift son en el principio del array

//sort ordena
// h21.innerHTML += myArray.sort();


//splice
//a partir de la posicion 1, eliminar 2 elementos, y los demás los inserta
h21.innerHTML = myArray.splice(1, 2, 44, "adiós", "saludo");
