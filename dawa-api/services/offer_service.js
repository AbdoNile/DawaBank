var db = require('./db');
var _ = require('lodash');

var offer_service = {
    get_all : function(cb){
        db.get().collection("offers").find().toArray(cb);
    },  
    add : function(offer, cb){
        offer.Id = _.uniqueId('offer_');
        db.get().collection("offers").insertOne(offer, cb);
    },
    delete : function(id, cb){
        db.get().collection("offers").deleteOne({ _id : db.idify(id) }, cb);
    }
}

module.exports = offer_service;