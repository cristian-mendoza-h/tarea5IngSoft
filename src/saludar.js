function obtenerSaludoSegunHora() {
  const hora = new Date().getHours();

  if (hora >= 5 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

function saludar(nombre, genero, edad) {
  const saludo = obtenerSaludoSegunHora();
  let generoSaludo = "bienvenide";
  let prefijo = "";

  if (edad > 30) {
    if (genero === "masculino") {
      prefijo = "Sr. ";
    } else if (genero === "femenino") {
      prefijo = "Sra. ";
    }
  }

  if (genero === "masculino") {
    generoSaludo = "bienvenido";
  } else if (genero === "femenino") {
    generoSaludo = "bienvenida";
  }

  return `${saludo}, ${prefijo}${nombre}, ${generoSaludo}!`;
}

export default saludar;
