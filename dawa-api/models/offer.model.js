'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OfferSchema = new Schema({
    offer : {
        medicine_name : {
            type : String,
            required : true
        },
        expiry_date: {
            type : Date,
            required : true
        },
        quantity : {
            type : Number,
            required : true
        }
    },
    location : {
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

});

module.exports = mongoose.model('Offer', OfferSchema);