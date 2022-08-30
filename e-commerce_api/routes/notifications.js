const express = require('express');
const router = express.Router();
var Notification = require('../MongoModels/notification')
const { Response } = require('../helpers/util');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {
        const data = await Notification.find()
        //.populate({ path: 'user', select: 'name' }) buat outer join
        res.json(new Response(data))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }


});

router.post('/', async function (req, res, next) {
    try {
        const { notification } = req.body
       // const user = await User.findById(UserId)
       const data = await Notification.create({ notification })
       // user.todos.push(todo._id)
       // await user.save()
        res.json(new Response(data))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }
});

router.put('/:id', async function (req, res, next) {
    try {
        const { notification } = req.body
        const data = await Notification.findByIdAndUpdate(
            req.params.id,
            {
                notification
            }, {
            new: true
        })
        res.json(new Response(data))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }
});
router.delete('/:id', async function (req, res, next) {
    try {
        const data = await Notification.findByIdAndRemove(req.params.id)
        res.json(new Response(data))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }


});
module.exports = router;