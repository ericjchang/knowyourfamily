const { User } = require('../models');
const { encrypt, compare } = require('../helpers/bcrypt.js');
const { userToken } = require('../helpers/jwt.js');

class UserController {
  static register(req, res, next) {
    const { email, password } = req.body;
    User.create({
      email,
      password,
    })
      .then((result) => {
        const payload = {
          id: result.id,
          email: result.email,
        };
        res.status(201).json(payload);
      })
      .catch((err) => {
        // console.log(err);
        return next(err);
      });
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: {
        email,
      },
    })
      .then((result) => {
        if (result) {
          if (compare(password, result.password)) {
            let access_token = userToken({
              id: result.id,
              email: result.email,
            });
            res.status(200).json({ access_token });
          } else {
            return next({
              code: 401,
              msg: 'Password does not match!',
            });
          }
        } else {
          return next({
            code: 404,
            msg: 'User is not registered',
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  }
}

module.exports = UserController;
