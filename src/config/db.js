const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:17017/db_employees');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name:String,
    mail:String,
    role:String
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;


