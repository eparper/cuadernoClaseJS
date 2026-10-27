/**********************EJERCICIO 1************************ */
let solucionEjer1 = document.getElementById("solucionEjer1");
let aniadirPersona = document.getElementById("aniadirPersona");
let estudiante = document.getElementById("estudiante");
let solucionEjer1estu = document.getElementById("solucionEjer1estu");
let solucionEjer1profe = document.getElementById("solucionEjer1profe");
let errores = document.getElementById("errores");

//persona
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let generoF = document.getElementById("generoF");
let generoM = document.getElementById("generoM");

//estudiante
let curso = document.getElementById("curso");
let grupo = document.getElementById("grupo");
let registrarEstudiante = document.getElementById("registrarEstudiante");

//profesor
let asignatura = document.getElementById("asignatura");
let nivel = document.getElementById("nivel");
let asignarProfesor = document.getElementById("asignarProfesor");

//objeto de ejemplo
//let objPersona = {nombre: "María", edad: 19, genero: "Femenino"};

let arrayPersonas = [];

let arrayEstudiantes = [];

let arrayProfesores = [];


/************************************************************ */
//arrayPersonas.push(objPersona);
solucionEjer1.innerHTML = "Personas: <br><br>";


aniadirPersona.onclick = function () {

    try {

        solucionEjer1.innerHTML = "Personas: <br><br>";
        let nuevaPersona;
        let num;
        let per;
        
        if (nombre.value === "") {
            throw "El campo nombre no puede estar vacío";
        }

        //validar si está vacío //si pones un punto (.) también lo cogerá como vacío
        if (edad.value === "") {
            throw "El campo edad no puede estar vacío";
        }

        if (isNaN(edad.value)) {
            throw "Debes introducir una edad";
        }

        num = Number(edad.value);

        if (!Number.isInteger(num)) {
            throw "La edad debe ser un número entero";
        }

        if (!generoF.checked && !generoM.checked) {
            throw "Debes elegir un género";
        }

        //añadimos la persona al array
        nuevaPersona = {nombre: nombre.value, edad: edad.value, 
                        genero: ((generoF.checked)?generoF.value:generoM.value)};

        arrayPersonas.push(nuevaPersona);

        for (let oPersona of arrayPersonas) {

            solucionEjer1.innerHTML += obtDetalles(oPersona) + "<br>";

            //ponemos la ultima persona en una variable para añadirla al select abajo
            per = oPersona;
            
        }
        
        rellenarSelect(per.nombre);
        
        

        
    }
    catch (err) {
        solucionEjer1.style.color = "red";
        solucionEjer1.innerHTML = " " + err;
    }

}


//Estudiante
solucionEjer1estu.innerHTML = "Estudiantes: <br><br>";

registrarEstudiante.onclick = function () {

    

    let opcionSeleccionada = estudiante.options[estudiante.selectedIndex];
    let nuevoEstudiante = {};
    errores.innerHTML = "";

    solucionEjer1estu.innerHTML = "Estudiantes: <br><br>";

    console.log(opcionSeleccionada.textContent);

    for (let obj in arrayPersonas) {
        console.log("hola");
        //si el nombre coincide con el seleccionado en el select:
        if (arrayPersonas[obj].nombre == opcionSeleccionada.textContent) {
            nuevoEstudiante.nombre = arrayPersonas[obj].nombre;
            nuevoEstudiante.edad = arrayPersonas[obj].edad;
            nuevoEstudiante.genero = arrayPersonas[obj].genero;
            console.log(opcionSeleccionada.textContent);
            //las dos propiedades nuevas:
            nuevoEstudiante.curso = curso.value;
            nuevoEstudiante.grupo = grupo.value;

            

        }
    }

    //si el array no está vacío, comprobamos que el seleccionado no sea ya un profe
    if (arrayProfesores.length !== 0) {
        for (let obProfe of arrayProfesores) {
            
        
            //si el nombre no está en Profesores
            if (nuevoEstudiante.nombre !== obProfe.nombre) {

                //DENTRO DEL IF
                registrar(nuevoEstudiante);

            }
            else {
                errores.innerHTML = "Esta persona ya es un profesor";
            }
        }
    }
    else 
        registrar(nuevoEstudiante); //si está vacío


    

    

    //mostramos los estudiantes:
    if (arrayEstudiantes.length !== 0) {
        for (let oEstudiante of arrayEstudiantes) {

            console.log("está dentro del bucle");

            solucionEjer1estu.innerHTML += obtDetalles(oEstudiante) + "<br>";
            
        }
    }
    
}


