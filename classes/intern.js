const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.other = school;
    }
    getSchool() {
        return this.other;
    }
    getRole = function() {
        return "Intern";
    }
}

module.exports = Intern;