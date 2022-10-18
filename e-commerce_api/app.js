var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var path = require('path');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartsRouter = require('./routes/carts');
var itemsRouter = require('./routes/items');
var commentsRouter = require('./routes/comments');
var notificationsRouter = require('./routes/notifications');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/ecommercedb');
}

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);
app.use('/carts', cartsRouter);
app.use('/notifications', notificationsRouter);
app.use('/comments', commentsRouter);

module.exports = app;
