const AttendanceModel = require('../../models/attendance/attendencemodel');
const AddProgressModel = require('../../models/attendance/attendencemodel');

const getAttendenceRecord = async (req, res) => {
    let x = await AttendanceModel.find();
    console.log('xxxxxxxx', x);
}

const updateAttendence = async (req, res) => {
    try {
        const x = req.body.todayprogress;
        console.log('xxxxxxxxxx',x);
        const addprogress = new AddProgressModel({ });
        let todayprogress = [];
        for (let i = 0; i < x.length; i++) {

            const data = {
                logtime: x[i].logtime,
                hrs_min: x[i].hrs_min,
                category: x[i].category,
                subcategory: x[i].subcategory,
                description: x[i].description
            }
            todayprogress.push(data);
        }
        addprogress.todayprogress = todayprogress;
        const Progressresponse = await addprogress.save();
        console.log('Progressresponse', Progressresponse);
        res.status(200).json({
            msg: 'Progress saved',
            response: Progressresponse.todayprogress,
            status: 1
        });
        // const addprogress = new AddProgressModel({
        //     todayprogress: [{
        //         hours: req.body.hours,
        //         category: req.body.category,
        //         skill: req.body.skill
        //     }]
        // });

        // const Progressresponse = await addprogress.save();
        // console.log('Progressresponse',Progressresponse);
        // res.status(200).json({
        //     msg: 'Progress saved',
        //     response: Progressresponse.todayprogress,
        //     status: 1
        // });
    } catch (error) {
        console.log('something went wrong', error);
    }

}

const accoutncontroller = module.exports = { getAttendenceRecord, updateAttendence }