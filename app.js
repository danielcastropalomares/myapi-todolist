require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

//route vars
var todosRouter = require('./routes/todos');


//mongodb connection
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', (error) =>(console.error(error)));
db.once('open',()=> console.log('Connected to database'))



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/todos', todosRouter);

module.exports = app;
