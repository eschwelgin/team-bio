const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, room) {
        super(name, id, email)
        this.room = room;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;