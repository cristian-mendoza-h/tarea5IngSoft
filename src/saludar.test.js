import saludar from "./saludar.js";

describe("Saludar", () => {
  it("debería saludar con el nombre dado", () => {
    expect(saludar("Nicole")).toEqual("¡Hola, Nicole!");
  });
});
