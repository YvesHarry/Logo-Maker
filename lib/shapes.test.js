// Import the shape classes for testing
const { Circle, Square, Triangle } = require("./shapes");

// Test cases for the Circle class
describe("Circle", () => {
  it("should render a circle with the given text and colors", () => {
    const circle = new Circle("ABC", "red", "blue");
    const result = circle.render();
    const expected = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="blue"/>
        <text x="150" y="100" font-size="30" fill="red" text-anchor="middle" alignment-baseline="middle">ABC</text>
      </svg>
    `;
    expect(result).toBe(expected);
  });
});

// Test cases for the Square class
describe("Square", () => {
  it("should render a square with the given text and colors", () => {
    const square = new Square("XYZ", "green", "yellow");
    const result = square.render();
    const expected = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="75" width="100" height="100" fill="yellow"/>
        <text x="150" y="125" font-size="30" fill="green" text-anchor="middle" dominant-baseline="middle">XYZ</text>
      </svg>
    `;
    expect(result).toBe(expected);
  });
});

// Test cases for the Triangle class
describe("Triangle", () => {
  it("should render a triangle with the given text and colors", () => {
    const triangle = new Triangle("123", "purple", "blue");
    const result = triangle.render();
    const expected = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="blue"/>
        <text x="150" y="120" font-size="30" fill="purple" text-anchor="middle" dominant-baseline="middle">123</text>
      </svg>
    `;
    expect(result).toBe(expected);
  });
});
