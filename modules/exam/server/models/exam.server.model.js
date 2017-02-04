'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Exam Schema
 */
var examSchema = new Schema({
  qtnNo: {
    type: Number
  },
  qtnText: {
    type: String
  },
  answers: [{
    option: {
      type: String
    },
    optionText: {
      type: String
    },
    isCorrect: {
      type: Boolean,
      default: false
    }
  }]
});

mongoose.model('examS', examSchema);
