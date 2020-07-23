'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Relationship.belongsTo(models.Individual);
      Relationship.belongsTo(models.Relation_Type);
      Relationship.belongsTo(models.Role_Type)
    }
  };
  Relationship.init({
    detail: DataTypes.STRING,
    IndividualId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Individuals',
        key: 'id'
      },
      onUpdate: 'Cascade',
      onDelete: 'Cascade'
    },
    Relation_TypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Relation_Types',
        key: 'id'
      },
      onUpdate: 'Cascade',
      onDelete: 'Cascade'
    },
    Role_TypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Role_Types',
        key: 'id'
      },
      onUpdate: 'Cascade',
      onDelete: 'Cascade'
    }
  }, {
    sequelize,
    modelName: 'Relationship',
  });
  return Relationship;
};