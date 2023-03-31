const employeeTest = require("../src/equipmentTest");

test("returns false if empty", () => {
    expect(employeeTest("")).toBe(false)
})
test("returns false if last name has no letters", () => {
    expect(employeeTest("789")).toBe(false)
})
test("returns false if last name is 2 letters", () => {
    expect(employeeTest("oh")).toBe(false)
})
test("returns true if last name has letters and is 3 characters", () => {
    expect(employeeTest("any")).toBe(true)
})
test("returns true if last name has letters and is more than 3 characters", () => {
    expect(employeeTest("Craven")).toBe(true)
})