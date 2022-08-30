const express = require('express');
const router = express.Router();
var Comment = require('../MongoModels/comment')
const { Response } = require('../helpers/util');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {
        const data = await Comment.find()
        //.populate({ path: 'user', select: 'name' }) buat outer join
        res.json(new Response(data))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }


});

router.post('/', async function (req, res, next) {
    try {
        const { username, message, rate, picture } = req.body
        const date = new Date(Date.now())
       // const user = await User.findById(UserId)
       const data = await Comment.create({ username, message, rate, picture, date })
       // user.todos.push(todo._id)
       // await user.save()
        res.json(new Response(data))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }
});

router.put('/:id', async function (req, res, next) {
    try {
        const { username, message, rate, picture } = req.body
        const data = await Comment.findByIdAndUpdate(
            req.params.id,
            {
                username, message, rate, picture
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
        const data = await Comment.findByIdAndRemove(req.params.id)
        res.json(new Response(data))
    } catch (e) {
        res.status(500).json(new Response(e, false))
    }


});
module.exports = router;