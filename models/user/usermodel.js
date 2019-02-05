const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : { type: String },
    empid:{ type: String },
    email: { type: String },
    password: { type: String }
});

const User = module.exports = mongoose.model('User', UserSchema);
