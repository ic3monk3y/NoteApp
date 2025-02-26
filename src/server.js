const express = require('express');
const path = require('path');

//Initialization
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('Views', path.join(__dirname, 'Views'));

//Middleware
app.use(express.urlencoded({extended: false}));

//Global variables

//Routes
app.get( '/',(req, res) => {res.send('hello world');} );

//Static files
app.use(express.static(path.join(__dirname, 'Plubic')));

module.exports = app;