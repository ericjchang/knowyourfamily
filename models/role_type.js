'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role_Type.hasMany(models.Relationship)
    }
  };
  Role_Type.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role_Type',
  });
  return Role_Type;
};