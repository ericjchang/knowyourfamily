'use strict';

function errorHandler (err, req, res, next) {
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({
      msg: err.message
    })
  } else if (err.name === 'JsonWebTokenError') {
    res.status(401).json({
      msg: 'Please Login'
    })
  } else {
    res.status(err.code || 500).json({
      error: err
    })
  }
}

module.exports = errorHandler;