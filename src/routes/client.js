'use strict';

const express = require('express');
const { clientInterface, orderInterface } = require('../../database/models');

const router = express.Router();

router.post('/client', async (req, res, next) => {
  let {client_id, client_name, email, account } = req.body;
  console.log(req.body);
  await clientInterface.create({client_id, client_name, email, account } )
    .then(response => { res.status(200).send(response) });
});

router.get('/client', async (req, res, next) => {
  await clientInterface.readAll()
    .then(allClients => {console.log(allClients);res.status(200).send(allClients)});
});

router.get('/client/1/:id', async (req, res, next) => {
  let { id } = req.params;
  await clientInterface.readOne(id)
    .then(oneClient => { res.status(200).send(oneClient) });
});

router.put('/client/1/:id', async (req, res, next) => {
  let { id } = req.params;
  let {update} = req.params;
  await clientInterface.update(update, {where: {id}})
    .then(updatedOrder => { res.status(200).send(updatedOrder) });
});

router.get('/clientOrders/:id', async (req, res, next) => {
  let { id } = req.params;
  await clientInterface.readWithRelations(id, { include: orderInterface.model })
    .then(oneClient => { res.status(200).send(oneClient) });
});

router.delete('/client/1/:id', async (req, res, next) => {
  let { id } = req.params;
  await clientInterface.delete(id)
    .then(await clientInterface.readOne(id))
    .then(response => { (response) ? res.status(500).send('Failed to delete record.') : res.status(200).send(response)});
});

module.exports = router;
