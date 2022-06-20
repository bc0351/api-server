'uses strict';

module.exports = function errorHandler(err, req, res, next){
  const error = err.message ? err.message : err;
  res.status(500).send(error);
};
