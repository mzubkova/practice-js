var { getDays, every } = require("./index");

describe("test days in month", function () {
  it("should be a function", function () {
    expect(typeof getDays).toBe("function");
  });
  it("should be defined", function () {
    expect(getDays()).toBeDefined();
  });
  it("should work with a numeric first argument", function () {
    expect(getDays("2021", "April")).toBe("Not a number");
  });
  it("should return number of even month", function () {
    expect(getDays(2021, 4)).toBe(30);
  });
  it("should return number of odd month", function () {
    expect(getDays(2021, 3)).toBe(31);
  });
  it("should return number of string month", function () {
    expect(getDays(2021, "April")).toBe(30);
  });
});

describe("test method isOdd", function () {
  var evenNumber = 2;
  var oddNumber = 1;
  it("should be defined", function () {
    expect(Number.prototype.isOdd).toBeDefined();
  });
  it("should be a function", function () {
    expect(typeof Number.prototype.isOdd).toBe("function");
  });
  it("should return false", function () {
    expect(evenNumber.isOdd()).toBe(false);
  });
  it("should return true", function () {
    expect(oddNumber.isOdd()).toBe(true);
  });
});

describe("test every", function () {
  it("should be defined", function () {
    expect(every).toBeDefined();
  });
  it("should be a function", function () {
    expect(typeof every).toBe("function");
  });

  function cb(number) {
    return number % 2 === 0;
  }
  it("should return true", function () {
    expect(every([8, 2, 4], cb)).toEqual(true);
  });
  it("should return false", function () {
    expect(every([8, 2, 5], cb)).toEqual(false);
  });
});
