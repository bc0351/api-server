'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envConfigs = require('../config/config');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'test';
const config = envConfigs[env];
const db = {};

const modelInterface = require('./modelInterface');
const clientSchema = require('./client');
const orderSchema = require('./order');
// const executionSchema = require('./execution');
// const allocationSchema = require('./allocation');
// const confirmationSchema = require('./confirmation');

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const ClientModel = clientSchema(sequelize, Sequelize.DataTypes);
const OrderModel = orderSchema(sequelize, Sequelize.DataTypes);

// TO DO: Finish models.
// const ExecutionModel = executionSchema(sequelize, Sequelize.DataTypes);
// const AllocationModel = allocationSchema(sequelize, Sequelize.DataTypes);
// const ConfirmationModel = confirmationSchema(sequelize, Sequelize.DataTypes);
module.exports = {
  sequelize: db.sequelize,
  Sequelize: db.Sequelize,
  clientInterface: new modelInterface(ClientModel),
  orderInterface: new modelInterface(OrderModel)
}
