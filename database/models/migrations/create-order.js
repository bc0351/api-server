'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      account: {
        type: Sequelize.STRING
      },
      buysell: {
        type: Sequelize.STRING
      },
      shares: {
        type: Sequelize.INTEGER
      },
      trade_price: {
        type: Sequelize.FLOAT
      },
      name: {
        type: Sequelize.STRING
      },
      order_date: {
        type: Sequelize.DATE
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
