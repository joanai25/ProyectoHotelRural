export const muestraHabitaciones = (habitacion) => {
    let addHabitaciones = document.querySelector("#hab");

    let salida = `
        
    <div class="col-md-3">
        <div class="card bg-dark ms-5 mb-5" style="width: 18rem">
            <img src="${habitacion.img}" class="card-img-top" alt="...">
            <div class="card-body text-white">
            <h5 class="card-title" id="nombre">${habitacion.nombre}</h5>
            <p class="card-text">${habitacion.descripcion}</p>
                <p class="card-text">Camas: ${habitacion.camas}</p>
                <p class="card-text precio">${habitacion.precio}</p>
                
            <div class="d-flex flex-row-reverse">
                    <button class="btn btn-primary mr-auto" id="${habitacion.id}" name="btnReserva" >Reservar</button>
                </div>
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

const sacaHabitaciones = (habitaciones) => {
    habitaciones.forEach((dato) => muestraHabitaciones(dato));        
    
}

export const dameHabitaciones = () => {
    fetch("http://localhost:3000/habitaciones")
    .then(respuesta => respuesta.json())
    .then(datos => sacaHabitaciones(datos))
    .catch(error => {
        alert("Ha ocurrido un error");
    });
}

export const consigueHabitacion = (id) => {
    sessionStorage.setItem("idHab", id);
    window.location = "../reservas.html";
}