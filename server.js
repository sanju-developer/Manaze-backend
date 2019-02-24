const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/database/database');
const user = require('./routes/user-route/user');
const my_account = require('./routes/home-route/account/my-account');
const cors = require('cors');

var port = 4040;
var app = express();


// connect to mongodb
mongoose.connect(process.env.MONGODB_URI || db.database, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    if (db) { console.log('you are connected to Mongodb'); }
});

// use cors
app.use(cors());

// bodyparser middleware
// to parse incoming data in JSON format
app.use(body_parser.json());
// If extended is false, you can not post "nested object"
app.use(body_parser.urlencoded({ extended: true}));

// app listening on port = 2300
app.listen( process.env.PORT || port, (err) => {
    if (err) throw err;
    console.log('listen on port :', port);
});

// Routing to controllers
app.use('/user', user);
app.use('/my_account',my_account);

exports = app;