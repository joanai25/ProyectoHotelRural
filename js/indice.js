//Imports



//Codigo

function cargaTrozoHtml(archivo, id)
{
    fetch(archivo)
        .then((response) => response.text())
        .then((codigo) => {
            document.querySelector(id).innerHTML = codigo;
        });
}


cargaTrozoHtml("../menu.html", "#menu");
cargaTrozoHtml("../footer.html", "#footer");
