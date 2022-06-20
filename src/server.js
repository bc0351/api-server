'use strict';
const express = require('express');
const logger = require('./middleware/logger');
const errorHandler = require('./error-handlers/errors');
const {notFoundHandler, badRequestHandler} = require('./error-handlers/client-errors');
const clientRouter = require('./routes/client');
const orderRouter = require('./routes/order');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(logger);
app.use(clientRouter);
app.use(orderRouter);
app.use(notFoundHandler);
app.use(badRequestHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port: ', PORT))
};
