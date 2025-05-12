'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Address.init({
    user_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.STRING,
    phone: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
    tableName: 'Addresses',
    timestamps: true
  });
  return Address;
};
