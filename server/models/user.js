'use strict';

const { encrypt } = require('../helpers/bcrypt.js');

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Individual);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Email is required',
          },
          notEmpty: {
            args: true,
            msg: 'Email cannot be empty',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Password is required',
          },
          notEmpty: {
            args: true,
            msg: 'Password cannot be empty',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(user) {
          user.password = encrypt(user.password);
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
