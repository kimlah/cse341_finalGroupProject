const adminTest = require("../src/adminTest");

test("returns false if empty", () => {
    expect(adminTest("")).toBe(false)
})
test("returns false if first name has no letters", () => {
    expect(adminTest("15892598")).toBe(false)
})
test("returns false if first name is 2 letters", () => {
    expect(adminTest("uh")).toBe(false)
})
test("returns true if first name has letters and is 3 characters", () => {
    expect(adminTest("any")).toBe(true)
})
test("returns true if first name has letters and is more than 3 characters", () => {
    expect(adminTest("Rebecca")).toBe(true)
})