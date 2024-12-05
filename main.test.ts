const { add_strings } = require("./main");

describe("add_strings", () => {
  it("should return 0 for an empty string", () => {
    expect(add_strings("")).toBe(0);
  });

  it("should return 1 for a single number", () => {
    expect(add_strings("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(add_strings("1,2")).toBe(3);
  });
});
