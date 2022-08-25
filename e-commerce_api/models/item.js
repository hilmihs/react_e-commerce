'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Cart)
    }
  }
  Item.init({
    title: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.STRING(1000),
    price: DataTypes.DECIMAL(19, 2),
    brand: DataTypes.STRING,
    detail_product: DataTypes.STRING(2500),
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};