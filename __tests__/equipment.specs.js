const equipmentTest = require("../src/equipmentTest");

test("returns false if empty", () => {
    expect(equipmentTest("")).toBe(false)
})
test("returns false if equipment name has no letters", () => {
    expect(equipmentTest("13579")).toBe(false)
})
test("returns false if equipment name is 2 letters", () => {
    expect(equipmentTest("ab")).toBe(false)
})
test("returns true if equipment name has letters and is 3 characters", () => {
    expect(equipmentTest("Axe")).toBe(true)
})
test("returns true if equipment name has letters and is more than 3 characters", () => {
    expect(equipmentTest("6inch Saw")).toBe(true)
})