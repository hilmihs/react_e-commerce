'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.hasMany(models.Item)
    }
  }
  Cart.init({
    id_item: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total_harga: DataTypes.DECIMAL(19, 2),
    harga_item: DataTypes.DECIMAL(19, 2)
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};