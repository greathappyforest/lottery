var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/lotteries');

// Get All lotteries
router.get('/', function(req, res, next) {
    db.lotteries.find(function(err, lotteries) {
        if (err) {
            res.send(err);
        }
        res.json(lotteries);
    });
});

// Get Single lottery
router.get('/:id', function(req, res, next) {
    db.lotteries.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, lottery) {
        if (err) {
            res.send(err);
        }
        res.json(lottery);
    });
});

//Save lottery
router.post('/', function(req, res, next) {
    var lottery = req.body;
    if (!lottery.username) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.luckyNumberdb.find(function(err, luckyNumberdb) {
            var lucky = luckyNumberdb[0].luckyNumber
            db.lotteries.find(function(err, lotteries) {
                for (var i = 0; i < lotteries.length; i++) {
                    var diff = Math.abs(lotteries[i].lotteryKey - lucky)
                    db.lotteries.update({ _id: lotteries[i]._id }, { $set: { "diff": diff } })
                }
            })
        })
        db.lotteries.save(lottery, function(err, lottery) {
            if (err) {
                res.send(err);
            }
            res.json(lottery);
        });
    }

});

// Delete lottery
router.delete('/:id', function(req, res, next) {
    db.lotteries.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, lottery) {
        if (err) {
            res.send(err);
        }
        res.json(lottery);
    });
});

// Update lottery
router.put('/:id', function(req, res, next) {
    var lottery = req.body;
    var updlottery = {};

    if (lottery.username) {
        updlottery.username = lottery.username;
    }
    if (lottery.lotteryKey) {
        updlottery.lotteryKey = lottery.lotteryKey;
    }
    if (lottery.diff) {
        updlottery.diff = lottery.diff;
    }


    if (!updlottery) {
        res.status(400);
        res.json({

            "error": "Bad Data"
        });
    } else {
        db.lotteries.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updlottery, {}, function(err, lottery) {
            if (err) {
                res.send(err);
            }
            res.json(lottery);
        });
    }
});

module.exports = router;