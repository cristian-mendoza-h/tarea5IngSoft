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

function saludar(nombre, genero) {
  const saludo = obtenerSaludoSegunHora();
  let generoSaludo = "bienvenide";

  if (genero === "masculino") {
    generoSaludo = "bienvenido";
  } else if (genero === "femenino") {
    generoSaludo = "bienvenida";
  }

  return `${saludo}, ${nombre}, ${generoSaludo}!`;
}

export default saludar;
