'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_id: DataTypes.INTEGER,
    account: DataTypes.STRING,
    buysell: DataTypes.STRING,
    shares: DataTypes.INTEGER,
    trade_price: DataTypes.FLOAT,
    name: DataTypes.STRING,
    order_date: DataTypes.DATE,
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  return Order;
};
