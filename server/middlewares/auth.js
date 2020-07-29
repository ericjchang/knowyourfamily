'use strict';

const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models');

module.exports = {
  authentication: (req, res, next) => {
    const { access_token } = req.headers;
    if (!access_token) return next({ name: 'ACCESS_TOKEN_ERR', message: 'access_token is required' });

    try {
      //   check token JWT
      const data_decoded = verifyToken(access_token, process.env.SECRET);

      User.findByPk(data_decoded.id)
        .then((result) => {
          if (result) {
            req.userData = data_decoded;
            return next();
          } else return next({ name: 'NOT_FOUND_ERR', message: 'User Not Found' });
        })
        .catch((err) => {
          return next(err);
        });
    } catch (error) {
      return next({ name: 'ACCESS_TOKEN_ERR' });
    }
  },
};
