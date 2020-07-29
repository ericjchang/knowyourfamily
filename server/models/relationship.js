'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Relationship extends Model {}

  Relationship.init(
    {
      IndividualId1: DataTypes.INTEGER,
      IndividualId2: DataTypes.INTEGER,
      RoleTypeId: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (relation) => {
          relation.status = false;
        },
      },
    }
  );
  Relationship.associate = function (models) {
    Relationship.belongsTo(models.Individual, { as: 'Individual1', foreignKey: { name: 'IndividualId1' } });
    Relationship.belongsTo(models.Individual, { as: 'Individual2', foreignKey: { name: 'IndividualId2' } });
    Relationship.belongsTo(models.Role_Type);
  };
  return Relationship;
};
