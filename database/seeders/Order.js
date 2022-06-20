'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Orders',
    [{
      order_id: '1',
      client_id: 123,
      account: '123456789',
      buysell: 'S',
      shares: 100,
      trade_price: 100.23,
      name: 'IBM',
      order_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    [{
      order_id: '1',
      client_id: 123,
      account: '123456789',
      buysell: 'B',
      shares: 100,
      trade_price: 675.44,
      name: 'Apple',
      order_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    [{
      order_id: '1',
      client_id: 123,
      account: '123456789',
      buysell: 'B',
      shares: 1000,
      trade_price: 50.94,
      name: 'General Electric',
      order_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Orders', null, {}),
};
