'use strict';
module.exports = (sequelize, DataTypes) => {
  const Confirmation = sequelize.define('Confirmation', {
    confirmation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shares: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    account: DataTypes.STRING,
    name: DataTypes.STRING,
    trade_date: DataTypes.DATE,
    settle_date: DataTypes.DATE,
    client_name: DataTypes.STRING,
    account: DataTypes.INTEGER,
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Confirmation.associate = function (models) {
    // define association here
    Confirmation.belongsTo(models.Client, {
      foreignKey: 'client_id',
      as: 'client',
      onDelete: 'CASCADE'
    });
    Confirmation.belongsTo(models.Allocation, {
      foreignKey: 'allocation_id',
      as: 'allocation',
      onDelete: 'CASCADE'
    });
  }
  return Confirmation;
};
