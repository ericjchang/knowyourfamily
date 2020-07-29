const { Relationship, Individual, Role_Type } = require('../models');
const Op = require('sequelize').Op;

class RelationshipController {
  static findAll(req, res, next) {
    const id = req.headers.userid;
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
          model: Role_Type,
          attributes: ['description'],
        },
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
        const data = [];
        result.forEach((el) => {
          if (el.Individual1.id !== +id) data.push({ data: el.Individual1, role: el.Role_Type.description });
          else data.push({ data: el.Individual2, role: el.Role_Type.description });
        });
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  }

  static requested(req, res, next) {
    const id = req.header.userId;
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

  static createRelationship(req, res, next) {
    const data = {
      IndividualId1: +req.headers.userid, //id user yang lagi aktif
      IndividualId2: +req.body.id, //id user yang mau di relation kan
      RoleTypeId: +req.body.RoleTypeId, //role type
    };
    console.log(data);
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
