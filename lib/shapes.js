// Define a base Shape class
class Shape {
  constructor(text, text_color, shape_color) {
    this.text = text;
    this.text_color = text_color;
    this.shape_color = shape_color;
  }

  // Placeholder method that will be overridden by child classes
  render() {}
}

// Define child classes for specific shapes (Circle, Square, Triangle)
class Circle extends Shape {
  constructor(text, text_color, shape_color) {
    super(text, text_color, shape_color);
  }

  // Override the render method to generate SVG data for a circle
  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${this.shape_color}"/>
        <text x="150" y="100" font-size="30" fill="${this.text_color}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

class Square extends Shape {
  constructor(text, text_color, shape_color) {
    super(text, text_color, shape_color);
  }

  // Override the render method to generate SVG data for a square
  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="75" width="100" height="100" fill="${this.shape_color}"/>
        <text x="150" y="125" font-size="30" fill="${this.text_color}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(text, text_color, shape_color) {
    super(text, text_color, shape_color);
  }

  // Override the render method to generate SVG data for a triangle
  render() {
    return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="${this.shape_color}"/>
        <text x="150" y="120" font-size="30" fill="${this.text_color}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

// Export the Shape class and its child classes
module.exports = { Shape, Circle, Square, Triangle };
