//Imports
import { generaAlta } from "./registrar.js";
import { enviaLogin } from "./login.js";


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

// ----------------------------------------------------
// Página signup. Alta de usuario
let altaUsuario = document.querySelector("#registrar");


// Alta usuario página signup
if (altaUsuario !== null) {
    altaUsuario.addEventListener("submit", (e) => {
      e.preventDefault();
      let dato = {};
      dato.dni = document.querySelector("#dni").value;
      dato.nombre = document.querySelector("#nombre").value;
      dato.password = window.btoa(document.querySelector("#password").value);
      dato.email = document.querySelector("#email").value;
      dato.poblacion = document.querySelector("#poblacion").value;
      generaAlta(dato);
    });
  }

// ----------------------------------------------------
// Iniciar sesion
let inicioBoton = document.querySelector("#iniciarSesion");

if (inicioBoton !== null) {
    inicioBoton.addEventListener("submit", (e) => {
      e.preventDefault();
      let dato = {};
      dato.dni = document.querySelector("#dni").value;
      dato.password = document.querySelector("#password").value;
      enviaLogin(dato);
    });
  }