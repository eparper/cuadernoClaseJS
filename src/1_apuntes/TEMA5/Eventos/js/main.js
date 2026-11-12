let bUnaVez = document.getElementById("bUnaVez");

bUnaVez.addEventListener("click", () => {

    bUnaVez.style.backgroundColor = "#8a2be2";

}, {once: true});



//párrafos
document.getElementById("p1").addEventListener("click", ocultar);
document.getElementById("p2").addEventListener("click", ocultar);
document.getElementById("p3").addEventListener("click", ocultar);

function ocultar () {
    //this.style.display = "none";
    this.style.visibility = "hidden";
}


//volver a recuperarlos si pinchas 