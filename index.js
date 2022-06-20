'use strict';
const { sequelize, ClientModel, OrderModel, ExecutionModel, AllocationModel, ConfirmationModel } = require('./database/models');
const server = require('./src/server');
sequelize.sync().then(() => { console.log('SUCCESS'); }).catch(err=>console.error(err));
server.start();
