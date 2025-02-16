import saludar from "./saludar.js";

describe("Saludar", () => {
  it("debería saludar con nombre, género masculino y sin prefijo si edad <= 30", () => {
    expect(saludar("Carlos", "masculino", 25)).toMatch(/Carlos, bienvenido!/);
  });

  it("debería saludar con 'Sr.' si es hombre mayor de 30", () => {
    expect(saludar("Juan", "masculino", 35)).toMatch(/Sr. Juan, bienvenido!/);
  });

  it("debería saludar con 'Sra.' si es mujer mayor de 30", () => {
    expect(saludar("María", "femenino", 40)).toMatch(/Sra. María, bienvenida!/);
  });

  it("debería saludar con nombre y sin prefijo si edad <= 30", () => {
    expect(saludar("Ana", "femenino", 28)).toMatch(/Ana, bienvenida!/);
  });

  it("debería saludar con nombre y sin género específico", () => {
    expect(saludar("Alex", "otro", 20)).toMatch(/Alex, bienvenide!/);
  });
});