const { Schema, model } = require('mongoose')
const notificationSchema = new Schema({
    notification: Number
});
module.exports = model('Notification', notificationSchema);