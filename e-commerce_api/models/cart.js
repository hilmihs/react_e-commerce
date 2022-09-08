'use strict';
const {
  Model
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Item, {
        onDelete: 'cascade', hooks: true
      })
    }
  }
  Cart.init({
    qty: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    total_harga: DataTypes.DECIMAL(19, 2),
    harga_item: DataTypes.DECIMAL(19, 2),
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  
  return Cart;
};




