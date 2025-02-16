import saludar from "./saludar.js";

const nameInput = document.querySelector("#nombre");
const genderSelect = document.querySelector("#genero");
const ageInput = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const resultDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nameInput.value.trim();
  const genero = genderSelect.value;
  const edad = parseInt(ageInput.value, 10);

  if (nombre && !isNaN(edad)) {
    resultDiv.innerHTML = `<p>${saludar(nombre, genero, edad)}</p>`;
  } else {
    resultDiv.innerHTML = "<p>Por favor, ingresa tu nombre y edad correctamente.</p>";
  }
});
