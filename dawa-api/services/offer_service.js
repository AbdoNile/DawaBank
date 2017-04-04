var db = require('./db');

var offer_service = {
    add : function(offer, cb){
        db.get().collection("offers").insertOne(offer, cb);
    }



}

module.exports = offer_service;