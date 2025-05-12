'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductReview extends Model {}
  ProductReview.init({
    productId: DataTypes.STRING,
    userId: DataTypes.STRING,
    userName: DataTypes.STRING,
    reviewMessage: DataTypes.TEXT,
    reviewValue: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductReview',
    tableName: 'ProductReviews',
    timestamps: true
  });
  return ProductReview;
};
