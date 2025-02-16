export default function saludar(nombre, genero, edad, idioma = "es") {
  const hora = new Date().getHours();
  let saludo = "";

  if (idioma === "es") {
      saludo = hora < 12 ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches";
  } else {
      saludo = hora < 12 ? "Good morning" : hora < 18 ? "Good afternoon" : "Good evening";
  }

  let tratamiento = "";
  if (edad > 30) {
      if (idioma === "es") {
          tratamiento = genero === "M" ? "Sr." : "Sra.";
      } else {
          tratamiento = genero === "M" ? "Mr." : "Mrs.";
      }
  }

  return `${saludo}, ${tratamiento} ${nombre}`;
}
