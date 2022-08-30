const { Schema, model } = require('mongoose')
const commentSchema = new Schema({
    username: String,
    message: String,
    rate: Number,
    picture: String,
    date: Date
});
module.exports = model('Comment', commentSchema);