var express = require('express');
var router = express.Router();
var path = require('path');
var eventdata= require(path.resolve(__filename,'../../eventdata.json'))
// Get All marketplacedb
router.get('/', function (req, res, next) {
    res.json(eventdata);
});

router.get('/countdown', function (req, res, next) {
    var endTime = new Date(eventdata.eventEndTime).getTime()

    var d = new Date();
    var currTime = d.getTime();

    var countdown;
    console.log( endTime-currTime)
    if(endTime-currTime>0){
        countdown = endTime-currTime;
    }
    else{
        countdown=0;
    }
     res.json({'countdown':countdown});


});


router.get('/state', function (req, res, next) {
    var endTime = new Date(eventdata.eventEndTime).getTime()
    var startTime = new Date(eventdata.eventStartTime).getTime()

    var d = new Date();
    var currTime = d.getTime();

    var state;
    console.log( endTime-currTime)
    if(currTime-startTime<0){
        //before event
        state = 0;
    }
    if(currTime-startTime>0 && currTime-endTime<0){
        //in the event
        state=1;
    }
    if(currTime-endTime>0){
        //passed event
        state=2;
    }
     res.json({'state':state});

});




module.exports = router;