//------------
//Profesor
solucionEjer1profe.innerHTML = "Profesores: <br><br>";

asignarProfesor.onclick = function () {

    

    let opcionSeleccionada = profesor.options[profesor.selectedIndex];
    let nuevoProfesor = {};

    solucionEjer1profe.innerHTML = "Profesores: <br><br>";
    errores.innerHTML = "";

    console.log(opcionSeleccionada.textContent);

    for (let obj in arrayPersonas) {
        console.log("hola");
        //si el nombre coincide con el seleccionado en el select:
        if (arrayPersonas[obj].nombre == opcionSeleccionada.textContent) {
            nuevoProfesor.nombre = arrayPersonas[obj].nombre;
            nuevoProfesor.edad = arrayPersonas[obj].edad;
            nuevoProfesor.genero = arrayPersonas[obj].genero;
            console.log(opcionSeleccionada.textContent);
            //las dos propiedades nuevas:
            nuevoProfesor.asignatura = asignatura.value;
            nuevoProfesor.nivel = nivel.value;

        }
    }


    // //añadimos el profesor
    // for (let obEstu of arrayEstudiantes) {
       
    //     //si el nombre no está en Profesores
    //     if (nuevoProfesor.nombre !== arrayEstudiantes[obEstu].nombre) {

    //         //DENTRO DEL IF
    //         registrarProfe(nuevoProfesor);

    //     }
    //     else {
    //         errores.innerHTML = "Esta persona ya es un estudiante";
    //     }
    // }
    

    // //mostramos los estudiantes:
    // for (let oProfesor of arrayProfesores) {

        

    //     solucionEjer1profe.innerHTML += obtDetalles(arrayProfesores[oProfesor]) + "<br>";
        
    // }

    //si el array no está vacío, comprobamos que el seleccionado no sea ya un profe
    if (arrayEstudiantes.length !== 0) {
        for (let obEstu of arrayEstudiantes) {
            
        
            //si el nombre no está en Profesores
            //if (nuevoProfesor.nombre !== obEstu.nombre) {
            if (opcionSeleccionada.textContent !== obEstu.nombre) {
                //DENTRO DEL IF
                registrar(nuevoProfesor);
                break;

            }
            else {
                errores.innerHTML = "Esta persona ya es un estudiante";
            }
        }
    }
    else 
        registrar(nuevoProfesor); //si está vacío


    

    

    //mostramos los profesores:
    if (arrayProfesores.length !== 0) {
        for (let oProfesor of arrayProfesores) {

            console.log("está dentro del bucle");

            solucionEjer1profe.innerHTML += obtDetalles(oProfesor) + "<br>";
            
        }
    }
}








/************************************************************ */

function obtDetalles(objeto) {

    let cadena = "";

    for (let propiedad in objeto) {
        cadena += propiedad + ": " + objeto[propiedad] + " <br>";
    }

    return cadena;
}

function rellenarSelect(nombrePersona) {

    
    let nuevaOpcion = document.createElement("option");
    nuevaOpcion.textContent = nombrePersona;

    let nuevaOpcion2 = document.createElement("option");
    nuevaOpcion2.textContent = nombrePersona;

    
    estudiante.appendChild(nuevaOpcion);
    profesor.appendChild(nuevaOpcion2);
}

function registrar(objeto) {

    arrayEstudiantes.push(objeto);

    
}

function registrarProfe(objeto) {

    arrayProfesores.push(objeto);

    
}