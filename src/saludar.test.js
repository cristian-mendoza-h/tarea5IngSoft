import saludar from "./saludar.js";

describe("Saludar", () => {
    it("debería saludar en español e inglés", () => {
        expect(saludar("Carlos", "M", 35, "es")).toBe("Buenos días, Sr. Carlos");
        expect(saludar("Ana", "F", 28, "es")).toBe("Buenos días, Ana");
        expect(saludar("John", "M", 40, "en")).toBe("Good morning, Mr. John");
        expect(saludar("Emily", "F", 25, "en")).toBe("Good morning, Emily");
    });
});