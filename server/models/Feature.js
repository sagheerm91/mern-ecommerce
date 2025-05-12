'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {}
  Feature.init({
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feature',
    tableName: 'Features',
    timestamps: true
  });
  return Feature;
};
