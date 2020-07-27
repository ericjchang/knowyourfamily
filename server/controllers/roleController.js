const {Role_Type } = require('../models');

class RoleController {
  static findAll (req, res, next) {
    Role_Type.findAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        return next(err);
      })
  }

  static findOne (req, res, next) {
    const { id } = req.params;
    Role_Type.findOne({
      where: {
        id
      }
    })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        return next(err);
      })
  }
}

module.exports = RoleController;