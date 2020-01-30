// const Employee = require(".././classes/employee.js");
// const Engineer = require(".././classes/engineer.js");
// const Intern = require(".././classes/intern");
// const Manager = require(".././classes/manager");
const Main = require(".././main.js")

// const jimbo = new Engineer()
// console.log(jimbo.getRole())
// const timbo = new Intern
// console.log(timbo.getRole())
// const kimbo = new Manager
// console.log(kimbo.getRole())

test('choiceFn = Manager', () => {
    expect(main.choiceFn("Create Manager")).toBe("Manager");
  });