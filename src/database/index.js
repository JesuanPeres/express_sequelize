const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const sequelize = new Sequelize(dbConfig);

//Inicializações
const Usuario = require('../models/Usuario');
Usuario.init(sequelize);

const Produto = require('../models/Produto');
Produto.init(sequelize);


//Associações
Produto.associate(sequelize.models);
Usuario.associate(sequelize.models);

module.exports = sequelize;