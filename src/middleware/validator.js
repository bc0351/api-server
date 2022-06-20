'use strict';

const routes = ['/clients','/orders','/executions','/allocations','/confirmations'];

function validatePath(req,res,next) {
  let route = req.originalUrl;
  if (route === '/') res.status(200).send('OK');
  if (!route in routes) res.status(404).send('Not Found');
  next('Please enter a valid path or query');
}

module.exports = {
  validatePath
}
