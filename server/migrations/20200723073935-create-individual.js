'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Individuals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
      },
      place_of_birth: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.JSON,
      },
      instagram: {
        type: Sequelize.STRING,
      },
      facebook: {
        type: Sequelize.STRING,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'Cascade',
        onDelete: 'Cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Individuals');
  },
};
