const {Router} = require('express');
const PersonController = require('./controllers/PersonController');

const routes = new Router();

routes.get('/',PersonController.post);

module.exports = routes;