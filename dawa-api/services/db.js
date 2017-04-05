var MongoClient = require('mongodb').MongoClient;
var mongodb = require('mongodb');
var assert = require('assert');



var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
}

exports.idify = function(id){
  return new mongodb.ObjectID(id);
}

exports.connect = function(url, done) {
  if (state.db) return done()

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err)
    state.db = db
    done()
  })
}

exports.get = function() {
    
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}


