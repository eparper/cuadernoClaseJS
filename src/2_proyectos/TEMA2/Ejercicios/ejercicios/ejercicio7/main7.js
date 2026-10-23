let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");

let bBoton = document.getElementById("bBoton");

let resultados = document.getElementById("resultados");
let errores = document.getElementById("errores");

bBoton.onclick = function () {
    
    try {

        let n1 = 0;
        let n2 = 0;
        let n3 = 0;
        let media = 0;
    

        errores.innerHTML = "";
        resultados.innerHTML = "";

        //validamos que siempre sea real o entero
        if (isNaN(nota1.value)) {
            throw "La nota 1 debe ser entero o real";
        }

        if (isNaN(nota2.value)) {
            throw "La nota 2 debe ser entero o real";
        }

        if (isNaN(nota3.value)) {
            throw "La nota 3 debe ser entero o real";
        }

        

        //importante renombrar estas variables, si no, puede haber fallos posteriormente
        n1 = parseFloat(nota1.value);
        n2 = parseFloat(nota2.value);
        n3 = parseFloat(nota3.value);

        media = (n1 + n2 + n3) / 3;
        
        //mostrar por pantalla resultados
        resultados.innerHTML = "Media aritmética: " + media;

        //según verdadero, evalúa las condiciones de los case
        switch (true) {
            case (media < 5): {
                resultados.innerHTML += "<br>SUSPENSO";
            } break;
            case (media < 7): {
                resultados.innerHTML += "<br>APROBADO";
            } break;
            case (media < 8.5): {
                resultados.innerHTML += "<br>NOTABLE";
            } break;
            case (media < 10): {
                resultados.innerHTML += "<br>SOBRESALIENTE";
            } break;
            default: {
                resultados.innerHTML += "<br>Error";
            }

        }

    }
    catch (err) {
        errores.innerHTML = "Error: " + err;
    }
    
}