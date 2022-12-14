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
        console.log('No files were uploaded.');
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
        const { title, rate, description, price, brand, detail_product } = req.body
        let create = {}
        if (title)          create['title'] = title;
        if (rate)           create['rate'] = parseInt(rate);
        if (description)    create['description'] = description;
        if (price)          create['price'] = parseInt(price);
        if (brand)          create['brand'] = brand;
        if (detail_product) create['detail_product'] = detail_product;
        if (like)           create['like'] = like;
        if (image)          create['image'] = image
        models.Item.create(create).then(function (data) {
            res.json(new Response(data))
        }).catch(() => {
            res.status(500).json(new Response(e, false))
        })

    });

})


router.put('/:id', async function (req, res, next) {
    try {
        const { title, rate, description, price, brand, detail_product, like } = req.body
        let update = {}
        if (title)          update['title'] = title;
        if (rate)           update['rate'] = parseInt(rate);
        if (description)    update['description'] = description;
        if (price)          update['price'] = parseInt(price);
        if (brand)          update['brand'] = brand;
        if (detail_product) update['detail_product'] = detail_product;
        if (like)           update['like'] = parseInt(like);
        let gambar;
        let uploadPath;
        if (!req.files || Object.keys(req.files).length === 0) {
            console.log('No files were uploaded.');
        } else {
            gambar = req.files.gambar;
            const image = `A${Date.now()}-${gambar.name}`
            uploadPath = path.join(__dirname, '/../public', 'gambar', image);
            uploadPathReact = path.join(__dirname, '/../../e-commerce_app/public/pictures/', 'gambar', image);
            gambar.mv(uploadPathReact, function (err) {
                if (err) console.log('error upload photo to react', err)
                if (image)  update['image'] = image
            })
            gambar.mv(uploadPath, function (err) {
                if (err) console.log('error upload photo to react', err)
            })
        }
        console.log(update)
        const data = await models.Item.update(update, {
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