const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, room) {
        super(name, id, email)
        this.other = room;
    }
    getRole = function() {
        return "Manager";
    }
}

module.exports = Manager;