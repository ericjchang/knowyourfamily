'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Individual extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Individual.hasMany(models.Relationship)
      Individual.belongsTo(models.User)
    }
  };
  Individual.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Name is required'
        },
        notEmpty: {
          args: true,
          msg: 'Name cannot be empty'
        }
      }
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      validate: {
        isIn: {
          args: [['male', 'female', 'other']],
          msg: 'Gender must be choosen'
        }
      }
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Birthdate is required'
        },
        notEmpty: {
          args: true,
          msg: 'Birthdate cannot be empty'
        }
      }
    },
    place_of_birth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Birthplace is required'
        },
        notEmpty: {
          args: true,
          msg: 'Birthplace cannot be empty'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Address is required'
        },
        notEmpty: {
          args: true,
          msg: 'Address cannot be empty'
        }
      }
    },
    location: {
      type: DataTypes.STRING
    },
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'Cascade',
      onDelete: 'Cascade'
    },
  }, {
    sequelize,
    modelName: 'Individual',
  });
  return Individual;
};