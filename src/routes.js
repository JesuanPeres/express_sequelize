const Router  = require('express').Router();

const UsuarioController = require('./controllers/UsuarioController');
const ProdutoController = require('./controllers/ProdutoController');
const AuthController = require('./controllers/AuthController');


Router.get('/usuarios', UsuarioController.index);

// Rotas de fotos
Router.get('/:usuarioId/produtos', ProdutoController.index);

Router.post('/login', AuthController.login);

module.exports = Router;