const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/database/database');
const user = require('./routes/user-route/user');
const my_account = require('./routes/home-route/account/my-account');

var port = 4040;
var app = express();


// connect to mongodb
mongoose.connect(db.database,{ useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    if (db) { console.log('you are connected to Mongodb'); }
});

// bodyparser middleware
// to parse incoming data in JSON format
app.use(body_parser.json());
// If extended is false, you can not post "nested object"
app.use(body_parser.urlencoded({ extended: true}));

// app listening on port = 2300
app.listen(port, (err) => {
    if (err) throw err;
    console.log('listen on port :', port);
});

// Routing to controllers
app.use('/', user);
app.use('/my_account',my_account);

exports = app;