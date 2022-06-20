'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Clients',
    [
      {
        client_id: 123,
        client_name: "John Doe",
        email: "john@doe.com",
        account: "123456789",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        client_id: 321,
        client_name: "Jane Doe",
        email: "jane@doe.com",
        account: "987654321",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Clients', null, {}),
};
