const { Individual } = require('../models');
const Op = require('sequelize').Op;

class IndividualController {
  static findAll(req, res, next) {
    const keyword = req.query.search;
    const id = +req.userData.id;

    if (keyword) {
      Individual.findAll({
        where: keyword ? { name: { [Op.iLike]: `%${keyword}%` } } : null,
      })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          return next(err);
        });
    } else {
      Individual.findAll({
        where: { UserId: id },
      })
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          return next(err);
        });
    }
  }

  static findOne(req, res, next) {
    Individual.findOne();
  }

  static findByPk(req, res, next) {
    const { id } = req.params;
    Individual.findByPk(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  }

  static createIndividual(req, res, next) {
    const { name, gender, date_of_birth, place_of_birth, address, location, instagram, facebook } = req.body;
    let UserId = req.userData.id;
    Individual.create({
      name,
      gender,
      date_of_birth,
      place_of_birth,
      address,
      location,
      instagram,
      facebook,
      UserId,
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        return next(err);
      });
  }

  static updateIndividual(req, res, next) {
    const { id } = req.params;
    const { name, gender, date_of_birth, place_of_birth, address, location, instagram, facebook } = req.body;
    let UserId = req.userData.id;
    let updated = { name, gender, date_of_birth, place_of_birth, address, location, instagram, facebook };
    Individual.update(updated, {
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
            msg: 'Data not found',
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  }

  static deleteIndividual(req, res, next) {
    let { id } = req.params;
    let deleted;
    Individual.findOne({
      where: {
        id,
      },
    })
      .then((result) => {
        deleted = result;
        return Individual.destroy({
          where: {
            id,
          },
        });
      })
      .then(() => {
        if (deleted) {
          res.status(200).json({
            msg: `Successfully deleted individual`,
          });
        } else {
          return next({
            code: 404,
            msg: 'Data not found',
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
  }
}

module.exports = IndividualController;
