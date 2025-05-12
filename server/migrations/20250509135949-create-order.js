// Migration: create-orders.js
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: Sequelize.STRING,
      cartId: Sequelize.STRING,
      cartItems: Sequelize.JSON,
      addressInfo: Sequelize.JSON,
      orderStatus: Sequelize.STRING,
      paymentMethod: Sequelize.STRING,
      paymentStatus: Sequelize.STRING,
      totalAmount: Sequelize.FLOAT,
      orderDate: Sequelize.DATE,
      orderUpdateDate: Sequelize.DATE,
      paymentId: Sequelize.STRING,
      payerId: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};