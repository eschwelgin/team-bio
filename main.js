const inquirer = require ("inquirer")
const fs = require ("fs");
const Employee = require("./classes/employee.js");
const Engineer = require("./classes/engineer.js");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");
let employeeList = []
let employeeCount = 0

function createHtml(employeeList) {
    startHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
      <style>
        body { text-align:center; }
        div { background-color: orange;
              font-size: 2.3em;
              display: inline-block;
              margin: 10px;
              padding: 10px 30px 10px 30px;
              border: 2px solid black;
              border-radius: 7px; }
      </style>
    </head>
      <body>`
    fs.writeFile('./output/team.html', startHtml, (err) => {
        if (err) {
            console.log(err)
        }
        // console.log("File created")
    })

  
    
    for (let x=0; x<employeeList.length; x++) {
        
        // fs.appendFile('./output/team.html', "<div>", (err) => { if (err) { console.log(err) } console.log(`Added ${employeeList[x].name} to file`)})
        fs.appendFile('./output/team.html', `<div>${employeeList[x].name}<br/>`, (err) => { if (err) { console.log(err) } console.log(`Added ${employeeList[x].name} to file`)})
        // fs.appendFile('./output/team.html', "<br/>", (err) => { if (err) { console.log(err) } console.log(`Added ${employeeList[x].name} to file`)})
        fs.appendFile('./output/team.html', `${employeeList[x].getRole()}<br/>`, (err) => { if (err) { console.log(err) } })
        fs.appendFile('./output/team.html', `${employeeList[x].email}<br/>`, (err) => { if (err) { console.log(err) } })
        // fs.appendFile('./output/team.html', "<br/>", (err) => { if (err) { console.log(err) } console.log(`Added ${employeeList[x].name} to file`)})
        fs.appendFile('./output/team.html', `Employee ID = ${employeeList[x].id}<br/>`, (err) => { if (err) { console.log(err) } })
        // fs.appendFile('./output/team.html', "<br/>", (err) => { if (err) { console.log(err) } console.log(`Added ${employeeList[x].name} to file`)})
        fs.appendFile('./output/team.html', `${employeeList[x].other}</div>`, (err) => { if (err) { console.log(err) } })
        // fs.appendFile('./output/team.html', "</div><br/>", (err) => { if (err) { console.log(err) } console.log(`Added ${employeeList[x].name} to file`)})
        if ( 
            (employeeList[x].getRole() === "Manager" && employeeList[x+1].getRole() === "Engineer") || 
            (employeeList[x].getRole() === "Engineer" && employeeList[x+1].getRole() === "Intern") ||
            (x/3 === 1) ) {
                fs.appendFile('./output/team.html', `<br/>`, (err) => { if (err) { console.log(err) } })}
    }

    endHtml = `
        </body>
        </html>
        `
    fs.appendFile('./output/team.html', endHtml, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("File finished")
    })



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
        answers.school0 = "Currently Studying at " + answers.school0 
        // console.log(answers.name0, answers.id0, answers.email0, answers.school0);
        const intern = new Intern(answers.name0, answers.id0, answers.email0, answers.school0)
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
        answers.github0 = "GitHub = " + answers.github0 
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
        answers.room0 = "Room # " + answers.room0 
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
        // console.log("New Manager Being Created")
        createManager()
    } else if (choice === "Create Engineer") {
        // console.log("New Engineer Being Created")
        createEngineer()
    } else if (choice === "Create Intern") {
        // console.log("New Intern Being Created")
        createIntern()
    } else {
        console.log("Creating Docs")
        // console.log(employeeList)
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
