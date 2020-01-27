const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/db_employees',{useNewUrlParser:true,useUnifiedTopology:true});

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name:String,
    mail:String,
    role:String
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;


