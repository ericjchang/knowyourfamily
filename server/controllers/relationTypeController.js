const { Relation_Type } = require('../models');

class RelationController {
  static findAll (req, res, next) {
    Relation_Type.findAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        return next(err);
      })
  }
  
  static findOne (req, res, next) {
    let { id } = req.params;
    Relation_Type.findOne({
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

module.exports = RelationController;