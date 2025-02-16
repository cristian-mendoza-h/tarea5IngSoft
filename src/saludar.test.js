import saludar from "./saludar.js";

describe("Saludar", () => {
  it("debería saludar con nombre y género masculino", () => {
    expect(saludar("Carlos", "masculino")).toMatch(/Carlos, bienvenido!/);
  });

  it("debería saludar con nombre y género femenino", () => {
    expect(saludar("María", "femenino")).toMatch(/María, bienvenida!/);
  });

  it("debería saludar con nombre y sin género específico", () => {
    expect(saludar("Alex", "otro")).toMatch(/Alex, bienvenide!/);
  });
});