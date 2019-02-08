const mongoose = require('mongoose');

// 0 - Off
// 1 - present
// 2 - leave
// 3 - Off
// 4 - EWD
const AttendanceSchema = mongoose.Schema({
    date : { type: Date },
    firsthalf: { type: Number },
    secondhalf: { type: Number },
    status: { type: Number }
});

const AddProgressSchema = mongoose.Schema({
    todayprogress : [{
     logtime: { type: Number },
     hrs_min:  { type:  String },
     category: { type:  String },
     subcategory: { type:  String },
     description: { type:  String }   
    }]
})

const AttendanceModel = module.exports = mongoose.model('AttendanceModel', AttendanceSchema);

const AddProgressModel = module.exports = mongoose.model('AddProgressModel', AddProgressSchema);
