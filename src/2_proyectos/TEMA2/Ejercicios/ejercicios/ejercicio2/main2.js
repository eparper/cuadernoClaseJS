/**********************EJERCICIO 2************************ */
let solucionEjer2 = document.getElementById("solucionEjer2");
let iNum1 = document.getElementById("iNum1");
let iNum2 = document.getElementById("iNum2");
let bXOR = document.getElementById("bXOR");

let expReg = /^[1|0]*$/;

console.log(expReg.test(110111));


bXOR.onclick = function () {
    //-----------validar si es un binario------------
    try {

        let num1 = 0;
        let num2 = 0;

        //para admitir solo 0 y 1 
        console.log(expReg.test(iNum1.value));
        if ((expReg.test(iNum1.value)) == false) {

            throw "El número 1 no es binario";
        }
        if ((expReg.test(iNum2.value)) == false) {

            throw "El número 2 no es binario";
            
        }
        
        num1 = "0b" + iNum1.value;
        num2 = "0b" + iNum2.value;
        
        solucionEjer2.innerHTML = "XOR: " + (num1 ^ num2);
        
    }
    catch (err) {
        solucionEjer2.innerHTML = "Error: " + err;
    }
    
}