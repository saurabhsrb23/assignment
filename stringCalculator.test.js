const { add } = require('./stringCalculator');

describe('String Calculator', () => {

  // When the input is an empty string, the result should be 0
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  // When the input is a single number, it should return that number
  test('should return the number for a single input', () => {
    expect(add("1")).toBe(1);
  });

  // When there are two numbers separated by a comma, it should return their sum
  test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  // The add method should handle multiple numbers and return their sum
  test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  // The add method should recognize new lines as delimiters between numbers
  test('should handle new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // The add method should support different custom delimiters, such as semicolons
  test('should handle different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // The add method should throw an error if a negative number is included in the input
  test('should throw an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  // If there are multiple negative numbers, the add method should list all of them in the error message
  test('should throw an error with all negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
  });
});
