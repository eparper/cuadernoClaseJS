let resultados = document.getElementById("resultados");
let iBytes = document.getElementById("iBytes");
let bBoton = document.getElementById("bBoton");


let arrayLetrasNums = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
                            "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
                            "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", 
                            "J", "K", "L", 
                        "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", 
                        "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];




bBoton.onclick = function () {

    try {

        let cantidad = 0;
        let expReg = /^[0-9]*Bytes$/;

        resultados.innerHTML = "";

        if (!expReg.test(iBytes.value)) {
            throw "El valor introducido no es correcto.";
        }

        //quitamos la palabra Bytes
        cantidad = ((iBytes.value).split("Bytes"))[0];

        cantidadBytes = Number(cantidad);

        if (!Number.isInteger(cantidadBytes)) {
            throw "El número debe ser entero.";
        }

        cantidadFinal = parseInt(cantidadBytes);

        //aquí hacemos lo de las contraseñas


        //mostramos el array
        for (let cont = 0; cont < cantidadFinal; cont++) {
            
            let random1 = Math.floor(Math.random() * arrayLetrasNums.length);
            
            resultados.innerHTML += arrayLetrasNums[random1];
        }
    }
    catch (err) {
        resultados.innerHTML = "Error: " + err;
    }

}

