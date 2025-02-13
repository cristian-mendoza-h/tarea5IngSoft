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
  
  function saludar(nombre) {
    const saludo = obtenerSaludoSegunHora();
    return `${saludo}, ${nombre}, bienvenido!`;
  }

export default saludar;
  