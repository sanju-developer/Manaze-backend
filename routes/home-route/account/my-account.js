const express = require('express');
const acc_routes = require('express-promise-router')();
const accoutncontroller = require('../../../controllers/account/attendence');

acc_routes.get('/get-attendance', (req,res,next) =>{
    // res.send('you are in my-acount route');
    accoutncontroller.getAttendenceRecord(req,res);
});

acc_routes.post('/update-attendance', (req,res,next) => {
    // accoutncontroller.updateAttendence(req,res);
    let required_key = {
        logtime: Number ,
        hrs_min: String ,
        category: String ,
        subcategory: String ,
        description: String  
       };

    try{
        let result = validate_body(req.body,required_key);
        if(result){
            next();
        }else{
            res.status(402).json({msg:'Invalid keys'});  
        }
    }catch(error){
        next(error);  
    }

},(req,res,next) => {
    // res.send('you are in my-acount route');
    accoutncontroller.updateAttendence(req,res);
    next();
})

// validate incoming data
const validate_body = (req_body_data,required_key) => {
    let clientsidekeys = Object.keys(req_body_data.todayprogress[0]);
    let serversidekeys = Object.keys(required_key);
    let anyInformationNotMatches = false;

    // console.log('------------------->',clientsidekeys,serversidekeys);
    
    clientsidekeys.map((keys,index) => {
        if((serversidekeys[index] === keys) && (typeof serversidekeys[index] === typeof keys)){
            console.log('succccesss');
        }else{
            console.log('failure');
            anyInformationNotMatches = true;
        }
    });

    if(anyInformationNotMatches){
        console.log('invalid keys');
        return false;
    }else{
        return true;
    }
}

module.exports = acc_routes;