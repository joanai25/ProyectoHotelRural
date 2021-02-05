
const login_f = (dato) => {
    // Comprobar datos ....
    if (dato[0].dni == document.querySelector("#dni").value && dato[0].password == window.btoa(document.querySelector("#password").value)) { 
        sessionStorage.setItem('dni', dato[0].id);
        localStorage.setItem('nombre', dato[0].nombre);
        window.location='../hoteles.html';
    }
    else {
        alert("Usuario o contraseña erroneo");
    }
}

export const enviaLogin = (usuario)=>{
           http://localhost:3000/usuarios/1
    fetch(`http://localhost:3000/usuarios/?dni=${usuario.dni}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(respuesta =>  respuesta.json())
    .then(datos => login_f(datos))
    .catch(error => {
        alert("Usuario o contraseña erroneo");
    })
};
