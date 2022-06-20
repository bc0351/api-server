'use strict';

module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    client_name: DataTypes.STRING,
    email: DataTypes.STRING,
    account: DataTypes.STRING
  }, {});
  Client.associate = function (models) {
    // define association here
    Client.hasMany(models.Order, {
      foreignKey: 'order_id',
      as: 'order',
      onDelete: 'CASCADE',
    });
    Client.hasMany(models.Allocation, {
      foreignKey: 'allocation_id',
      as: 'allocation',
      onDelete: 'CASCADE'
    });
    Client.hasMany(models.Confirmation, {
      foreignKey: 'confirmation_id',
      as: 'confirmation',
      onDelete: 'CASCADE'
    });
  }
  return Client;
};
