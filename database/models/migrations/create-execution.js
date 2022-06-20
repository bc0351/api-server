'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Executions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      execution_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trade_date: {
        type: Sequelize.DATE
      },
      settle_date: {
        type: Sequelize.DATE
      },
      settle_price: {
        type: Sequelize.FLOAT
      },
      trade_amount: {
        type: Sequelize.FLOAT
      },
      settle_amount: {
        type: Sequelize.FLOAT
      },
      commission: {
        type: Sequelize.FLOAT
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Executions');
  }
};
