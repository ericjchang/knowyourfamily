'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addConstraint('Relationships', {
        fields: ['IndividualId1'],
        type: 'foreign key',
        name: 'fkey_Individual1',
        references: {
          table: 'Individuals',
          field: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      })
      .then(() => {
        return queryInterface.addConstraint('Relationships', {
          fields: ['IndividualId2'],
          type: 'foreign key',
          name: 'fkey_Individual2',
          references: {
            table: 'Individuals',
            field: 'id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      })
      .then(() => {
        return queryInterface.addConstraint('Relationships', {
          fields: ['RoleTypeId'],
          type: 'foreign key',
          name: 'fkey_RoleTypeId',
          references: {
            table: 'Role_Types',
            field: 'id',
          },
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Relationships', 'fkey_Individual1').then(() => {
      return queryInterface.removeConstraint('Relationships', 'fkey_Individual2').then(() => {
        return queryInterface.removeConstraint('Relationships', 'fkey_RoleTypeId');
      });
    });
  },
};
