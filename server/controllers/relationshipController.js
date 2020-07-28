const { Relationship } = require('../models');

class RelationshipController {
  static findAll (req, res, next) {
    Relationship.findAll({
      where: {
        IndividualId,
        status: true
      }
    })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        return next(err)
      })
  }

  static findOne (req, res, next) {
    const { id } = req.params;
    Relationship.findOne({
      where: {
        id,
        status: true
      }
    })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        return next(err);
      })
  }

  static createRelationship (req, res, next) {
    Relationship.create()
  }

  static updateRelationship (req, res, next) {
    Relationship.update()
  }

  static deleteRelationship (req, res, next) {
    let { id } = req.params;
    let deleted;
    Relationship.findOne({
      where: {
        id
      }
    })
      .then(result => {
        deleted = result;
        let { status } = req.body;
        let updated = status;
        return Relationship.update(updated, {
          where: {
            id
          }, returning: true
        })
      })
      .then(data => {
        if (deleted) {
          res.status(200).json({
            msg: 'Relationship has been terminated'
          })
        } else {
          return next({
            code: 404,
            msg: 'Relationship does not exists'
          });
        }
      })
      .catch(err => {
        return next(err);
      })
  }
}

module.exports = RelationshipController;