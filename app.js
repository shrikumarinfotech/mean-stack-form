/**
 * Name: Mean Stack Form
 * Description: NodeJs form submission saves data as JSON in MongoDB
 * Version: 1.0.0
 * Author: Shrikumar Infotech
 * Author URL: 
 * Date:
 * License:
 */

'use strict';

// Import express and setup app
const express = require('express');
const app = express();

// setup PORT
const port = process.env.PORT || 3000;

// setup template engine
app.set('view engine', 'ejs');

// setup static file directory path
app.use('/assets', express.static(__dirname + '/public'));
app.use('/lib', express.static(__dirname + '/node_modules/angular'));

// import controllers
const apiController = require('./controllers/apiController');
const viewController = require('./controllers/viewController');

// setup homepage
app.get('/', function(req, res){
    res.render('index');
});

// call controllers with express app
apiController(app);
viewController(app);


// listen on PORT
app.listen(port, function(err){
    if(err) throw err;
    console.log(`Listening on port: ${port}`);
});