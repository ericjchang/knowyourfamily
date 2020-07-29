const { Relationship, Individual, Role_Type } = require('../models');
const Op = require('sequelize').Op;

class RelationshipController {
  static findAll(req, res, next) {
    const id = req.userData.id;
    Relationship.findAll({
      where: {
        [Op.or]: {
          IndividualId1: id,
          IndividualId2: id,
        },
        status: true,
      },
      include: [
        {
          model: Individual,
          as: 'Individual1',
        },
        {
          model: Individual,
          as: 'Individual2',
        },
      ],
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        return next(err);
      });
  }

  static requested(req, res, next) {
    const id = req.userData.id;
    Relationship.findAll({
      where: {
        IndividualId2: id,
        status: false,
      },
      include: [
        {
          model: Individual,
          as: 'Individual1',
        },
        {
          model: Individual,
          as: 'Individual2',
        },
      ],
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  }

  static findOne(req, res, next) {
    const { id } = req.params;
    Relationship.findOne({
      where: {
        id,
        status: true,
      },
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        return next(err);
      });
  }

  static createRelationship(req, res, next) {
    const data = {
      IndividualId1: req.userData.id,
      IndividualId2: +req.body.id,
      RoleTypeId: +req.body.Role_TypeId,
    };
    Relationship.create(data)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  }

  static updateRelationship(req, res, next) {
    const { id } = req.params;
    const { status } = req.body;
    let data;
    Relationship.findByPk(id)
      .then((result) => {
        data = { ...result, status: status };
        return Relationship.update(data, {
          where: { id: id },
        });
      })
      .then(() => {
        res.status(200).json({ message: 'updated succesfully' });
      })
      .catch((err) => {});
  }

  static deleteRelationship(req, res, next) {
    let { id } = req.params;
    let deleted;
    Relationship.findOne({
      where: {
        id,
      },
    })
      .then((result) => {
        deleted = result;
        let { status } = req.body;
        let updated = status;
        return Relationship.update(updated, {
          where: {
            id,
          },
          returning: true,
        });
      })
      .then((data) => {
        if (deleted) {
          res.status(200).json({
            msg: 'Relationship has been terminated',
          });
        } else {
          return next({
            code: 404,
            msg: 'Relationship does not exists',
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  }
}

module.exports = RelationshipController;
