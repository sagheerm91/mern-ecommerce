// Migration: create-product-reviews.js
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductReviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: Sequelize.STRING,
      userId: Sequelize.STRING,
      userName: Sequelize.STRING,
      reviewMessage: Sequelize.TEXT,
      reviewValue: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductReviews');
  }
};
