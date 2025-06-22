import {capitalize, reverseString, Calculator, caesarCipher, anaylzeArray} from "./functions.js"
const calculator = new Calculator();
let array = [1,8,3,4,2,6]

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

test("Doesn't change punctuation", () => {
    expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
})

test("Average", () => {
    expect(anaylzeArray(array).average).toBe(4);
})

test("Minimum", () => {
    expect(anaylzeArray(array).min).toBe(1);
})

test("Maximum", () => {
    expect(anaylzeArray(array).max).toBe(8);
})

test("Length", () => {
    expect(anaylzeArray(array).length).toBe(6);
})