const { Relationship, Individual, Role_Type } = require('../models');
const Op = require('sequelize').Op;

class SuggestionController {
  static findAll(req, res, next) {
    const id = req.headers.userid;
    const data = [];
    const suggest = [];

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
        result.forEach((el) => {
          if (el.Individual1.id !== +id) data.push(el.Individual1.id);
          else data.push(el.Individual2.id);
        });
        return Relationship.findAll({
          where: {
            [Op.or]: {
              IndividualId1: data,
              IndividualId2: data,
            },
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
        });
      })
      .then((result) => {
        result.forEach((el) => {
          let found1 = false;
          let found2 = false;
          for (let i = 0; i < data.length - 1; i++) {
            if (el.IndividualId1 === +data[i] || el.IndividualId1 === +id) found1 = true;
            if (el.IndividualId2 === +data[i] || el.IndividualId2 === +id) found2 = true;
          }
          if (!found1) suggest.push(el.Individual1);
          if (!found2) suggest.push(el.Individual2);
        });
        res.status(200).json(suggest);
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  }
}

module.exports = SuggestionController;
