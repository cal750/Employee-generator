//imports the base constructor from newPerson
const newPerson = require("./NewPerson"); 

class newIntern extends newPerson {
    constructor(name, id, email, school) {
        //shorthand for return.template
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getBase() {
        return "intern";
    }
}

module.exports = newIntern;