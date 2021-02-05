
const esperaPisos = (datos) => {
    alert(
        "<span>Usuario dado de alta correctamente.</span>");
    setTimeout(() =>{
        window.location = "../registrar.html";
    }, 2000);
    window.location="../hoteles.html"
}

export const generaAlta = (usuarios) => {

fetch("http://localhost:3000/usuarios",{
    method:"POST",
    body: JSON.stringify(usuarios),
    headers:{
        "Content-type": "application/json"
    }
})
.then(respuesta => respuesta.json())
.then(datos => esperaPisos(datos))
.catch( error => {
    alert("Problemas con el alta");
});
}