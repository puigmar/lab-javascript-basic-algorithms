const express = require('express');
const routes = require('./routes');

// crear una app de express
const app = express();

app.use('/', routes() );

app.listen(7000);