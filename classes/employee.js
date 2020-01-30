class Employee {
    constructor(name, id, title) {
        this.name = name
        this.id = id
        this.title = title
    }
    getName = function() {
        return this.name
    }
    getId = function() {
        return this.id
    }
    getEmail = function() {
        return this.email
    }
    getRole = function() {
        return "Employee"
    }
}

module.exports = Employee;