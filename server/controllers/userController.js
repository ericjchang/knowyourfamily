const { User } = require("../models");
const { encrypt, compare } = require("../helpers/bcrypt.js");
const { userToken } = require("../helpers/jwt.js");

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
        console.log(err);
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
            let payload = {
              id: result.id,
              email: result.email,
            };
            res.status(200).json({ access_token, payload });
          } else {
            return next({
              code: 401,
              msg: "Password does not match!",
            });
          }
        } else {
          return next({
            code: 404,
            msg: "User is not registered",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  }

  static findUserById(req, res, next) {
    const { id } = req.params;
    User.findOne({
      where: {
        id,
      },
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        return next(err);
      });
  }

  static updateUser(req, res, next) {
    const { id } = req.params;
    let hash = encrypt(req.body.password);
    let { email } = req.body;
    let updated = { email, hash };
    User.update(updated, {
      where: {
        id,
      },
      returning: true,
    })
      .then((result) => {
        if (result[0] > 0) {
          res.status(200).json(result[1][0]);
        } else {
          return next({
            code: 404,
            msg: "User not found",
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  }
}

module.exports = UserController;
