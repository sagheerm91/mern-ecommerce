'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {}
  Order.init({
    userId: DataTypes.STRING,
    cartId: DataTypes.STRING,
    cartItems: DataTypes.JSON,
    addressInfo: DataTypes.JSON,
    orderStatus: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    paymentStatus: DataTypes.STRING,
    totalAmount: DataTypes.FLOAT,
    orderDate: DataTypes.DATE,
    orderUpdateDate: DataTypes.DATE,
    paymentId: DataTypes.STRING,
    payerId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
    timestamps: true
  });
  return Order;
};
