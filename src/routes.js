const Router  = require('express').Router();

const UsuarioController = require('./controllers/UsuarioController');
const ProdutoController = require('./controllers/ProdutoController');


Router.get('/usuarios', UsuarioController.index);

// Rotas de fotos
Router.get('/:usuarioId/produtos', ProdutoController.index);

module.exports = Router;