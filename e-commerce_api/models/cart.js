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
//   Cart.afterCreate(async (cart, options) => {
//     console.log('cart', cart)
//     console.log('models', sequelize.models.Item)
//     cart.harga_item = sequelize.models.Item.price
//     cart.total_harga = cart.qty * cart.harga_item
//     sequelize.query(`
//     CREATE OR REPLACE FUNCTION update_harga() RETURNS TRIGGER AS $set_total_harga$
//     DECLARE
//     harga NUMERIC;
// BEGIN
//     SELECT price INTO harga FROM "Items" WHERE id = NEW."ItemId";
//     NEW.harga_item := harga;
//     NEW.total_harga := NEW.qty * harga;
//     
//     RETURN NEW;
// END
// $set_total_harga$ LANGUAGE plpgsql;

// CREATE TRIGGER set_total_harga
// AFTER INSERT OR UPDATE OR DELETE ON "Carts"
//     FOR EACH ROW EXECUTE FUNCTION update_harga();
//     `)
//   });

  return Cart;
};


// hooks: {
//   afterCreate: (instance, options) => {
//     console.log('instance', instance)
//     console.log('models', sequelize.models.Item)
//     instance.harga_item = sequelize.models.Item.price
//     instance.total_harga = instance.qty * instance.harga_item
//   },
//   afterUpdate: (instance, options) => {
//     instance.harga_item = sequelize.models.Item.price
//     instance.total_harga = instance.qty * instance.harga_item
//   },
//   afterDestroy: (instance, options) => {
//     instance.harga_item = sequelize.models.Item.price
//     instance.total_harga = instance.qty * instance.harga_item
//   }
// }


// Procedure 
// DECLARE
// harga numeric;
// harga_item numeric;
// total_harga numeric;
// qty numeric;
// BEGIN
// qty := 1;
// SELECT item.price INTO harga FROM "Items" item INNER JOIN "Carts" cart ON cart."ItemId" = item.id;
// RAISE NOTICE 'harga value: %', harga;
// harga_item := harga;
// RAISE NOTICE 'harga_item value: %', harga_item;
// total_harga := qty * harga;
// RAISE NOTICE 'total_harga value: %', total_harga;
// END