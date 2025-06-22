import {capitalize, reverseString, Calculator, caesarCipher} from "./functions.js"
const calculator = new Calculator();

test("Capitalizes first letter in string", () => {
    expect(capitalize("big gray elephant")).toBe("Big gray elephant");
})

test("Returns a reversed string", () => {
    expect(reverseString("Yabadabadoo")).toBe("oodabadabaY");
})

test("Addition", () => {
    expect(calculator.add(10, 2)).toBe(12);
})

test("Subtraction", () => {
    expect(calculator.subtract(10, 2)).toBe(8);
})

test("Multiplication", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
})

test("Division", () => {
    expect(calculator.divide(10, 2)).toBe(5);
})

test("Shift string", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
})

test("Keep caps", () => {
    expect(caesarCipher("aBc", 3)).toBe("dEf");
})