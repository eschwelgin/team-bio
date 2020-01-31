const inquirer = require ("inquirer")
const fs = require ("fs");
const Employee = require("./classes/employee.js");
const Engineer = require("./classes/engineer.js");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");
let employeeList = []
let employeeCount = 0

function createHtml(employeeList) {
  
}

function createIntern() {
    // console.log(name0)
    const questions = [
        {   type: "input",
            message: `What is the Intern's Name?`,
            name: "name0"
        },
        {   type: "input",
            message: `What is the Intern's employee ID?`,
            name: "id0"
        },
        {   type: "input",
            message: `What is the Intern's email?`,
            name: "email0"
        },
        {   type: "input",
            message: `What is the Intern's School?`,
            name: "school0"
        }
    ];
    inquirer
    .prompt(questions)
    .then(answers => {
        // console.log(answers.name0, answers.id0, answers.email0, answers.school0);
        const intern = new Intern(answers.name0, answers.id0, answers.email0, answers.room0)
        employeeList.push(intern)
        // employeeList[employeeCount].title = "Intern"
        // employeeList[employeeCount].name = answers.name0 
        // employeeList[employeeCount].id = answers.id0, 
        // employeeList[employeeCount].email = answers.email0, 
        // employeeList[employeeCount].school = answers.school0
        createEmployee()
        })
}

function createEngineer() {
    // console.log(name0)
    const questions = [
        {   type: "input",
            message: `What is the Engineer's Name?`,
            name: "name0"
        },
        {   type: "input",
            message: `What is the Engineer's employee ID?`,
            name: "id0"
        },
        {   type: "input",
            message: `What is the Engineer's email?`,
            name: "email0"
        },
        {   type: "input",
            message: `What is the Engineer's github?`,
            name: "github0"
        }
    ];
    inquirer
    .prompt(questions)
    .then(answers => {
        // console.log(answers.name0, answers.id0, answers.email0, answers.github0);
        const engineer = new Engineer(answers.name0, answers.id0, answers.email0, answers.github0)
        employeeList.push(engineer)
        // employeeList[employeeCount].title = "Engineer"
        // employeeList[employeeCount].name = answers.name0 
        // employeeList[employeeCount].id = answers.id0, 
        // employeeList[employeeCount].email = answers.email0, 
        // employeeList[employeeCount].github = answers.github0
        createEmployee()
        })
}

function createManager() {
    // console.log(name0)
    const questions = [
        {   type: "input",
            message: "Enter Manager Name",
            name: "name0"
        },
        {   type: "input",
            message: `What is Manager's employee ID?`,
            name: "id0"
        },
        {   type: "input",
            message: `What is Manager's email?`,
            name: "email0"
        },
        {   type: "input",
            message: `What is Manager's office number?`,
            name: "room0"
        }
    ];
    inquirer
    .prompt(questions)
    .then(answers => {
        // console.log(answers.name0, answers.id0, answers.email0, answers.room0);
        const manager = new Manager(answers.name0, answers.id0, answers.email0, answers.room0)
        employeeList.push(manager)
        // employeeList[employeeCount].title = "Manager"
        // employeeList[employeeCount].name = answers.name0 
        // employeeList[employeeCount].id = answers.id0, 
        // employeeList[employeeCount].email = answers.email0, 
        // employeeList[employeeCount].room = answers.room0
        createEmployee()
        })
    
}

function choiceFn(choice) {
    // console.log(choice)
    if (choice === "Create Manager") {
        console.log("New Manager Being Created")
        createManager()
    } else if (choice === "Create Engineer") {
        console.log("New Engineer Being Created")
        createEngineer()
    } else if (choice === "Create Intern") {
        console.log("New Intern Being Created")
        createIntern()
    } else {
        console.log("Finished, Creating Docs")
        console.log(employeeList)
        createHtml(employeeList)
    }
}

function createEmployee() {
    employeeCount++
    // console.log(employeeCount)
    const questions = [
        {   type: "list",
            message: "Create Another Employee?",
            name: "choice",
            choices: ["Create Manager", "Create Engineer", "Create Intern", "Finished"]
        }
    ];
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers.choice);
        choiceFn(answers.choice)
        })
}

console.log("Create Your Team")
createManager()
