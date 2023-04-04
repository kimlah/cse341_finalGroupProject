const workOrderTest = require("../src/workOrderTest");

test("returns false if empty", () => {
    expect(workOrderTest("")).toBe(false)
})
test("returns false if equipment name has no letters", () => {
    expect(workOrderTest("13579")).toBe(false)
})
test("returns false if equipment name is 2 letters", () => {
    expect(workOrderTest("ab")).toBe(false)
})
test("returns true if equipment name has letters and is 3 characters", () => {
    expect(workOrderTest("Axe")).toBe(true)
})
test("returns true if equipment name has letters and is more than 3 characters", () => {
    expect(workOrderTest("6inch Saw")).toBe(true)
})