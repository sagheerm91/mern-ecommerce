'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {}
  Product.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.FLOAT,
    salePrice: DataTypes.FLOAT,
    totalStock: DataTypes.INTEGER,
    averageReview: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products',
    timestamps: true
  });
  return Product;
};
