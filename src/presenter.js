import saludar from "./saludar.js";

const nameInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const resultDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = nameInput.value.trim();
  resultDiv.innerHTML = "<p>" + saludar(nombre) + "</p>";
});