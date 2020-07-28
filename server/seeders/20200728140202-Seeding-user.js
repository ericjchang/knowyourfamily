'use strict';
const user = require('../data/user.json');
user.forEach((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', user, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
