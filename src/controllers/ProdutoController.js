const Produto = require('../models/Produto');
const { associate } = require('../models/Usuario');
const Usuario = require('../models/Usuario');

module.exports = {
    async index(req, res) {
        const { usuarioId } = req.params;
        const usuario = await Usuario.findByPk(usuarioId, {
            include: { association: 'produtos'}
        })
        return res.json({
            usuario
        })
    }
}