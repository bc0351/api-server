'use strict';

/**
 * Description:  
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function internalErrorHandler(req, res, next) {
  console.log(req.body);
  res.status(500).send('Internal Server Error');
}

// function badGatewayHandler(req, res, next) {
//   res.status(502).send('Bad Gateway');
// }

// function unavailableHandler(req, res, next) {
//   res.status(503).send('Service Unavailable');
// }

// function gatewayTimeoutHandler(req, res, next) {
//   res.status(504).send('Gateway Timeout');
// }

// function networkAuthHandler(req, res, next) {
//   res.status(511).send('Network Authentication Required');
// }

module.exports = {
  internalErrorHandler,
  // badGatewayHandler,
  // unavailableHandler,
  // gatewayTimeoutHandler,
  // networkAuthHandler
}
