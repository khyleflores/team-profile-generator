const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Prompt questions to users using Inquirer npm
const promptUser = () =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name.',
    },
    {
        type: 'input',
        name: 'empployeeID',
        message: 'Please enter your employee ID.',
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: 'Please enter your email address.',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number.',
    }
]);

// function to initialize program
// using async/await and try/catch
const init = async () => {
    console.log('Hello manager, welcome to the Team Profile Generator.');
    try {
     //wait until the promise is settled
      const answers = await promptUser();
      
  
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();

