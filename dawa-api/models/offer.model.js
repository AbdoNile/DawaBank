'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OfferSchema = new Schema({
    acknowledge: {
        agreed: {
            type: Boolean
        }
    },
    medication : {
        product: {
            item: {
                _id: {
                    type: String
                },
                generic_name: {
                    type: String
                },
                product_control: {
                    type: String
                },
                registration_no: {
                    type: String
                },
                storage_conditions: {
                    type: String
                },
                trade_name: {
                    type: String
                }
            }
        },
        quantity: {
            type: String
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