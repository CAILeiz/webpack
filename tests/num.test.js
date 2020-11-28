const mod = require("../src/js/num");

test("test sum", _ => {
    expect(mod(12, 5)).toBe(17);
    expect(mod(12, 0)).toBe(12);
    expect(mod(17, 0)).toBe(17);
    expect(mod(0, 5)).toBe(5);
})