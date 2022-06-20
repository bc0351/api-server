'use strict';

const supertest = require('supertest');
const { server } = require('../src/server.js');
const { sequelize } = require('../database/models');
const mockRequest = supertest(server);
const {clientInterface, orderInterface} = require('../database/models/index');
require('dotenv').config();

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop().then(sequelize.close());
});

describe('REST API Server Route Handling Tests', () => {
  let where = { client_id: 1232 };
  test('404 on a bad route', async () => {
    const response = await mockRequest.post('/trades').send(where);
    expect(response.status).toEqual(404);
  });
  test('404 on a bad method', async () => {
    const response = await mockRequest.put('/client').send({ where });
    expect(response.status).toEqual(404);
  });
});

describe('REST API Client Request Tests', () => {
  let mockClient = {
    client_id: 1231,
    client_name: 'John Wayne',
    email: 'john@wayne.com',
    account: '329854132'
  };
  let where = {client_id: 123};
  let update = {email: 'test@wayne.com'};
  test('Create a Client', async () => {
    const response = await mockRequest.post('/client').send(mockClient);
    expect(response.status).toEqual(200);
  });

  test('Get one Client\'s Records', async () => {
    let params = [{update: {...update}},{where: {...where}}];
    console.log(params);
    const response = await mockRequest.get('/client/1').send(params);
    expect(response.status).toEqual(200);
  });

  test('Get all Client Records', async () => {
    const response = await mockRequest.get('/client').send();
    expect(response.status).toEqual(200);
  });

  test('Update a client\'s email address', async () => {
    console.log(update, where);
    let params = {};
    params['update'] = {...update};
    params['where'] = {...where};
    const response = await mockRequest.put(`/client/1`).send(params);
    expect(response.status).toEqual(200);
  });

  test('Delete a Client\'s Records', async () => {
    let id = {id: 1};
    const response = await mockRequest.delete(`/client/1`).send(id);
    expect(response.status).toEqual(200);
  });
});
