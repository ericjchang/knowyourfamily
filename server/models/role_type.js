'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role_Type extends Model {
    static associate(models) {
      Role_Type.hasMany(models.Relationship);
    }
  }
  Role_Type.init(
    {
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role_Type',
    }
  );
  return Role_Type;
};
