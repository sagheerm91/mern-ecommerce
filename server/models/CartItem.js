'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      CartItem.belongsTo(models.Cart, { foreignKey: 'cartId' });
      CartItem.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  CartItem.init({
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    }
  }, {
    sequelize,
    modelName: 'CartItem',
    tableName: 'CartItems',
    timestamps: true
  });
  return CartItem;
};
