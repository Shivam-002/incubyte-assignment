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

  it("should return the sum of three numbers", () => {
    expect(add_strings("1,2,3")).toBe(6);
  });

  it("should return the sum of four numbers", () => {
    expect(add_strings("1,2,3,4")).toBe(10);
  });

  it("should return the sum of ten numbers", () => {
    expect(add_strings("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });

  it("should return the sum of numbers separated by newlines", () => {
    expect(add_strings("1\n2,3")).toBe(6);
  });

  it("should return the sum of numbers separated by newlines", () => {
    expect(add_strings("1\n2\n3")).toBe(6);
  });

  it("should return the sum of numbers separated by custom delimiters", () => {
    expect(add_strings("//;\n1;2")).toBe(3);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => add_strings("-1")).toThrowError("Negatives not allowed: -1");
  });

  it("should throw an error for negative numbers", () => {
    expect(() => add_strings("-1,-2")).toThrowError(
      "Negatives not allowed: -1,-2"
    );
  });

  it("should ignore numbers greater than 1000", () => {
    expect(add_strings("1001,2")).toBe(2);
  });

  it("should ignore numbers greater than 1000", () => {
    expect(add_strings("1001,2,1002")).toBe(2);
  });

  it("should allow custom delimiters of any length", () => {
    expect(add_strings("//[***]\n1***2***3")).toBe(6);
  });
});
