const express = require('express');
const app = express();
const { enableCORS, setSecurityHeaders } = require('./middlewares/security.middleware');
const errorHandler = require('./middlewares/errorHandler.middlerware');
const routes = require('./routes');
require('./store/sequelize');

app.use(express.json());
app.use(enableCORS);
app.use(setSecurityHeaders);

app.use('/api/v1', routes);

app.use(errorHandler);

module.exports = app;
