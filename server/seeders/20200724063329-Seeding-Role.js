'use strict';
const descriptions = require('../data/role.json').map((description) => {
  description.createdAt = new Date();
  description.updatedAt = new Date();
  return description;
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Role_Types', descriptions, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Role_Types', null, {});
  },
};
