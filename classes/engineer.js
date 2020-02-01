const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.other = github;
    }
    getGithub() {
        return this.other;
    }
    getRole = function() {
        return "Engineer";
    }
}

module.exports = Engineer;