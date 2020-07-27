'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Relationships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      detail: {
        type: Sequelize.STRING
      },
      IndividualId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Individuals',
          key: 'id'
        },
        onUpdate: 'Cascade',
        onDelete: 'Cascade'
      },
      Relation_TypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Relation_Types',
          key: 'id'
        },
        onUpdate: 'Cascade',
        onDelete: 'Cascade'
      },
      Role_TypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Role_Types',
          key: 'id'
        },
        onUpdate: 'Cascade',
        onDelete: 'Cascade'
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Relationships');
  }
};