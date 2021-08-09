const NewPerson = require("./NewPerson");

class newEngineer extends NewPerson {
    constructor(name, id, email, github) {
        //shorthand for return.template
        super(name, id, email);
        this.github = github;
    }

    getGIthub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = newEngineer;