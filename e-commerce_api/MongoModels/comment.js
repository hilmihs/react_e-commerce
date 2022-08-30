const { Schema, model } = require('mongoose')
const commentSchema = new Schema({
    username: String,
    title: String
});
module.exports = model('Comment', commentSchema);