const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Prompt questions to manager using Inquirer npm
function promptManager () {
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name.',
    },
    {
        type: 'input',
        name: 'employeeID',
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
    ]).then(answers => {
        const manager = Manager(answers.name, answers.employeeID, answers.emailAddress, answers.officeNumber)
    });
}

// Prompt questions for adding an Engineer
function addEngineer () {
    inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'Please enter the name of the Engineer.',
      },
      {
          type: 'input',
          name: 'employeeID',
          message: 'Please enter the id of the Engineer.',
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter the email address of the Engineer.',
      },
      {
          type: 'input',
          name: 'githubUsername',
          message: 'Please enter the github username of the Engineer.',
      }
      ]).then(answers => {
          const engineer = Engineer(answers.name, answers.employeeID, answers.emailAddress, answers.githubUsername)
      });
  }

  // Prompt questions for adding an Intern
function addIntern () {
    inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'Please enter the name of the Intern.',
      },
      {
          type: 'input',
          name: 'employeeID',
          message: 'Please enter the id of the Intern.',
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter the email address of the Intern.',
      },
      {
          type: 'input',
          name: 'school',
          message: 'Please enter the school of the Intern.',
      }
      ]).then(answers => {
          const intern = Intern(answers.name, answers.employeeID, answers.emailAddress, answers.school)
      });
  }

// function to initialize program
// using async/await and try/catch
const init = async () => {
    console.log('Hello manager, welcome to the Team Profile Generator.');
    try {
     //wait until the promise is settled
      const answers = await promptManager();
      
  
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();

