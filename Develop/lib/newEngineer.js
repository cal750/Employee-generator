//imports the base constructor from newPerson
const newPerson = require("./NewPerson");

class newEngineer extends newPerson {
    constructor(name, id, email, github) {
        //shorthand for return.template
        super(name, id, email);
        this.github = github;
    }

    getGIthub() {
        return this.github;
    }

    getBase() {
        return "Engineer";
    }
}

module.exports = newEngineer;