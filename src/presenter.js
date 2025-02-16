import saludar from "./saludar.js";

const nameInput = document.querySelector("#nombre");
const genderSelect = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const resultDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nameInput.value.trim();
  const genero = genderSelect.value;

  if (nombre) {
    resultDiv.innerHTML = `<p>${saludar(nombre, genero)}</p>`;
  } else {
    resultDiv.innerHTML = "<p>Por favor, ingresa tu nombre.</p>";
  }
});
