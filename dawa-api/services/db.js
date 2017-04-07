'use strict'
var mongoose = require('mongoose');


exports.idify = function(id){
  return new mongodb.ObjectID(id);
}

exports.connect = function(url) {
  mongoose.connect(url, function(err) {
    if (err) {
      console.log('Unable to connect to Mongo.');
      process.exit(1);
    }
     else {
        console.log('Conncected to mongo db');
      }
    });
  }


