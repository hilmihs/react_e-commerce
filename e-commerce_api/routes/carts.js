const express = require('express');
const router = express.Router();
const models = require('../models/index');
const { Response } = require('../helpers/util');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {

    const data = await models.Cart.findAll({
      include: models.Item
    })
    res.json(new Response(data))
  } catch (e) {
    res.status(500).json(new Response(e, false))
    console.log(e)
  }


});

router.post('/', async function (req, res, next) {
  try {
    const { ItemId } = req.body
    let where = { id: ItemId };
    const dataId = await models.Item.findOne({ where: where })
    const price = dataId.dataValues.price;
    const qty = 1;
    const data = await models.Cart.create({ ItemId, total_harga: qty * price, harga_item: price }, {
      individualHooks: true
    })
    res.json(new Response(data))
  } catch (e) {
    res.status(500).json(new Response(e, false))
    console.log(e)
  }
});

router.put('/:id', async function (req, res, next) {
  try {
    const { qty } = req.body
    const quantity = parseInt(qty)
    const id = req.params.id
    let where = { id };
    const dataId = await models.Cart.findOne({ where: where })
    console.log(where)
    const harga_item = dataId.dataValues.harga_item;
    const data = await models.Cart.update({
      qty: quantity,
      total_harga: quantity * harga_item
    }, {
      individualHooks: true
    }, {
      where: {
        id
      },
      returning: true,
      plain: true
    })
    res.json(new Response(data[1] ? data[1] : data))
  } catch (e) {
    res.status(500).json(new Response(e, false))
    console.log(e)
  }
});
router.delete('/:id', async function (req, res, next) {
  try {
    const data = await models.Cart.destroy({
      where: {
        id: parseInt(req.params.id)
      }
    }, {
      individualHooks: true
    })
    res.json(new Response(data, data ? true : false))
  } catch (e) {
    res.status(500).json(new Response(e, false))
    console.log(e)
  }


});
module.exports = router;