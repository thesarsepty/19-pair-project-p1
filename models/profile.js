'use strict';
const {
  Model
} = require('sequelize');
const BcryptPassword = require('../helpers/hash-password')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {

    // tambahin method buat gabungin komponen kepribadiannya

    static associate(models) {
      // define association here
      Profile.belongsToMany(models.Component, {
        through: 'ComponentProfile'
      })
    }
  };
  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Nama tidak boleh kosong!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Nama tidak boleh kosong!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Nama tidak boleh kosong!'
        }
      }
    },
    isAdmin: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        if (instance.password === 'admin123') {
          instance.isAdmin = true
        } else {
          instance.isAdmin = false
        }
        instance.password = BcryptPassword.hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};