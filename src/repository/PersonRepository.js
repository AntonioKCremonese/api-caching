const mongoose = require('mongoose');
const Person = require('../config/db');

module.exports = new class PersonRepository {

    getAll() {
        return Person.find();
    }

    getById(id) {
        return Person.findById(id);
    }

    create(person) {
        return Person.create(person);
    }

    update(id, person) {

        const updatedPerson = {
            name: person.name,
            mail: person.mail,
            role: person.role,
        }
        return Person.findByIdAndUpdate(id, updatedPerson, { new: true });
    }

    delete(id){
        return Person.findByIdAndDelete(id);
    }
}