//this constructor creates the base outline for a new Person within the company
class NewPerson {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    //getBase for use within the command line
    getBase() {
        return "person";
    }
}

//exports for use to create professions
module.exports = NewPerson;