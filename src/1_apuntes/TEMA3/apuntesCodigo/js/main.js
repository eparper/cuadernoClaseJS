const h11 = document.getElementById("h11");

//creación de objeto
let myAlumn = {
    name: "Jhon",
    surname: "Power",
    age: 19,
    active: true,
    mail: "jhon@mail.com"
    
}

myAlumn.grades = [6,7.85,9.25];
myAlumn.age = 20;
delete myAlumn.name;

h11.innerHTML = "Nombre del alumno/a: " + myAlumn.name + ". Nota1: " + myAlumn.grades[0] 
                + ". Edad: " + myAlumn.age;

//crear una variable donde irá luego un objeto
//let myAlumn3 = {};

//constructor
let myAlumn2 = new Object();

myAlumn2.name = "Anne";
myAlumn2.surname = "Flowers";
myAlumn2.age = 21;
myAlumn2.active = false;
myAlumn2.mail = "anne@mail.com";
myAlumn2.grades = [6.9,8.85,10];


delete myAlumn2.name;
//otra forma de asignar valores aparte de myAlumn2.phone (al igual que al acceder al valor):
myAlumn2["phone"] = "666 333 222";

h11.innerHTML += "<hr>Nombre del alumno/a: " + myAlumn2.name + ". Nota1: " + myAlumn2.grades[0] 
                + ". Phone: " + myAlumn2.phone + ". Otra forma de acceder al valor: " + myAlumn2["phone"];


//IMPORTANTE BUCLE FOR OF PARA RECORRER OBJETOS

//enumerable, configurable, writable, value

//cogemos la variable de antes alumn3 para ponerle propiedades
let myAlumn3 = new Object();

Object.defineProperties(myAlumn3, { 
    name: {value: "Pepe", configurable: true, enumerable: true}, 
    surname: {value: "Pérez"},
    age: {value: 23}
    // etc. etc. 
}); 

//aquí lo pone todo a false
//Object.defineProperty(myAlumn3, "age", {configurable: true, enumerable: true, writable: false, value: 23});

h11.innerHTML += "<hr>Nombre del alumno/a: " + myAlumn3.name + ". Edad: " + myAlumn3.age;
console.log("Propiedad enumerable de myAlumn3: " + myAlumn3.name);

//ahora no es iterable
for (data of myAlumn3) {
    console.log("Datos de alumn3: " + data);
}

let myAlumns = new Array(myAlumn, myAlumn2, myAlumn3);

for (let data of myAlumns) {
    console.dir("Datos de alumn: " + Object.keys(data)); //es un array de strings de todas las propiedades
}

for (let data of myAlumns) {
    //let claves = Object.getOwnPropertyNames(data);
    let claves = Object.keys(data);

    for (let i = 0; i < claves.length; i++)
        console.log(data[claves[i]]);
        console.log("Valor de la clave " + i + " es " + data[claves[i]]);
}
