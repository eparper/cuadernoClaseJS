const h21 = document.getElementById("h21");

let navigatorObject = new Object({
    useragent: navigator.userAgent,
    platform: navigator.platform,
    idiomas: navigator.languages,
    conectado: navigator.onLine,
    permitidoCookies: navigator.cookieEnabled,
    cpus: navigator.hardwareConcurrency,
    ram: navigator.deviceMemory
});

h21.innerHTML += "Navegador y Sistema: " + navigatorObject.useragent + "<br>";
h21.innerHTML += "Sistema: " + navigatorObject.platform + "<br>";
h21.innerHTML += "Idioma: " + navigatorObject.idiomas + "<br>";
h21.innerHTML += "Conectado a Internet: " + navigatorObject.conectado + "<br>";
h21.innerHTML += "¿Se permiten cookies?: " + navigatorObject.permitidoCookies + "<br>";
h21.innerHTML += "CPUs: " + navigatorObject.cpus + "<br>";
h21.innerHTML += "RAM: " + navigatorObject.ram + "<br>";