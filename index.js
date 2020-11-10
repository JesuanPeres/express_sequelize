const express = require('express');
const routes = require('./src/routes');
require('dotenv').config();
require('./src/database');
const app = express();

app.use(routes);

PORT = 8080;

app.listen(8080, () => console.log(`Server iniciado na porta ${PORT}`));