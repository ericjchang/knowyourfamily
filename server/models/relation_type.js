'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relation_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Relation_Type.hasMany(models.Relationship)
    }
  };
  Relation_Type.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Relation_Type',
  });
  return Relation_Type;
};