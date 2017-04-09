var db = require('./db');
var Medication = require('../models/medication.model');
var _ = require('lodash');

var medication_service = {
    match : function(match, cb){
        Medication.find({ trade_name  : { $regex: match , $options : "i" }}).limit(10).exec(cb);
    }
}

module.exports = medication_service;