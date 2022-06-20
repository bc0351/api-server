'use strict';
module.exports = (sequelize, DataTypes) => {
  const Allocation = sequelize.define('Allocation', {
    allocation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shares: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_name: DataTypes.STRING,
    account: DataTypes.STRING,
    name: DataTypes.STRING,
    trade_date: DataTypes.DATE,
    settle_date: DataTypes.DATE,
    execution_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Allocation.associate = function (models) {
    // define association here
    Allocation.hasOne(models.Confirmation, {
      foreignKey: 'confirmation_id',
      as: 'confirmation',
      onDelete: 'CASCADE'
    });
    Allocation.belongsTo(models.Execution, {
      foreignKey: 'execution_id',
      as: 'execution',
      onDelete: 'CASCADE'
    });
  };
  return Allocation;
};
