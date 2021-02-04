//Imports



//Codigo

function cargaTrozoHtml(archivoTXT, id)
{
    fetch(archivoTXT)
        .then((response) => response.text())
        .then((codigo) => {
            document.querySelector(id).innerHTML = codigo;
        });
}


cargaTrozoHtml("../menu.txt", "#menu");
cargaTrozoHtml("../footer.txt", "#footer");
