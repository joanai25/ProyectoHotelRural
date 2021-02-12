//Imports
import { generaAlta } from "./registrar.js";
import { enviaLogin } from "./login.js";
import { dameHabitaciones } from "./habitaciones.js";
import { dameActividades } from "./actividades.js";
import { comprueba} from "./reservas.js";
import { consigueHabitacion } from "./habitaciones.js";
import { guardaServicio } from "./reservas.js";
import { misReservas } from "./MisServicios.js";


let pagina = window.location;
//Codigo

function cargaTrozoHtml(archivo, id)
{
    fetch(archivo)
        .then((response) => response.text())
        .then((codigo) => {
            document.querySelector(id).innerHTML = codigo;
        });
}

if (pagina.pathname == "/cerrarSesion.html") {
  cerrarSesion();
}

function cerrarSesion()
{
    sessionStorage.removeItem("dni");
    window.location = "../index.html";
}

function compruebaSesion()
{
  let clave = sessionStorage.getItem("dni");
    let entra = false;
    if (clave != null) {
      entra = true;
      cargaTrozoHtml("../menu2.html", "#menu");
    } else {
      //M.toast({ html: "No hay usuario registrado.", classes: "red" });
      entra = false;
      cargaTrozoHtml("../menu.html", "#menu");
    }

    return entra;
}



compruebaSesion();

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

  //Habitaciones
  
  

  if (pagina.pathname == "/habitaciones.html") {
    dameHabitaciones();
    
    document.addEventListener('click', function(e){
      if(e.target && e.target.name == 'btnReserva')
      {
        let idHab = e.target.id;
        
        consigueHabitacion(idHab);
      }
    });
    
  }

 

 
    

  //Actividades

if(pagina.pathname == "/actividades.html"){
  dameActividades();

  document.addEventListener('click', function(e){
    if(e.target && e.target.name == 'btnReserva')
    {
      
      if(compruebaSesion())
      {
        let dato = {};
      
        dato.usuarioID = sessionStorage.getItem("dni");
        dato.actividadID = e.target.id;
        guardaServicio(dato);
      }else{
        $('.toast'+e.target.id).toast('show');
        
      }
      
      
      
      
    }
  
  });
  
  

}

//Reservas
if(pagina.pathname == "/reservas.html"){
  comprueba();

  document.addEventListener('click', function(e){
    if(e.target && e.target.id == 'btnReserva')
    {
      let dato = {};
      dato.fechaDesde = document.querySelector("#desde").value;
      dato.fechaHasta = document.querySelector("#hasta").value;
      dato.usuarioID = sessionStorage.getItem("dni");
      dato.habitacionID = sessionStorage.getItem("idHab");
      guardaServicio(dato);
      
      
      
    }
  
  });
 
}


//Mis servicios contratados
if(pagina.pathname == "/misServiciosContratados.html")
{
  comprueba();
  misReservas();
 
}






