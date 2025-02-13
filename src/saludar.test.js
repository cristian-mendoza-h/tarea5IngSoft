import saludar from "./saludar.js";

describe("Saludar", () => {
  it("debería saludar con el nombre y el saludo adecuado", () => {
    expect(saludar("Nicole")).toMatch(/Nicole, bienvenido!/);
 });
});