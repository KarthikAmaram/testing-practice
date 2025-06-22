import {capitalize} from "./functions.js"

test("Capitalizes first letter in string", () => {
    expect(capitalize("big gray elephant")).toBe("Big gray elephant");
})