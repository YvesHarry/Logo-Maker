// Import required modules
const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Define an array of questions for the user
const questions = [
  {
    type: "input",
    name: "letters",
    message: "TEXT: Enter up to (3) Characters:",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Pick a shape:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
  },
];

// Function to write data to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

// Function to initialize the application
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const { shape, letters, textColor, shapeColor } = data;

      // Check if the number of letters exceeds the limit (3)
      if (letters.length > 3) {
        console.error("Number of letters cannot exceed 3.");
        return;
      }

      let shapeObj;

      // Create the appropriate shape object based on user input
      switch (shape) {
        case "Circle":
          shapeObj = new Circle(letters, textColor, shapeColor);
          break;
        case "Square":
          shapeObj = new Square(letters, textColor, shapeColor);
          break;
        case "Triangle":
          shapeObj = new Triangle(letters, textColor, shapeColor);
          break;
        default:
          console.error("Invalid shape.");
          return;
      }

      // Generate SVG data for the selected shape and write it to a file
      const dataShapes = shapeObj.render();
      writeToFile("./examples/logo.svg", dataShapes);
    })
    .catch((err) => {
      console.error("Something went wrong:", err.message);
    });
}

// Call the initialization function to start the application
init();