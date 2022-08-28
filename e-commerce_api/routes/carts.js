const express = require('express');
const router = express.Router();
const models = require('../models/index');
const { Response} = require('../helpers/util');

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
    const data = await models.Cart.create({ ItemId }, { 
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
    const data = await models.Cart.update({
      qty
    }, { 
      individualHooks: true 
    }, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })
    res.json(new Response(data[1] ? data[1] : data))
  } catch (e) {
    res.status(500).json(new Response(e, false))
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