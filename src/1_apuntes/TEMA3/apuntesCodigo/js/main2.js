const h11 = document.getElementById("h11");

//creación de objeto
let myAlumn = {
    name: "Jhon",
    surname: "Power",
    age: 19,
    active: true,
    mail: "jhon@mail.com"
    
}

//esto es para que no se añadan nuevas propiedades
//Object.preventExtensions(myAlumn);
//Object.seal(myAlumn);

Object.freeze(myAlumn);

// myAlumn.age = 26;
// delete myAlumn.name;

// if (Object.isExtensible(myAlumn)) {

//     myAlumn.grades = [6,7.85,9.25];

//     h11.innerHTML = "Nombre del alumno/a: " + myAlumn.name + ". Nota1: " + myAlumn.grades[0] 
//                      + ". Edad: " + myAlumn.age;

// }
// else {
//     h11.innerHTML = "Al objeto no se le pueden añadir nuevas propiedades";
//     h11.innerHTML += "<hr>Nombre del alumno/a: " + myAlumn.name + ". Edad: " + myAlumn.age;
// }

h11.innerHTML += "<hr>Nombre del alumno/a: " + myAlumn.name + ". Edad: " + myAlumn.age;