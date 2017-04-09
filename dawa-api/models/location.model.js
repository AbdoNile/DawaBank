'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LocationSchema = new Schema({ });


module.exports = mongoose.model('Location', LocationSchema);