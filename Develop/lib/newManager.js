//imports the base constructor from newPerson
const newPerson = require("./NewPerson");

class newManager extends newPerson {
    constructor(name, id, email, officeNo) {
        //shorthand for return.template
        super(name, id, email);
        this.officeNo = officeNo;
    }

    getOfficeNo() {
        return this.officeNo;
    }

    getBase() {
        return "manager";
    }
}

module.exports = newManager;