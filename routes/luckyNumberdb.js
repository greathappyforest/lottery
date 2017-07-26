var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/lottery');

// Get All luckyNumberdb
router.get('/', function(req, res, next) {
    db.luckyNumberdb.find(function(err, luckyNumberdb) {
        if (err) {
            res.send(err);
        }
        res.json(luckyNumberdb);
    });
});

// Get Single luckyNumber
router.get('/:id', function(req, res, next) {
    db.luckyNumberdb.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, luckyNumber) {
        if (err) {
            res.send(err);
        }
        res.json(luckyNumber);
    });
});

//Save luckyNumber
router.post('/', function(req, res, next) {
    var luckyNumber = req.body;
    if (!luckyNumber.luckyNumber) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.luckyNumberdb.save(luckyNumber, function(err, luckyNumber) {
            if (err) {
                res.send(err);
            }
            res.json(luckyNumber);
        });
    }
});

// Delete luckyNumber
router.delete('/:id', function(req, res, next) {
    db.luckyNumberdb.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, luckyNumber) {
        if (err) {
            res.send(err);
        }
        res.json(luckyNumber);
    });
});

// Update luckyNumber
router.put('/:id', function(req, res, next) {
    var luckyNumber = req.body;
    var updluckyNumber = {};

    if (luckyNumber.luckyNumber) {
        updluckyNumber.luckyNumber = luckyNumber.luckyNumber;
    }

    if (!updluckyNumber) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.luckyNumberdb.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updluckyNumber, {}, function(err, luckyNumber) {
            if (err) {
                res.send(err);
            }
            res.json(luckyNumber);
        });
    }
});

module.exports = router;