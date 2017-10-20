'use strict'

var mongoose = require('mongoose');
var Location = require('./location.model');
var Schema = mongoose.Schema;

var UserSchema = new Schema({ 
    portalId : "string", 
    favourite_locations :  [{ 
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
    }]
}); 




module.exports = mongoose.model('User', UserSchema);