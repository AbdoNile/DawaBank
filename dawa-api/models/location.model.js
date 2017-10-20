'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LocationSchema = new Schema(
    {
        contact_person : {
            type : String,
            required : true
        },
        phone : {
            type : String,
            required : false
        },
        notes : {
            type : String,
            required : false
        },
        position : {
            lat : Number,
            lng : Number
        },
        title : String,
        google_address_id : String
    }
);


module.exports = mongoose.model('Location', LocationSchema);