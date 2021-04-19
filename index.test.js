var { getDays } = require("./index");

describe("test days in month", function () {
  it("should be a function", function () {
    expect(typeof getDays).toBe("function");
  });
  it("should be defined", function () {
    expect(getDays()).toBeDefined();
  });
  it("should work with a numeric argument", function () {
    expect(getDays("1")).toBe("Not a number");
  });
  it("should work with even month", function () {
    expect(getDays(2021, 3)).toBe(31);
  });
  it("should work with odd month", function () {
    expect(getDays(2021, 4)).toBe(30);
  });
  it("should work with february month", function () {
    expect(getDays(2021, 2)).toBe(28);
  });
});
