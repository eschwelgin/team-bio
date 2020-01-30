const inquirer = require ("inquirer")
const fs = require ("fs");
const Employee = require("./classes/employee.js");
const Engineer = require("./classes/engineer.js");
const Intern = require("./classes/intern");
const Manager = require("./classes/manager");

//next up build classes and import / export 


// const jimbo = new Employee()
// jimbo.test()

const jimbo = new Engineer("github profile")
console.log(jimbo.getRole())
const timbo = new Intern
console.log(timbo.getRole())
const kimbo = new Manager
console.log(kimbo.getRole())




