var express = require('express');
var router = express.Router();
const mongoose= require('mongoose');
var userModel = require('../models/userModel');

router.get('/', function(req, res, next) {
     
    userModel.find((err, docs) => {
        if (!err) {
            res.render("table", {
                data: docs
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
});
module.exports = router;