const { Individual } = require('../models');

class IndividualController {
  static findAll (req, res, next) {
    Individual.findAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        return next(err);
      })
  };

  static findOne (req, res, next) {
    Individual.findOne()
  }

  static createIndividual (req, res, next) {
    const { name, gender, date_of_birth, place_of_birth, address, location, instagram, facebook } = req.body;
    let UserId = req.UserId;
    Individual.create({
      name,
      gender,
      date_of_birth,
      place_of_birth,
      address,
      location,
      instagram,
      facebook,
      UserId
    })
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        return next(err);
      });
  };

  static updateIndividual (req, res, next) {
    const { id } = req.params;
    const { name, gender, date_of_birth, place_of_birth, address, instagram, facebook } = req.body;
    let UserId = req.UserId;
    let updated = { name, gender, date_of_birth, place_of_birth, address, instagram, facebook }
    Individual.update(updated, {
      where: {
        id
      }, returning: true
    })
      .then(result => {
        if (result[0] > 0) {
          res.status(200).json(result[1][0]);
        } else {
          return next({
            code: 404,
            msg: 'Data not found'
          });
        }
      })
      .catch(err => {
        return next(err);
      })
  };

  static deleteIndividual (req, res, next) {
    let { id } = req.params;
    let UserId = req.UserId;
    let deleted;
    Individual.findOne({
      where: {
        id
      }
    })
      .then(result => {
        deleted = result;
        return Individual.destroy({
          where: {
            id
          }
        })
      })
      .then(data => {
        if (deleted) {
          res.status(200).json({
            msg: `Successfully deleted individual`
          })
        } else {
          return next({
            code: 404,
            msg: 'Data not found'
          })
        }
      })
      .catch(err => {
        return next(err);
      })
  };
};

module.exports = IndividualController;