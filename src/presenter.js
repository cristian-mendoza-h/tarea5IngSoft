import saludar from "./saludar.js"; // Asegúrate de que la ruta es correcta

const form = document.querySelector("#saludar-form");
const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaInput = document.querySelector("#idioma");
const resultDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nombre = nombreInput.value.trim();
    const genero = generoInput.value.trim().toUpperCase(); // M o F
    const edad = parseInt(edadInput.value, 10);
    const idioma = idiomaInput.value.trim().toLowerCase(); // es o en

    if (nombre && (genero === "M" || genero === "F") && !isNaN(edad) && edad > 0 && (idioma === "es" || idioma === "en")) {
        resultDiv.innerHTML = `<p>${saludar(nombre, genero, edad, idioma)}</p>`;
    } else {
        resultDiv.innerHTML = "<p>Por favor, completa todos los campos correctamente.</p>";
    }
});
