'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Component extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Component.belongsToMany(models.Profile, {
        through: 'ComponentProfile'
      })
    }
  };
  Component.init({
    komponen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Component',
  });
  return Component;
};