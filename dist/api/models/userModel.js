
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter the name of the user'
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  address: {
    type: Object
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
