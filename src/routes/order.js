'use strict';

const express = require('express');
const { orderInterface, clientInterface } = require('../../database/models');

const router = express.Router();

router.post('/order', async (req, res, next) => {
  let client = req.body;
  console.log(req.body);
  await orderInterface.create(client)
    .then(response => { res.status(200).send(response) });
});

router.get('/order', async (req, res, next) => {
  await orderInterface.readAll()
    .then(allOrders => res.status(200).send(allOrders));
});

router.get('/order/1/:id', async (req, res, next) => {
  let { id } = req.params;
  await orderInterface.readOne(id)
    .then(oneOrder => { res.status(200).send(oneOrder) });
});

router.put('/order/1/:id', async (req, res, next) => {
  let { id } = req.params;
  let { update } = req.body;
  await orderInterface.update(update, {where: {id}})
    .then(updatedOrder => { res.status(200).send(updatedOrder) });
});

router.get('/orderOrders/:id', async (req, res, next) => {
  let { id } = req.params;
  await orderInterface.readWithRelations(id, { include: clientInterface.model })
    .then(oneOrder => { res.status(200).send(oneOrder) });
});

router.delete('/order/1/:id', async (req, res, next) => {
  let { id } = req.params;
  await orderInterface.delete(id)
    .then(await orderInterface.readOne(id))
    .then(response => { (response) ? res.status(500).send('Failed to delete record.') : res.status(200).send(response)});
});

module.exports = router;
