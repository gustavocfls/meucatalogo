const express = require('express');
const routes = express.Router();

const User = require('./controllers/users.controller');

routes.get('/', User.index);

// ROTAS DE USUARIOS
routes.post('/api/users', User.create);
routes.get('/api/users', User.index);
routes.get('/api/users/profile/:username',User.details);
routes.delete('/api/users/:_id', User.delete);
routes.put('/api/users', User.update);

module.exports = routes;