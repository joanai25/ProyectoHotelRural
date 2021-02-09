

const sacaHabitacion = async (reserva) => {
  
  if(reserva.habitacionID != null)
  {
    let respuesta = await fetch(`http://localhost:3000/habitaciones/${reserva.habitacionID}`);
    let habitacion = await respuesta.json();
  
    muestraHabitaciones(habitacion, reserva);
  }
  
};

const sacaActividad = async (reserva) => {
  if(reserva.actividadID != null)
  {
    let respuesta = await fetch(`http://localhost:3000/actividades/${reserva.actividadID}`);
    let actividad = await respuesta.json();
  
    muestraActividades(actividad);
  }

 
}


const muestraHabitaciones = (habitacion, reserva) => {
  let addHabitaciones = document.querySelector("#hab");

    let salida = `
        
    <div class="col-md-3">
        <div class="card bg-dark ms-5 mb-5" style="width: 18rem; height: 35rem;">
            <img src="${habitacion.img}" class="card-img-top" alt="...">
            <div class="card-body text-white">
            <h5 class="card-title" id="nombre">${habitacion.nombre}</h5>
            <p class="card-text">${habitacion.descripcion}</p>
                <p class="card-text">Camas: ${habitacion.camas}</p>
                <p class="card-text precio">${habitacion.precio}</p>
                
            <p class="card-text">Desde: ${reserva.fechaDesde}</p>
            <p class="card-text">Hasta: ${reserva.fechaHasta}</p>
            <div class="toast">
                <div class="toast-header">
                  Toast Header
                </div>
                <div class="toast-body">
                  Some text inside the toast body
                </div>
              </div>
            </div>
        </div>  
    </div>
    
    `;

    
    addHabitaciones.insertAdjacentHTML('beforeend', salida);
}


const muestraActividades = (actividad) => {
  let addHabitaciones = document.querySelector("#acts");

    let salida = `
        
    <div class="col-md-3">
        <div class="card m-4 bg-dark " style="width: 18rem; height: 35rem;">
            <img src="${actividad.img}" class="card-img-top" alt="...">
            <div class="card-body text-white">
                <h5 class="card-title">${actividad.nombre}</h5>
                <p class="card-text">${actividad.descripcion}</p>
                    
                    <p class="card-text precio">${actividad.precio}</p>
                
            
            </div>
        </div>  
    </div>
    
    `;

    
    addHabitaciones.insertAdjacentHTML('beforeend', salida);
}


const muestraReservas = (reservas) => {

  reservas.forEach((reserva) => {
    sacaHabitacion(reserva);
  });

  reservas.forEach((reserva) => {
    sacaActividad(reserva);
  });    
    
  //Añadir sacaActividad
}



export const misReservas = () => {
  let clave = sessionStorage.getItem("dni");
  if (clave != null) {
    fetch(`http://localhost:3000/reservas/?usuarioId=${clave}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => muestraReservas(datos))
      .catch((error) => {
        alert("Error al hacer la llamada");
      });
  } else {
    alert("Error al comprobar el usuario");
  }
};