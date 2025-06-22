import {capitalize, reverseString} from "./functions.js"

test("Capitalizes first letter in string", () => {
    expect(capitalize("big gray elephant")).toBe("Big gray elephant");
})

test("Returns a reversed string", () => {
    expect(reverseString("Yabadabadoo")).toBe("oodabadabaY");
})