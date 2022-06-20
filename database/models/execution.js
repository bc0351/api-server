'use strict';
module.exports = (sequelize, DataTypes) => {
  const Execution = sequelize.define('Execution', {
    execution_id: DataTypes.INTEGER,
    trade_date: DataTypes.DATE,
    settle_date: DataTypes.DATE,
    settle_price: DataTypes.FLOAT,
    trade_amount: DataTypes.FLOAT,
    settle_amount: DataTypes.FLOAT,
    commission: DataTypes.FLOAT,
    order_id: DataTypes.INTEGER,
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Execution.associate = function (models) {
    // define association here
    Execution.hasMany(models.Allocation, {
      foreignKey: 'allocation_id',
      as: 'allocation',
      onDelete: 'CASCADE'
    });
    Execution.belongsTo(models.Order, {
      foreignKey: 'order_id',
      as: 'order',
      onDelete: 'CASCADE',
    })
  }
  return Execution;
};
