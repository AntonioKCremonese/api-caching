const {Router} = require('express');
const PersonController = require('./controllers/PersonController');

const routes = new Router();

routes.get('/person',PersonController.get);
routes.get('/person/:id',PersonController.getById);
routes.post('/person',PersonController.post);
routes.put('/person',PersonController.put);
routes.delete('/person/:id',PersonController.delete);

module.exports = routes;