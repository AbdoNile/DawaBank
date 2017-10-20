var db = require('./db');
var Offer = require('../models/offer.model');
var user_service = require('./user_service');
var _ = require('lodash');

var offer_service = {
    get_all : function(cb){
        Offer.find({}, cb);
    },  
    add : function(input, cb){
        var offer = new Offer(input);
        offer.save(offer, function(err){
            if(err == null){
                user_service.addAddress("12",  input.location,function(){
                    cb(offer);
                });
            } 
            else{
                cb(err)
            }
        });
    },
    delete : function(id, cb){
        Offer.findByIdAndRemove(id, cb);
    }
}


module.exports = offer_service;