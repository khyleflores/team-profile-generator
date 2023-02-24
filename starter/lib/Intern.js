const Employee = require("./Employee");

class Intern extends Employee{
    constructor() {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return 'Intern';
    }
}

