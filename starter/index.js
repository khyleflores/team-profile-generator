const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Render function
const render = require("./src/page-template.js");

// Array to contain all employee objects to render HTML page
const employeesArray = [];

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
    },
    {
      type: 'confirm',
      name: 'addTeam',
      message: "Would you like to add a team member?"
    }
    ]).then(answers => {
        //create new Manager object from the answer from prompts
        const manager = new Manager(answers.name, answers.employeeID, answers.emailAddress, answers.officeNumber)
        //Push object to Employees array
        employeesArray.push(manager);
        //If addTeam is Yes then call addTeam function
        if (answers.addTeam){
          addTeam();
        }
        //If addTeam is no then logged there is no team and render page with Manager details
        else{
          console.log("You have not added any team members");
          renderHTML();
          console.log("Nonetheless, HTML page has been created.");
        }
    });
}


// Prompt to add Engineer or Intern
function addTeam () {
  //Menu to add Team members
  inquirer.prompt([
    {
      type: 'list',
      name: 'addTeamRole',
      message: "Would you like to add an Engineer or Intern to the team?",
      choices: ['Engineer', 'Intern', 'Team Completed']
    }
    ]).then(answers => {
      //Switch case depending on answers
      switch (answers.addTeamRole) {
        case 'Engineer':
          addEngineer();
          break; 
        
        case 'Intern':
          addIntern();
          break; 

        case 'Team Completed':
          //Function to write file
          console.log("Team is completed");
          //console.log(employeesArray);
          renderHTML();
          break; 
      };
      });
}

// Prompt questions for adding an Engineer
const addEngineer = async () => {
  //Added async and await to wait for prompts
  await inquirer.prompt([
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
          // Create new engineer object from the prompts
          const engineer = new Engineer(answers.name, answers.employeeID, answers.emailAddress, answers.githubUsername)
          //Push this engineer to the array for rendering later
          employeesArray.push(engineer);
          console.log("New engineer has been added to the team!");
        });

    //Call addTeam function again to check if manager wants to add another team member
    addTeam();
  }

  // Prompt questions for adding an Intern
  const addIntern = async () => {
    await inquirer.prompt([
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
        // Create new intern object from the prompts
          const intern = new Intern(answers.name, answers.employeeID, answers.emailAddress, answers.school)
          //Push this intern to the array for rendering later
          employeesArray.push(intern);
          console.log("New intern has been added to the team!");
        });

    //Call addTeam function again to check if manager wants to add another team member
    addTeam();
  }

// function to initialize program
// using async/await and try/catch
const init = async () => {
    console.log('Hello manager, welcome to the Team Profile Generator.');
    try {
     //wait until the promise is settled
      await promptManager();

    } catch (err) {
      console.log(err);
    }
  };

//Function to render the HTML page
function renderHTML (){
  try {
    // Write a file using the HTML returned from the render function
    fs.writeFileSync(outputPath, render(employeesArray), "UTF-8");
    console.log('Success! Your HTML page has been generated in the output folder.')
  //If there is any error, log error
  } catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();


