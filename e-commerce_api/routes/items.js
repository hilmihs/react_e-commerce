const express = require('express');
const router = express.Router();
const models = require('../models/index');
const { Response } = require('../helpers/util');
var path = require('path');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {
        const data = await models.Item.findAll({})
        res.json(new Response(data))
    } catch (e) {
        res.status(500).json(new Response(e, false))
        console.log(e)
    }
});

router.post('/', function (req, res, next) {

    let gambar;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    gambar = req.files.gambar;
    const image = `A${Date.now()}-${gambar.name}`
    uploadPath = path.join(__dirname, '/../public', 'gambar', image);
    uploadPathReact = path.join(__dirname, '/../../e-commerce_app/public/pictures/', 'gambar', image);
    gambar.mv(uploadPathReact, function (err) {
        if (err)
        console.log('error upload photo to react', err)
    })
    gambar.mv(uploadPath, function (err) {
        if (err)
        console.log('error upload photo to API', err)
        const like = 0
        const { title, rate, description, price, brand, detail_product, image } = req.body
        models.Item.create(
            {
                title, rate, description, price, brand, detail_product,like, image
            }
        ).then(function (data) {
            res.json(new Response(data))
        }).catch(() => {
            res.status(500).json(new Response(e, false))
        })

   });

})


router.put('/:id', async function (req, res, next) {
    try {
        const { title, rate, description, price, brand, detail_product, like } = req.body
        const data = await models.Item.update({
            title, rate, description, price, brand, detail_product, like
        }, {
            where: {
                id: req.params.id
            },
            returning: true,
            plain: true
        })
        res.json(new Response(data[1]))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }
});

router.delete('/:id', async function (req, res, next) {
    try {
        const data = await models.Item.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(new Response(data, data ? true : false))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }

});
module.exports = router;