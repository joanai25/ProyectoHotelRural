export const muestraActividades = (actividad) => {
    let addActividades = document.querySelector("#acts");

    let salida = `
   
    <div class="col-md-3">
        <div class="card m-4 bg-dark " style="width: 18rem; height: 35rem;">
            <img src="${actividad.img}" class="card-img-top" alt="...">
            <div class="card-body text-white">
                <h5 class="card-title">${actividad.nombre}</h5>
                <p class="card-text">${actividad.descripcion}</p>
                    
                    <p class="card-text precio">${actividad.precio}</p>
                <div class="d-flex flex-row-reverse">
                        <button  class="btn btn-primary mr-auto" name="btnReserva" id="${actividad.id}">Reservar</button>
                </div>
            
            </div>
        </div>  
    </div>
    
    `;

    addActividades.insertAdjacentHTML('beforeend', salida);

}

const sacaActividades = (actividades) => {
    actividades.forEach((dato) => muestraActividades(dato));        
    
}

export const dameActividades = () => {
    fetch("http://localhost:3000/actividades")
    .then(respuesta => respuesta.json())
    .then(datos => sacaActividades(datos))
    .catch(error => {
        alert("Ha ocurrido un error en la llamada a actividades");
    });
}