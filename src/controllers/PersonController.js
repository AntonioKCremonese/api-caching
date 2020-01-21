const PersonRepository = require('../repository/PersonRepository');

exports.get = (req,res,next) =>{
    PersonRepository.getAll()
    .then(person => {
        res.status(200).send(person);
    })
    .catch(err => res.status(500).send(err))
};
exports.getById = (req,res,next) => {
    PersonRepository.getById(req.params.id)
    .then()
    .catch()
};
exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};