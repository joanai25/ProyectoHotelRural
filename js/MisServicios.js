
export const misReservas = () => {
    let clave = sessionStorage.getItem("dni");
    let entra = false;
    if (clave != null) {
      entra = true;
    } else {
      //M.toast({ html: "No hay usuario registrado.", classes: "red" });
      entra = false;
      window.location = "../index.html";
    }

    return entra;
  };