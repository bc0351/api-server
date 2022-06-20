'use strict';

/**
 * Description:
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


function badRequestHandler (req, res, next) {
  res.status(400).send('Bad Request');
}

// function unauthorizedHandler (req, res, next) {
//   res.status(401).send('Unauthorized');
// }

// function forbiddenHandler (req, res, next) {
//   res.status(403).send('Forbidden');
// }

function notFoundHandler (req, res, next) {
  res.status(404).send('Not Found');
}

module.exports = {
  badRequestHandler,
  // unauthorizedHandler,
  // forbiddenHandler,
  notFoundHandler
}
