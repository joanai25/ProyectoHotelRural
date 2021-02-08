export const comprueba = () => {
    let clave = sessionStorage.getItem("dni");
    let logueado = false;
    if (clave == null) {
        
        alert("No has iniciado sesion. Vas a ser redirigido");
        window.location = "../habitaciones.html";
        
        
    }else{
        logueado = true;
    } 

    return logueado;
  };


export const guardaServicio = (servicio) => {
    fetch("http://localhost:3000/reservas",{
        method: "POST",
        body: JSON.stringify(servicio),
        headers: {
            "Content-type": "application/json"
        }
    })
    .catch((error) => {
        alert("Error al hacer la reserva");
    });

    MisServicios();
    

}


function MisServicios()
{
    setTimeout(() =>{
        window.location = "../misServiciosContratados.html";
    }, 2000);
}

