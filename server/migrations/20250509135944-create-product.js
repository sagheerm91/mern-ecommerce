'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: Sequelize.STRING,
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      category: Sequelize.STRING,
      brand: Sequelize.STRING,
      price: Sequelize.FLOAT,
      salePrice: Sequelize.FLOAT,
      totalStock: Sequelize.INTEGER,
      averageReview: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};