const PersonRepository = require('../repository/PersonRepository');
const redis = require('redis');
const client = redis.createClient('6379','redis');

exports.get = (req, res, next) => {

    client.get('allpersons', (err, reply) => {
        if (reply) {
            console.log('CACHING BY REDIS');
            res.send(JSON.parse(reply));
        } else {
            console.log('buscando no mongodb')
            PersonRepository.getAll()
                .then((person) => {
                    client.set('allpersons', JSON.stringify(person));
                    client.expire('allpersons', 60);
                    res.status(200).send(person);
                }).catch(err => res.status(500).send(err))
        }
    })
};
exports.getById = (req, res, next) => {

    
    PersonRepository.getById(req.params.id)
        .then(person => {
            res.status(200).send(person);
        })
        .catch(err => res.status(500).send(err))
};
exports.post = (req, res, next) => {
    const p = req.body;

    PersonRepository.create(p)
        .then(person => res.status(200).send(person))
        .catch(err => res.status(500).send(err))
};
exports.put = (req, res, next) => {
    const p = req.body;

    PersonRepository.update(req.params.id, p)
        .then(person => res.status(201).send(person))
        .catch(err => res.status(500).send(err))
};
exports.delete = (req, res, next) => {
    PersonRepository.delete(req.params.id)
        .then(person => res.status(200).send('delete succeded!'))
        .catch(err => res.status(500).err(err))
};