const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(id, github) {
        super(employeeName, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;