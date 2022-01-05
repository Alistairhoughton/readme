// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const generateContent = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter a title for your project",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
  {
    type: "list",
    name: "license",
    message: "what license are you using? ",
    choices: ["MIT", "ISC", "GPL"],
  },
  {
    type: "input",
    name: "install",
    message: "What are the required steps to install this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to this repo?",
  },
  {
    type: "input",
    name: "screenshot",
    message: "please enter a path/or URL for your screenshot.",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const content = generateContent(answers);
    fs.writeFile("README.md", content, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created README.md file!")
    );
  });
}

// Function call to initialize app
init();
