const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const expiresIn = 300;

const Usuario = require('../models/Usuario');

module.exports =  {
    async login(req, res) {
        const { username, password } = req.body;
        const usuario = await Usuario.findOne({username});
        // (Checkar senha)
        
        const token = jwt.sign({userId: usuario.id}, secret, {expiresIn});
        return res.json({loged: true, token});
    }
}